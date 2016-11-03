// Code goes here

var app = angular.module('limitToExample', []);

app.controller('ExampleController', ['$scope', function($scope) {
      $scope.numbers = [1,2,3,4,5,6,7,8,9];
      $scope.letters = "abcdefghi";
      $scope.longNumber = 2345432342;
      $scope.numLimit = 3;
      $scope.letterLimit = 3;
      $scope.longNumberLimit = 3;
      $scope.images = ["http://www.chocolateboxwriters.com/wp-content/uploads/2015/10/MEMES-youve-watched-7-years-of-television-in-8-days-and-thats-never-meant-to-happen.jpg",
      "https://h3-prod.s3.amazonaws.com/assets/ab673b62-d4c1-11e4-8b13-12771640ddce.jpg?v=1",
      "http://az616578.vo.msecnd.net/files/2016/05/14/635988244974360447-1409499506_GeeksMirage_BingeWatching2.jpg",
      "https://cdn.pastemagazine.com/www/system/images/photo_albums/best-house-of-cards-memes/large/paste-tv-gallery-hoc-more-episodes.jpg?1384968217",
      "http://25.media.tumblr.com/8a7624ec68706eb0f9e374825019e029/tumblr_mz7lrmxw7W1qeg6zlo5_250.gif",
      "http://25.media.tumblr.com/tumblr_m7f5xuo1ka1r8gsqgo1_500.gif",
      "http://images4.fanpop.com/image/photos/24400000/Xander-gif-buffy-the-vampire-slayer-24460543-320-232.gif",
      "https://67.media.tumblr.com/tumblr_lhvguywjbd1qaimf2o1_500.gif",
      "http://67.media.tumblr.com/7b7fcbf91fd4ef25460810d1599d0fca/tumblr_nraefvVlPt1u9hzkjo6_500.gif",
      "https://s-media-cache-ak0.pinimg.com/736x/d7/ce/78/d7ce789cd4a94ba73b9a40b916c2a701.jpg",
      "http://25.media.tumblr.com/cbafd1819483a7650f0a7f4802005e6b/tumblr_mk1klqNmYE1s4iw3xo1_500.gif"];
      $scope.moreImages = [
        
          {
            link: "img/1.gif",
            class: 'one',
              default: "img/default.gif"
          },
        {
          link: "img/2.gif",
            class: 'two',
              default: "img/default.gif"
          },
          {
            youtube: "https://www.youtube.com/embed/7qHZkkgowdY?rel=0",
            class: 'three',
              default: "img/default.gif"
          },
          {
            link: "img/4.gif",
            class: 'four',
              default: "img/default.gif"
          },
          {
            link: "img/5.gif",
            class: 'five',
              default: "img/default.gif"
          },
          {
            link: "img/6.gif",
            class: 'six',
              default: "img/default.gif"
          },
          {
            link: "img/7.gif",
            class: 'seven',
              default: "img/default.gif"
          },
          {
            link: "img/8.gif",
            class: 'eight',
              default: "img/default.gif"
          },
          {
            link: "img/9.jpg",
            class: 'nine',
              default: "img/default.gif"
          },
          {
            link: "img/10.gif",
            class: 'ten',
              default: "img/default.gif"
          },
          {
            link: "img/11.gif",
            class: 'eleven',
              default: "img/default.gif"
          },
          {
            link: "img/12.gif",
            class: 'twelve',
              default: "img/default.gif"
          },
          {
            link: "img/13.gif",
            class: 'thirteen',
              default: "img/default.gif"
          },
          {
            link: "img/14.gif",
            class: 'fourteen',
              default: "img/default.gif"
          },
          {
            link: "img/15.gif",
            class: 'fifteen',
              default: "img/default.gif"
          },
          {
            link: "img/16.gif",
            class: 'sixteen',
              default: "img/default.gif"
          }
          
      ];
      $scope.todaysDate=function(){
          var d = new Date();
          var n = d.getDate();
          var m = d.getMonth();
          var h  = $scope.images.length;
          document.getElementById("demo").innerHTML = h;
      }
      $scope.date = new Date();
      $scope.numberDate = $scope.date.getDate();
      //$scope.month = $scope.date.getMonth();
      $scope.month = 11;
      $scope.imageLength  = $scope.images.length;
      $scope.moreImageLength  = $scope.moreImages.length;
      $scope.showClues=function(){
         
          if($scope.month == 11){
             if($scope.numberDate<$scope.imageLength){
                 //var n = $scope.date.getDate();
                 var n = 16;
                  console.log("n " + n);
                  for (i = 1; i <= n; i++) { 
                      console.log("i " + i);
                      $('#X'+i).attr('src', "img/" + i +".gif");
                    }  
                 
             };
          };
          
      var n = $scope.date.getDate();
          console.log("n " + n);
          for (i = 1; i <= n; i++) { 
              console.log("i " + i);
              $('#X'+i).attr('src', "img/" + i +".gif");
            }       
          
          
        if($scope.month == 11){
          if($scope.numberDate<$scope.imageLength){
          $scope.limit=$scope.numberDate;
          }
          else{
            $scope.limit=$scope.imageLength;
          }
        }
        else{
          $scope.limit=0;
        }
        
      }
      $scope.showClues();
  //  $('div#test').append('<img src=".."/>');
//    $('div#test > img').remove();
    
      
      
    }]);
    

app.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}])
