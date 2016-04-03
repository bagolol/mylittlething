'use strict';

angular.module('telebuddiesApp')
.controller('MainController', ['$mdSidenav', '$mdBottomSheet',
    '$log', '$q', '$state', '$mdToast', '$scope', MainController])
.directive('subnav', () => ({
            scope:{
                test: '='
            },
            templateUrl: 'components/subnav/subnav.html',
            restrict: 'EA',
            controller: 'MainController',
            controllerAs: 'vm',
            link: function (scope, element, attrs) {
            }
    }));

function MainController( $mdSidenav, $mdBottomSheet, $log, $q, $state, $mdToast, $scope) {

    var vm = this;
    vm.title = $scope.test;

    vm.menuItems = [
      {
        name: 'Dashboard',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      {
        name: 'Profile',
        icon: 'person',
        sref: '.profile'
      },
      {
        name: 'Table',
        icon: 'view_module',
        sref: '.table'
      }
    ];
    vm.selectItem = selectItem;
    vm.toggleItemsList = toggleItemsList;
    vm.toggleRightSidebar = toggleRightSidebar;

    function toggleRightSidebar() {
        $mdSidenav('right').toggle();
    }

    function toggleItemsList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function(){
        $mdSidenav('left').toggle();
      });
    }

    function selectItem (item) {
      vm.title = item.name;
      vm.toggleItemsList();
      vm.showSimpleToast(vm.title);
    }
}


