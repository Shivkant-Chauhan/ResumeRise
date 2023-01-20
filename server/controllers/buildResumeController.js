import latex from 'node-latex';
import catchAsync from "./../utils/catchAsync.js";
import AppError from "./../utils/appError.js";
// import getTemplateData from '../model/resume-templates/index.ts';
// import getTemplateData from '../templates/index.ts';
import getTemplateData from '../templates/index.ts';


async function generatePDF(formData) {
  const { texDoc, opts } = getTemplateData(formData);
  const pdf = await latex(texDoc, opts);

  return pdf;
}

const generate = catchAsync(async (req, res, next) => {
  console.log("here");
  const pdf = await generatePDF(req.body.formData);
  pdf.pipe(res);  // send data part-by-part to reduce latency.
  res.setHeader('Content-Type', 'application/pdf');
  // if (!email || !password) {
  //   //so that after the response no other response will send to client
  //   return next(new AppError("Please provide email and password", 400));
  // }

});

export default generate;