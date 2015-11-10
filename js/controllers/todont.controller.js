import _ from 'underscore';

let ToDont = function ($scope) {

  $scope.items = [];

  // Item Constructor
  let Item = function (task) {
    this.id = _.random(10, 99);
    this.task = task;
    this.status = 'open';
  };

  // Generate Sample Data
  let sample = ['Own a Cat', 'Play with Fire', 'Run with Scissors', 'Shouldn\'t not watch Star Wars'];

  sample.forEach( function (i) {
    let x = new Item(i);
    $scope.items.push(x);
  });

  // Do Our Task
  $scope.doIt = function (item) {
    let i = _.findWhere($scope.items, { id: item.id });
    i.status = 'closed';
  };


  

};

ToDont.$inject = ['$scope'];

export default ToDont;