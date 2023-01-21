const jwt = require("jsonwebtoken");

const catchAsync = require("./../utils/catchAsync");
const User = require("./../model/userAuthModel");
const AppError = require("./../utils/appError");


const signToken = (id) => {
  return jwt.sign({ id }, "mysecretkey", {
    expiresIn: "90d",
  });
};


const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + 90 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };
  res.cookie('jwt', token, cookieOptions);

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
};



exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword});

  // console.log(url);
  
  createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  // console.log(req.body)
  const { email, password } = req.body;
  if (!email || !password) {
    //so that after the response no other response will send to client
    return next(new AppError("Please provide email and password", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  // console.log(user);
  if (!user) {
    return next(new AppError("Invalid email or password", 401));
  }
  const correct = await user.correctPassword(password, user.password);
  // console.log("kkk");
  if (!correct) {
    return next(new AppError("Invalid email or password", 401));
  }
  createSendToken(user, 200, res);
});



exports.protect = catchAsync(async (req, res, next) => {
  let token;
  //Checking if it contain token or not
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  if (!token) {
    return next(new AppError("You are not logged in! Please login first", 401));
  }

  //Verification
  // console.log(token)
  // const decoded=await promisify(jwt.verify)(token,'mysecretkey')
  const decoded = jwt.verify(token, "mysecretkey");
  console.log(decoded);
  //User is still a active user
  const freshUser = await User.findById(decoded.id);
  if (!freshUser) {
    return next(
      new AppError("User belonging to this token does no longer exists", 401)
    );
  }

  //Grant access to the user
  req.user = freshUser;

  next();
});


exports.isLoggedIn = async (req, res, next) => {
  // console.log(req.cookies)
  if (req.cookies.jwt) {
    try {
      // 1) verify token
      // console.log("1")
      const decoded = await (jwt.verify)(
        req.cookies.jwt,
        'mysecretkey'
      );
      // console.log("2")
      // 2) Check if user still exists
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next();
      }

// console.log(decoded)
      // THERE IS A LOGGED IN USER
      res.locals.user = currentUser;
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};



