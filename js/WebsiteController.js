//<!-- Angular Content  -->
var app = angular.module("myApp", []);

app.controller('WebsiteController', ['$scope', function ($scope) {
  $scope.projectIxd = [
        {
            title: 'Web Historians',
            subtitle: 'Masters project',
            imgthumb: 'IxD/IxD-WHx-thumb.png',
            url: 'webhistorians.html'
        },
        {
            title: 'Digital prototyping',
            subtitle: 'Masters project',
            imgthumb: 'IxD/IxD-Prototyping-thumb.png',
            url: 'digitalprototyping.html'
        },
        {
            title: 'Smart track',
            subtitle: 'Masters project',
            imgthumb: 'IxD/IxD-SmartTrack-thumb.png',
            url: 'smarttrack.html'
        }
    ];
    
     $scope.projectPublications = [
        {
            title: 'Cultural & historical collections',
            img1: 'folio/1-culturalHistorical-1.jpg',
            img2: 'folio/1-culturalHistorical-2.jpg',
            img3: 'folio/1-culturalHistorical-3.jpg',
            datalb: 'pub2',
            datatitle: 'Cultural and historical collections',
            imgthumb: 'folio/1-culturalHistorical-1.jpg',
            class: 'noshow'
        },
         {
            title: 'UQ Library postcards',
            img1: 'folio/2-1comp.jpg',
            img2: 'folio/2-1Students.jpg',
            img3: 'folio/2-1StaffAlumni.jpg',
            img4: 'folio/2-1Law.jpg',
            datalb: 'pub6',
            datatitle: 'UQ Library postcards',
            imgthumb: 'folio/2-1overview-thumb.jpg',
             class: 'noshow'
        },
        {
            title: 'Fryer Lecture in Australian Literature',
            img1: 'folio/2-5FryerLecture-1b.jpg',
            img2: 'folio/2-5FryerLecture-2b.jpg',
            img3: 'folio/2-5FryerLecture-3b.jpg',
            img4: 'folio/2-5FryerLecture-spotlight-web.jpg',
            datalb: 'pub10',
            datatitle: 'Fryer Lecture in Australian Literature',
            imgthumb: 'folio/2-5FryerLecture-thumb.jpg',
            class: 'noshow'
        },
        {
            title: 'JD Fryer: Student and Soldier',
            img1: 'folio/2-4JDFryer-invite1.jpg',
            img2: 'folio/2-4JDFryer-invite2.jpg',
            img3: 'folio/2-4JDFryer-invite3.jpg',
            img4: 'folio/2-4JDFryer-PC.jpg',
            datalb: 'pub9',
            datatitle: 'JD Fryer: Student and Soldier online exhibition launch',
            imgthumb: 'folio/2-4JDFryer-thumb.jpg',
            class: 'noshow'
        },
        {
            title: 'Fryer Library postcard',
            img1: 'folio/2-3Fryer.jpg',
            datalb: 'pub8',
            datatitle: 'Fryer Library postcard',
            imgthumb: 'folio/2-3Fryer-thumb.jpg',
            class: 'noshow'
        },
        {
            title: 'UQ Library Technology Strategy',
            subtitle: 'PDF',
            subtitle1: 'snapshot',
            suburl: 'pdf/TechnologyStrategy_14.pdf',
            img1: 'folio/1-LibTechStrat-2014-1.jpg',
            img2: 'folio/1-LibTechStrat-2014-2.jpg',
            img3: 'folio/1-LibTechStrat-2014-3.jpg',
            datalb: 'pub3',
            datatitle: 'UQ Library technology strategy',
            imgthumb: 'folio/1-LibTechStrat-2014-1.jpg'
        },
        {
            title: 'UQ Library Strategic Plan',
            subtitle: 'PDF',
            subtitle1: 'snapshot',
            suburl: 'pdf/StrategicPlan_13.pdf',
            img1: 'folio/1-StratPlan-1.jpg',
            img2: 'folio/1-StratPlan-2.jpg',
            img3: 'folio/1-StratPlan-3.jpg',
            datalb: 'pub1',
            datatitle: 'UQ Library Strategic Plan',
            imgthumb: 'folio/1-StratPlan-thumb.jpg'
        },
        {
            title: 'UQ Library: Year at a glance 2011',
            subtitle: 'PDF',
            subtitle1: 'snapshot',
            suburl: 'pdf/YaaG2011-e.pdf',
            img1: 'folio/1-YaaG-2011-1.jpg',
            img2: 'folio/1-YaaG-2011-2.jpg',
            img3: 'folio/1-YaaG-2011-3.jpg',
            img4: 'folio/1-YaaG-2011-4.jpg',
            datalb: 'pub4',
            datatitle: 'UQ Library: Year at a glance 2011',
            imgthumb: 'folio/1-YaaG-2011-1.jpg'
        },
        {
            title: 'UQ Library: Year at a glance 2012',
            subtitle: 'PDF',
            subtitle1: 'snapshot',
            suburl: 'pdf/YaaG2011-e.pdf',
            img1: 'folio/1-YaaG-2012-1.jpg',
            img2: 'folio/1-YaaG-2012-2.jpg',
            img3: 'folio/1-YaaG-2012-3.jpg',
            img4: 'folio/1-YaaG-2012-4.jpg',
            datalb: 'pub5',
            datatitle: 'UQ Library: Year at a glance 2012',
            imgthumb: 'folio/1-YaaG-2012-1.jpg'
        }
    ];

    /*$scope.projectIllustration = [
        {
            title: 'Photo manipulation',
            img1: 'folio/3-Ps-madskills-1.jpg',
            img2: 'folio/3-Ps-madskills-2.jpg',
            datalb: 'pub13',
            datatitle: 'Photo manipulation',
            imgthumb: 'folio/3-Ps-madskills-thumb.jpg'
        },
        {
            title: 'Letter Writers Alliance invitation',
            img1: 'folio/3-Illus-LWS-1.jpg',
            img2: 'folio/3-Illus-LWS-2.jpg',
            img3: 'folio/3-Illus-LWS-3.jpg',
            datalb: 'pub14',
            datatitle: 'Letter Writers Alliance typewriter illustration',
            imgthumb: 'folio/3-Illus-LWS-2.jpg'
        }
    ];*/
  
}]);

setTimeout(function(){
  $('a[ng-href=""]').remove();
  console.log('success!');
}, 0);


//             title: 'My Library',
 //           subtitle: 'UQ Library',

          // title: 'Library locations',
         //   subtitle: 'UQ Library',
         