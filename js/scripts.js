$(document).ready(function(){

$("#userInputForm").submit(function(){

var userInput = $("input#userInput").val().toUpperCase();

$(".result").append(userInput);

$("#result").show();
event.preventDefault();
});

});