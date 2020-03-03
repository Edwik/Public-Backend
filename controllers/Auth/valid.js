const joi = require('@hapi/joi');
const response_handler = require('./../../tools/response_handler');
module.exports = {

  signUp(req, res, next) {
    let validated_resp_ = validate(req.query, schema.signUp);
    if (validated_resp_.err) { res.status(validated_resp_.status).json({ validated_resp_ }) }
    next();
  },
  signIn(req, res, next) {
    let validated_resp_ = validate(req.query, signIN);
    if (validated_resp_.err) { res.status(validated_resp_.status).json({ validated_resp_ }) }
    next();
  }
}

function validate(parameters, schema) {
  let response = schema.validate(parameters);
  let Response_Handler = new response_handler('joi')
  return Response_Handler.evaluate(response);
}

const schema = {
  signUp: joi.object({
    email: joi.string().email().required(),
    password: joi.string().alphanum().required(),
    displayName: joi.string().alphanum().required(),
  }),

  signIn: joi.object({
    email: joi.string().email().required(),
    password: joi.string().alphanum().required(),
  })
}