var app = angular.module("MyApp", []);

app.controller("mainController", function ($scope, $http, $rootScope) {

    $scope.apiKey = "4uTziijrZPlPFeRYFYTIwjS8RChlYrxE";
    $scope.results = [];
    $scope.studentprojects = [];
    $scope.otherprojects = [];
    $scope.moduleimages = [];
    var projectIDs = [];
    var projectIDNumber;
    $scope.init = function () {
        var userid = 'lillyhb';
        var projectlist = 'https://www.behance.net/v2/users/' + userid + '/projects?api_key=' + $scope.apiKey + '&callback=JSON_CALLBACK';
        //console.log(projectlist);

        $http.jsonp(projectlist).success(function (data) {
          //  console.log(projectlist);
          //  console.log(data);
            var projectdata = data.projects;
           // console.log(projectdata.length);
            console.log(projectdata);
          //  $scope.projects.push(projectdata);
          //  console.log($scope.projects);

            angular.forEach(projectdata, function (value, index) {
                //$scope.projects.push(value);
                //console.log('scope project: ' + $scope.projects);
                //console.log('fields:  ' + value.fields);
                var studentwork = 'Product Design';
                if (value.fields.indexOf(studentwork) >= 0 ) {
                    $scope.studentprojects.push(value);
                    console.log('scope student project: ' + $scope.studentprojects);
                }else {
                    $scope.otherprojects.push(value);
                    console.log('scope other project: ' + $scope.otherprojects);
                } 

                
               /* var title = value.name;
                var coverimage = value.covers.original;
              
                console.log('title: ' + title);
                console.log('coverimage: ' + coverimage);
                $scope.projects.push(title, coverimage);
                console.log('scope project: ' + $scope.projects);*/
                
                
                projectIDNumber = value.id;
               // console.log('projectIDNUmber: ' + projectIDNumber);
                projectIDs.push(projectIDNumber);
              //  console.log('projectid array: ' + projectIDs);
                
                
                

            });
            
           /* Second API call to projects to use later
           angular.forEach(projectIDs, function (value, index) {
                var projectid = projectIDs[index];
              //  console.log('project id in for each: ' + projectid + ' index is ' + index);
                var projecturl = 'https://www.behance.net/v2/projects/' + projectid + '/?api_key=' + $scope.apiKey + '&callback=JSON_CALLBACK';
              //  console.log('project url for index ' + index + ': ' + projecturl);
                
                

                $http.jsonp(projecturl).success(function (data) {
                    //console.log(projecturl);
                   // console.log('I am inside the jsonp for projects')
                   // console.log(data);
                    $scope.results.push(data);
                    var individprojectdata = data.project;
                    //console.log(individprojectdata);
                    var imageModules = data.project.modules;
                   // console.log('imageModules: ' + imageModules);
                    var indexcounter = 0;
                    
                    
                    angular.forEach(imageModules, function (value, index) {
                      //  console.log('modules ' + imageModules[0].src);
                        var arrayname = 'array' + projectIDNumber;
                        var imageurl = imageModules[indexcounter].src;
                        //console.log('imageurl: ' + imageurl);
                        
                        $scope.moduleimages.push(imageurl);
                       // console.log($scope.moduleimages);
                        
                        
                        //console.log('new array: ' + projectIDNumber);
                        indexcounter += 1;
                        //$scope.projects.push({image1: img1});
                        

                    });
                    indexcounter = 0;
                    

                }).error(function (error) {
                    console.log('i am an error cat for projects');

                });
            }); */

        }).error(function (error) {
            console.log('i am an error for user data');

        });
    };
});
