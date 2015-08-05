import $ from 'jquery';

export class Collection {
  constructor(options) {
    this.options = options;
    this.models = [];
  }
  fetch() {
    if(this.options.url && this.options.model) {
      return $.get(this.options.url)
        .then((data) => {
          this.data = data.collection;
          $.each(this.data, (i, modelData) => {
            var model = new this.options.model();
            model.set(modelData);
            this.models.push(model);
          });
        });
    }
  }
} 
