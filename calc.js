var app=angular.module('Myapp',[]);
app.controller('Calccontroller',function($scope){
$scope.output='';
$scope.operation='';
$scope.num1=0;
$scope.num2=0;
$scope.operate=function(val)
{
	$scope.num1=$scope.output;
	$scope.output='';
	$scope.operation=val;

}

$scope.result=function()
{
	$scope.num2=$scope.output;
	if($scope.operation=='+')
	{
		$scope.output=parseInt($scope.num1)+parseInt($scope.num2);
	}
	if($scope.operation=='-')
	{
		$scope.output=$scope.num1-$scope.num2;
	}
	if($scope.operation=='*')
	{
		$scope.output=$scope.num1*$scope.num2;
	}
	if($scope.operation=='/')
	{
		$scope.output=$scope.num1/$scope.num2;
	}

}

});