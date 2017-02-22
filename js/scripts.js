var isPalindrome = function(str){
  str = str.split(" ").join("");
  var counter = 0;
  var loopLimit = Math.ceil(str.length/2);
  for (var i = 0; i<loopLimit; i++){
    if(str[i]===str[str.length-1-i]){
      counter ++;
    }
  }
  console.log("counter is "+counter);
  console.log("loopLimit is "+loopLimit);
  if (counter === loopLimit){
    return true;
  }else{
    return false;
  }
}



$(function(){
  $("#form").submit(function (){
    var palString = $("#stringInput").val();
    if (isPalindrome(palString)){
      $(".resultSection").empty();
      $(".resultSection").append("<p>" + palString + " is a palindrome!</p>");
    } else{
      $(".resultSection").empty();
      $(".resultSection").append("<p>" + palString + " is not a palindrome!</p>");
    }

    event.preventDefault();
  });
});
