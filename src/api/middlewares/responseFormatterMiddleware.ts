export const responseFormatterMiddleware = (req, res, next) => {
  const response: any = {};
  response.result = req.responseObject;
  response.status = req.statusCode || 404;

  if (response.status === 404) {
    res.status(404).json({ statusCode: 404, message: "invalid path" });
  } else {
    res.status(response.status).send(response);
  }
};
