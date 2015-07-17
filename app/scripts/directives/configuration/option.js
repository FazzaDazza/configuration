'use strict';

angular.module('configurationApp')
  .directive('coConfigurationOption', function() {
    return {
      restrict: 'E',
      scope: {
        option: '='
      },
      template: '<ng-include src="getTemplateUrl()"/>',
      controller: function($scope) {
        var baseUrl = 'directives/configuration/option/',
          templateMap = {
            boolean:  'boolean.html',
            enum:     'enum.html',
            integer:  'integer.html',
            string:   'string.html'
          };

        $scope.getTemplateUrl = function() {
          return baseUrl + templateMap[$scope.option.type];
        };

        $scope.parseKey = function(id) {
          if(id === 'null') {
            return null;
          }

          return parseInt(id, 10);
        };
      }
    };
  });