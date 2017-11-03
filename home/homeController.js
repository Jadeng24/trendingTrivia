angular.module('trivia').controller('homeController', function ($scope, homeService) {
    $scope.test = 'test scope'
    $scope.myfilter = ''
    $scope.search = true;
    console.log('controller')
    homeService.getQuestions().then(function (questions) {
        console.log(questions.data)
        $scope.questions = questions.data.map(q => {
            switch (q.difficulty) {
                case 1:
                    q.difficulty = 'Easy'
                    break;
                case 2:
                    q.difficulty = 'Medium'
                    break;
                case 3:
                    q.difficulty = 'Hard'
                default:
                    break;
            }
            return q
        })
    })
    $scope.selectOption = function (question, option) {
        console.log(option)
        console.log(question)
        question.chosen = option
        if (option == question.options[question.correct_answer]) {
            console.log('true')
            question.correct = true
            question.class = "Easy"
        }
        else {
            console.log('false')
            question.correct = false
            question.class = "Hard"
        }
    }
    $scope.toggleSearch = function () {
        console.log($scope.search)
        $scope.search = !$scope.search
    }
    $scope.setFilter = function (n) {
        console.log(n)
        $scope.myfilter = n
        if (n) {
            homeService.getQuestions().then(response => {
                $scope.questions = response.data.filter(q => q.difficulty === n)
                console.log($scope.questions)
                $scope.questions = $scope.questions.map(q => {
                    switch (q.difficulty) {
                        case 1:
                            q.difficulty = 'Easy'
                            break;
                        case 2:
                            q.difficulty = 'Medium'
                            break;
                        case 3:
                            q.difficulty = 'Hard'
                        default:
                            break;
                    }
                    return q
                })
            }
            )
        }
        else {
            homeService.getQuestions().then(response => {
                $scope.questions = response.data
                $scope.questions = $scope.questions.map(q => {
                    switch (q.difficulty) {
                        case 1:
                            q.difficulty = 'Easy'
                            break;
                        case 2:
                            q.difficulty = 'Medium'
                            break;
                        case 3:
                            q.difficulty = 'Hard'
                        default:
                            break;
                    }
                    return q
                })
            })
        }
    }
})