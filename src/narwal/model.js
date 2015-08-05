import $ from 'jquery';

export class Model {
  constructor(options) {
    this.options = options;
  }
  fetch() {
    if(this.options.url) {
      return $.get(this.options.url)
        .then((data) => {
          this.properties = data;
        })
    }
  }
  set(obj) {
    this.properties = $.extend({}, this.properties, obj);
  }
  get(key) {
    return this.properties[key];
  }
} 
