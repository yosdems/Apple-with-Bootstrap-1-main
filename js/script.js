
// $(document).ready(function(){
  
//  $(".footer-links-wrapper h3").on("click",function(){
//     $("this").next ("ul").slideToggle();
// })   
// })

 if ($(window).width() <= 768){	
    $('.footer-links-wrapper').addClass("someClass");
}else{
    $('.footer-links-wrapper').removeClass("someClass");
}
 $(window).on('resize', function(event){
    if ($(window).width() <= 768){	
        $('.footer-links-wrapper').addClass("someClass");
     }else{
        $('.footer-links-wrapper').removeClass("someClass");
	$('.footer-links-wrapper ul').show();
    }	
});

// Footer collapse functionality 
$(document).on("click", ".someClass h3", function(){
    $(this).next('ul').slideToggle();
    // $(this).toggleClass("expanded");
});




$("#registration-form").on("submit", formValidation);
 
// function formValidation()
// {

// 	var name = document.getElementById("first-name").value;
// 	var pass = document.getElementById("password").value; 
// 	if(userNameValidation(name))
// 	{
// 	if(passValidate(pass))
// 	{
// 	alert("Submited");
// 	}
// 	}
// 	return false;
// }

// function userNameValidation(name)
// { 
// var letters = /^[A-Za-z]+$/;
// if(name.match(letters))
// {
// return true;
// }
// else
// {
// 	alert('Username must have alphabet characters only');
// let a = document.getElementById("first-name");
// a.focus();
// return false;
// }
// }

// function passValidate(pass){
// 	if(pass.length > 5){
// 		return true;
// 	} 
// 	else{
// 		alert('password is too short or empty');
// 		let a = document.getElementById("password");
// 		a.focus();
// 		return false;
// 	}
 
// }
// https://www.w3resource.com/javascript/form/javascript-sample-registration-form-validation.php
