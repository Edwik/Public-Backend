const response_handler = require('./../tools/response_handler')
module.exports = {
    async try_catch(eval_function, params, next) {
      let response = {};
      try {
        response = await eval_function(...params);
        response_handler(response)
      } catch (err) {
        response.message = err;
        response.err = true;
        response.status = 500;
        response.code = err.stack;
      }
      return next(response);
    }
  }