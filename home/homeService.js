angular.module('trivia').service('homeService', function ($http) {
    this.getQuestions = function () {
        return $http({
            method: 'GET',
            url: `https://practiceapi.devmountain.com/api/trivia/questions`
        })
    }
})