$(document).ready(function(){
	$("#btnLogin").click(function(e){
		e.preventDefault();
		$.post("ver/",$("#frmLogin").serialize(),function(data){
			if(data=="OK"){
				window.location='../index/';
			}
			else{
				alert(data);
			}
		});
	});
});