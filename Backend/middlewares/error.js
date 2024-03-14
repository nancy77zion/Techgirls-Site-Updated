

//CUSTOM ERROR HANDLER: to throw error if password is incorrect or if user iput a wrong details
const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode; // equal to statusCode param
  error.message = message; // equal to message param
  return error;
};

module.exports = errorHandler;

