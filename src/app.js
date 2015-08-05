import $ from 'jquery';
import { View, ViewCollection, Model, Collection } from './narwal';


class Person extends Model {
  constructor(options) {
    super(options)
  }
}

class People extends Collection {
  constructor() {
    super({
      url: './data/people.json',
      model: Person
    })
  }
}

class PersonView extends View {
  constructor(options) {
    var superOptions = $.extend({}, {
      el: $('#person-wrapper'),
      template: $('#template-person').html()
    }, options);

    super(superOptions);
  }
}

class PeopleView extends ViewCollection {
  constructor(options) {
    var superOptions = $.extend({}, {
      el: $('#people-wrapper'),
      childView: PersonView
    }, options);

    super(superOptions);
  }
}





var person = new Person({
  url: './data/person.json'
});
var personView = new PersonView({
  model: person
});
personView.fetch(true);

var people = new People();
people.fetch().then(function() {
  var peopleView = new PeopleView({
    collection: people
  });
  peopleView.render(true);
});
  
