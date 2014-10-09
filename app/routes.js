App.config(['$routeProvider', function($routeProvider)
{
	$routeProvider.
	when('/', {
		templateUrl: 'app/views/index.html',
		controller: 'HomeController',
		title: 'Home'
	}).

	// 404 error handler
	otherwise({
		templateUrl: 'app/views/404.html'
	});
}])

// dymanic handle page title
.run(['$location', '$rootScope', function($location, $rootScope)
{
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous)
    {
        if (current.hasOwnProperty('$$route'))
        {
            $rootScope.title = current.$$route.title;
        }
    });
}]);