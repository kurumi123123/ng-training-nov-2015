angular.module('app', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;

    app.people = [
      'Mary',
      'Brenda',
      'Brenda',
      'Cosmo',
      'Artur',
      'Tanis',
      'Lenny'
    ];
  })
;