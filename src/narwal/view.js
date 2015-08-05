import $ from 'jquery';
import Handlebars from 'handlebars';

export class View {
  constructor (options) {
    this.$el = $(options.el);
    this.$container = options.container ? $(options.container) : undefined;
    this.template = options.template;
    this.model = options.model;

    if (options.className) {
      this.$el.addClass(options.className);
    }

    if (this.template && this.model) {
      if(options.renderOnInitialize === true) {
        var html = this.render();
        if(this.$el.length > 0) {
          this.$el.html(html);
        }
      }
    }
  }
  render(injectHTML) {
    if (this.template && this.model) {
      var html = Handlebars.compile(this.template)(this.model.properties);
      if (injectHTML && this.$el) {
        this.$el.html(html);
      }
      return html;
    } else if (!this.template) {
      new Error('No template defined');
    } else if (!this.model) {
      new Error('No model defined');
    }
  }
  fetch(renderAfterFetch) {
    if(this.model) {
      return this.model.fetch().then(() => {
        if(renderAfterFetch) {
          this.render(true);
        }
      });
    } else {
      new Error('No model defined');
    }
  }
}
