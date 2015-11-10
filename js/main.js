import angular from 'angular';
import 'angular-ui-router';
import configFunct from './config';
import PageController from './controllers/page.controller';
import ToDont from './controllers/todont.controller';



angular
  .module('app', ['ui.router'])
  .config(configFunct)
  .controller('PageController', PageController)
  .controller('ToDont', ToDont)
;