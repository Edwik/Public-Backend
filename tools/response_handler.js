module.exports = class response_control {
    constructor(type) {
      this.response_model = { 
        err     : null,
        code    : null,
        message : null, 
        data    : null,
        status  : null
      };
      this.type = type;
    }
    
    evaluate(response) {
      this.err  = response.err || response.Error;
      this.data = response.res || response.data || response.body;

      if (this.err) {
        this[this.type];
      } 
      
      return this.response_model;
    }

    joi() {
      this.response_model.error = true;
      this.response_model.code = 'ERR_VALIDATION';
      this.response_model.status = 400;
      this.response_model.message = this.error;
    }

    script() {
      his.response_model.error = true;
      this.response_model.err = 'TYPE_ERR';
      this.response_model.code = 'TYPE_ERR';
      this.response_model.message = this.err;
    }
  }