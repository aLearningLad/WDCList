const errorHandler = async (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case 400:
      res.json({
        title: "Bad Request",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 401:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 403:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 404:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 405:
      res.json({
        title: "Method Not Allowed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 409:
      res.json({
        title: "Conflict",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 422:
      res.json({
        title: "Unprocessable",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 500:
      res.json({
        title: "Internal Server Has Occured",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 501:
      res.json({
        title: "Not Implemented",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 502:
      res.json({
        title: "Bad Gateway",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 503:
      res.json({
        title: "Service Uncallable",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 504:
      res.json({
        title: "Gateway Timeout",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    default:
      res.status(500).json({
        title: "Internal Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
  }
};

module.exports = errorHandler;
