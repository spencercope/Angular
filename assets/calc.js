//Javascript

(function(){
    
    var app = angular.module('myCalc',[]);
    
    app.controller('calcController',['$scope',function($scope){
        
        $scope.categoryOptions = ['Homework','Projects','Quizzes','Tests','Final'];
        $scope.cat1 = 'category1';
        $scope.cat2 = 'categroy2';
        $scope.cat3 = 'category3';
        
        $scope.gps = [
            { index: "1", initial: "90" },
            { index: "2", initial: "95" },
            { index: "3", initial: "100" },
            { index: "4", initial: "0" },
        ]
        
        $scope.weights = [
            { index: "1", initial: "90" },
            { index: "2", initial: "95" },
            { index: "3", initial: "100" },
            { index: "4", initial: "0" },
        ]
        
        $scope.contribs = [
            { index: "1", initial: "90" },
            { index: "2", initial: "95" },
            { index: "3", initial: "100" },
            { index: "4", initial: "0" },
        ]
        
        $scope.grade = '';
        
        $scope.totalWeight = '100';
        
        $scope.calc = function(){
            if ( $scope.gp1 > 100) { $scope.gp1 = 100; }
            if ( $scope.gp2 > 100) { $scope.gp2 = 100; }
            if ( $scope.gp3 > 100) { $scope.gp3 = 100; }
            if ( $scope.gp4 > 100) { $scope.gp4 = 100; }
            
            $scope.totalWeight = ( parseInt($scope.weight1) + parseInt($scope.weight2) + parseInt($scope.weight3) + parseInt($scope.weight4)); 
            
            $scope.contrib1 = (( $scope.gp1 / 100 ) * ( $scope.weight1 / 100 ));
            $scope.contrib2 = (( $scope.gp2 / 100 ) * ( $scope.weight2 / 100 ));
            $scope.contrib3 = (( $scope.gp3 / 100 ) * ( $scope.weight3 / 100 ));
            $scope.contrib4 = (( $scope.gp4 / 100 ) * ( $scope.weight4 / 100 ));
            
            $scope.grade = (( $scope.contrib1 + $scope.contrib2 + $scope.contrib3 + $scope.contrib4 ) * 100 ).toFixed(2);
        }
        
        $scope.calc();
        
        
    }]);
    
    
})();
