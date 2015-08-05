import { View } from './view';
import $ from 'jquery';

export class ViewCollection extends View {
  constructor (options) {
    super(options);
    this.collection = options.collection;
    this.childView = options.childView;
    this.childViews = [];
    console.log('this.collection.models', this.collection.models);
  }
  render() {
    this.childViews = [];
    if(this.collection.models && this.childView) {
      this.$el.html('');
      $.each(this.collection.models, (i, model) => {
        var childView =  new this.childView({
          model: model,
          template: $('#template1').html()
        });
        this.$el.append(childView.render());
        this.childViews.push(childView);
      });
    }
  }
}
