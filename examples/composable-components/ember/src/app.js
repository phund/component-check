import Ember from './ember-shim';
import applicationTemplate from './application.hbs';
import ComposableComponent from './composable-component';
import DynamicComponent from './dynamic-component';

// register templates
Ember.TEMPLATES.application = applicationTemplate;

const ExampleApp = Ember.Application.create({
  ready() {
    document.getElementById('example-app').remove();
  }
});

// register components
ExampleApp.DynamicComponentComponent = DynamicComponent;
ExampleApp.ComposableComponentComponent = ComposableComponent;
