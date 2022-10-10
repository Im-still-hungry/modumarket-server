export const responseFormatterMiddleware = (req, res, next) => {

  const response: any = {};
  response.result = req.responseObject;
  response.status = req.statusCode || 404;

  res.status(response.status).send(response);
};
