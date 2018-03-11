$(document).ready(function () {
   var user = prompt("Please enter your username to proceed:");
 alert("Wellcome to Mini Project:  " + user);
   $('.visa_dolja').click(function() {
       $('.jquery_text').toggle();
   });
   $('.radera').click(function() {
       $('.ta-bort-mig').remove();
   });

    
    $('form').submit(function(event){
        event.preventDefault();
    var color1 = $ ('.color1').val();   
    $('body').css('background-color', color1);
    
    });
}); 