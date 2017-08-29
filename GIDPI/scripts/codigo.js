$(document).ready(function () {
	$('#horizontalTab').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion           
		width: 'auto', //auto or any width like 600px
		fit: true   // 100% fit in a container
	});
});

var formPersona = false;
var formEmpresa = false;

$("#btn_persona").click(function(){
   $(".botones").css({ 'background' : 'transparent'}); 
   $(this).css({ 'background' : '#00877E'}); 

   if(!formPersona){
	   	$("#form_persona").collapse("show");
	   	formPersona = true;
   }else{
	   	$("#form_persona").collapse("hide");
	   	formPersona = false;
   }

   if (formEmpresa) {
   		$("#form_empresa").collapse("hide");
   	   formEmpresa = false;
   }

});

$("#btn_juridica").click(function(){
   $(".botones").css({ 'background' : 'transparent'}); 
   $(this).css({ 'background' : '#00877E'}); 

   if(!formEmpresa){
   	   $("#form_empresa").collapse("show");
   	   formEmpresa = true;
   }else{
	   	$("#form_empresa").collapse("hide");
   	    formEmpresa = false;
   }

   if (formPersona) {
	   	$("#form_persona").collapse("hide");
	   	formPersona = false;
   }
});


$(window).load(function(){

   $("#preload").delay(2000).fadeOut("slow");
   $("body").delay(2000).css({"overflow-y":"scroll"})

});
