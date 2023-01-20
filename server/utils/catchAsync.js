export default () => {
    return (req, res, next) => {
    //   console.log("kfnv")
      
      fn(req, res, next).catch(next);
    //   console.log("kfnv")
    };
  };
  