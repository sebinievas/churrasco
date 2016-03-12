import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tweet', { path: 'tweet/:id' });
  this.route('tweets');
});

export default Router;
