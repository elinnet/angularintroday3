githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {
  var self = this;
  var searchResource = $resource('https://api.github.com/search/users?key=d423d0901c401fb4c4f5d2de4016c4e395741b28');

  self.doSearch = function() {

    self.searchResult = searchResource.get(
      { q: self.searchTerm }
    );
  };
}]);
