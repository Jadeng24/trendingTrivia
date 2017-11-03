angular.module('trivia').controller('homeController', function ($scope, homeService) {
    $scope.test = 'test scope'
    $scope.myfilter = ''
    console.log('controller')
    homeService.getQuestions().then(function (questions) {
        console.log(questions.data)
        $scope.questions = questions.data
    })
    // $scope.setFilter = function (n) {
    //     console.log(n)
    //     $scope.myfilter = n
    //     $scope.questions = homeService.getQuestions().then(response => {
    //         $scope.questions = response.data.filter(q => q.difficulty === n)
    //         console.log($scope.questions)
            
    //     })
    // }
})