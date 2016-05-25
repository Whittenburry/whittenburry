import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('logout');
  this.route('dashboard', function() {
    this.route('me', {
      path: '/'
    });
  });
});

export default Router;
