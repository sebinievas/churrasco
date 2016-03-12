import Ember from 'ember';

export default Ember.Service.extend({
  getTweets() {
    return [
      { id: 1, message: 'This is a simple tweet message' },
      { id: 1, message: 'Chicken tacos to go!' },
    ];
  }
});
