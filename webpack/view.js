import $ from 'jquery';

export class View {
  constructor (el, options) {
    this.$el = $(el);
    this.$container = options.container ? $(options.container) : undefined;
    this.template = options.template;
    this.model = options.model;

    if (options.className) {
      this.$el.addClass(options.className);
    }

    if (this.template && this.model && options.renderOnInitialize === true) {
      this.render();
    }
  }
  render() {
    if (this.template && this.model) {
      // var html = new EJS({ url: './template/test.ejs' }).render(data);; // render the template
      this.$el.html(this.template);
    } else if (!this.template) {
      new Error('No template defined');
    } else if (!this.model) {
      new Error('No model defined');
    }
  }
}
