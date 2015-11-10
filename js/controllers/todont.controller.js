import _ from 'underscore';

let ToDont = function ($scope) {

  $scope.items = [];
  $scope.bads = [];

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
    // Find the specific item clicked by it's ID
    let i = _.findWhere($scope.items, { id: item.id });

    // Update my items list and remove the one that was clicked
    $scope.items = _.without($scope.items, i);

    // Add the clicked one to my `bads` array
    $scope.bads.push(i);
  };


  

};

ToDont.$inject = ['$scope'];

export default ToDont;