var elementTarget;
var currentPage='';

$(window).ready(function(){
	init_menu();
	init_administrador();
	init_servico(); 
	init_despesa();
	
	
	$('#ajax').click(function(){
		getTabelaServico();
		console.log('ajax')
	});
	
});

// background: rgb(36,99,88);

function init_menu(){
	
	$('#bt_administrador').click(function(){
		
		$('.content').hide();
		$('#content_adm').show();
	});
	$('#bt_despesa').click(function(){
		
		$('.content').hide();
		$('#content_desp').show();
	});
	$('#bt_servico').click(function(){
		
		$('.content').hide();
		$('#content_serv').show();
		
	});
	$('#bt_usuario').click(function(){});
}

function init_servico(){
    
	currentPage = 'administrador';
        
	$("#bt-aba-add").css('background','#fff');
	$("#bt-aba-add").css('border-bottom','1px #fff solid');
	$("#bt-aba-add").css('color','#000');

	if(urlGET("erro")==true){
			$('#msg-erro').css('display','block');
	}else{
			$('#msg-erro').css('display','none');
	}
	
	
	
	$("#bt-aba-add").click(function(){
	
	  elementTarget=null;
	
	  $("#bt-aba-add").css('background','#fff');
	  $("#bt-aba-add").css('border-bottom','1px #fff solid');
	  $("#bt-aba-add").css('color','#000');
	  
	  
	  $(".aba-add-tipo").css('display','block');
	  $(".aba-alt-tipo").css('display','none');
	  $(".aba-exc-tipo").css('display','none');
	 
	  $("#bt-aba-alt").css('background','rgb(36,99,88)');
	  $("#bt-aba-alt").css('border-bottom','1px #444 solid;');
	  $("#bt-aba-alt").css('color','rgba(255,255,255, .7)');
	  $("#bt-aba-exc").css('background','rgb(36,99,88)');
	  $("#bt-aba-exc").css('border-bottom','1px #444 solid;');
	  $("#bt-aba-exc").css('color','rgba(255,255,255, .7)');
		  
	  $(".tipos").css('background','#eee');
	  $(".tipos").css('color','#000');
	  
	  $('#inp-nome-tipo').val('');
	  
	  
	  
	  

	
	});
	
	
	
	$("#bt-aba-alt").click(function(){
	
	 elementTarget=null;
	
	  $("#bt-aba-alt").css('background','#fff');
	  $("#bt-aba-alt").css('border-bottom','1px #fff solid');
	  $("#bt-aba-alt").css('color','#000');
	  
	  $(".aba-alt-tipo").css('display','block');
	  $(".aba-exc-tipo").css('display','none');
	  $(".aba-add-tipo").css('display','none');
	  
	  $("#bt-aba-add").css('background',' rgb(36,99,88)');
	  $("#bt-aba-add").css('border-bottom','1px #444 solid;');
	  $("#bt-aba-add").css('color','rgba(255,255,255, .7)');
	  $("#bt-aba-exc").css('background',' rgb(36,99,88)');
	  $("#bt-aba-exc").css('border-bottom','1px #444 solid;');
	  $("#bt-aba-exc").css('color','rgba(255,255,255, .7)');
	  

	  $(".tipos").css('background','#eee');
	  $(".tipos").css('color','#000');
	  
	  $("#inp-alt").val("");
	
	});
	
	$("#bt-aba-exc").click(function(){
	
	 elementTarget=null;
	
	  $("#bt-aba-exc").css('background','#fff');
	  $("#bt-aba-exc").css('border-bottom','1px #fff solid');
	  $("#bt-aba-exc").css('color','#000');
	  
	  $(".aba-exc-tipo").css('display','block');
	  $(".aba-alt-tipo").css('display','none');
	  $(".aba-add-tipo").css('display','none');
	  
	 $("#bt-aba-add").css('background',' rgb(36,99,88)');
	 $("#bt-aba-add").css('border-bottom','1px #444 solid;');
	 $("#bt-aba-add").css('color','rgba(255,255,255, .7)');
	 $("#bt-aba-alt").css('background',' rgb(36,99,88)');
	 $("#bt-aba-alt").css('border-botom','1px #444 solid;');
	 $("#bt-aba-alt").css('color','rgba(255,255,255, .7)');
		  
	  $(".tipos").css('background','#eee');
	  $(".tipos").css('color','#000');
	  
	
	});
	
	
	$("#bt-add-tipo").click(function(){
		if($("#inp-nome-tipo").val()=="")
          addDiv("O campo nome é obrigatório","alert");
		else{
		  addDiv("Tipo adicionado com sucesso!","sucess");
		}	
	});	
	
	
	$("#bt-alt-tipo").click(function(){
		if(elementTarget==null)
          addDiv("Selecione um tipo!","alert");
		else if($('#inp-alt').val()==''){
		  addDiv("O campo nome é obrigatório","alert");
		}else{
		  addDivAlt("Deseja alterar o tipo de id "+elementTarget+"?","sucess");
		}	
	});
	
	
	$("#bt-exc-tipo").click(function(){
		if(elementTarget==null)
          addDiv("Selecione um tipo!","alert");
		else{
		  addDivExc("Deseja excluir o tipo de id "+elementTarget+"?","sucess");
		}	
	});
	
	
	
	
	$(".tipos-serv").click(function(){
		
		$("#inp-alt").val( jQuery.trim($(this).children(".nome").text()) );
		$(".tipos-serv").css('background','#eee');
		$(".tipos-serv").css('color','#000');
		$(this).css('background','linear-gradient(to bottom, rgba(255,200,0, .5), rgba(255,170,0, .7))');
		$(this).css('color','#fff');
		elementTarget = jQuery.trim($(this).children(".id").text());
	});
	
	
	
	
	
	
	$(".tipos-serv").mouseover(function(){
	 var elementTargetTemporario = jQuery.trim($(this).children(".id").text());
	  
	  if(elementTarget!= elementTargetTemporario)
		$(this).css('background','linear-gradient(to bottom, transparent, rgba(255,200,0, .5))');
	});
	
	$(".tipos-serv").mouseout(function(){
	
	  var elementTargetTemporario = jQuery.trim($(this).children(".id").text());
	  
	  if(elementTarget!= elementTargetTemporario)
		 $(this).css('background','#eee');
	});


}

//administrador

function init_administrador(){
   
    
	$("#bt-aba-add-adm").css('background','#fff');
	$("#bt-aba-add-adm").css('border-bottom','1px #fff solid');
	$("#bt-aba-add-adm").css('color','#000');

	if(urlGET("erro")==true){
			$('#msg-erro').css('display','block');
	}else{
			$('#msg-erro').css('display','none');
	}
	
	
	
	$("#bt-aba-add-adm").click(function(){
	
	  elementTarget=null;
	
	  $("#bt-aba-add-adm").css('background','#fff');
	  $("#bt-aba-add-adm").css('border-bottom','1px #fff solid');
	  $("#bt-aba-add-adm").css('color','#000');
	  
	  
	  $(".aba-add-tipo-adm").css('display','block');
	  $(".aba-alt-tipo-adm").css('display','none');
	  $(".aba-exc-tipo-adm").css('display','none');
	 
	  $("#bt-aba-alt-adm").css('background','rgb(36,99,88)');
	  $("#bt-aba-alt-adm").css('border-bottom','1px #444 solid;');
	  $("#bt-aba-alt-adm").css('color','rgba(255,255,255, .7)');
	  $("#bt-aba-exc-adm").css('background','rgb(36,99,88)');
	  $("#bt-aba-exc-adm").css('border-bottom','1px #444 solid;');
	  $("#bt-aba-exc-adm").css('color','rgba(255,255,255, .7)');
		  
	  $(".tipos-desp").css('background','#eee');
	  $(".tipos-desp").css('color','#000');
	  
	  $('#inp-nome-tipo-adm').val('');
	
	});
	
	
	
	$("#bt-aba-alt-adm").click(function(){
	
	 elementTarget=null;
	
	  $("#bt-aba-alt-adm").css('background','#fff');
	  $("#bt-aba-alt-adm").css('border-bottom','1px #fff solid');
	  $("#bt-aba-alt-adm").css('color','#000');
	  
	  $(".aba-alt-tipo-adm").css('display','block');
	  $(".aba-exc-tipo-adm").css('display','none');
	  $(".aba-add-tipo-adm").css('display','none');
	  
	  $("#bt-aba-add-adm").css('background',' rgb(36,99,88)');
	  $("#bt-aba-add-adm").css('border-bottom','1px #444 solid;');
	  $("#bt-aba-add-adm").css('color','rgba(255,255,255, .7)');
	  $("#bt-aba-exc-adm").css('background',' rgb(36,99,88)');
	  $("#bt-aba-exc-adm").css('border-bottom','1px #444 solid;');
	  $("#bt-aba-exc-adm").css('color','rgba(255,255,255, .7)');
	  

	  $(".tipos-adm").css('background','#eee');
	  $(".tipos-adm").css('color','#000');
	  
	  $("#inp-alt-adm").val("");
	
	});
	
	$("#bt-aba-exc-adm").click(function(){
	
	 elementTarget=null;
	
	  $("#bt-aba-exc-adm").css('background','#fff');
	  $("#bt-aba-exc-adm").css('border-bottom','1px #fff solid');
	  $("#bt-aba-exc-adm").css('color','#000');
	  
	  $(".aba-exc-tipo-adm").css('display','block');
	  $(".aba-alt-tipo-adm").css('display','none');
	  $(".aba-add-tipo-adm").css('display','none');
	  
	 $("#bt-aba-add-adm").css('background',' rgb(36,99,88)');
	 $("#bt-aba-add-adm").css('border-bottom','1px #444 solid;');
	 $("#bt-aba-add-adm").css('color','rgba(255,255,255, .7)');
	 $("#bt-aba-alt-adm").css('background',' rgb(36,99,88)');
	 $("#bt-aba-alt-adm").css('border-botom','1px #444 solid;');
	 $("#bt-aba-alt-adm").css('color','rgba(255,255,255, .7)');
		  
	  $(".tipos-adm").css('background','#eee');
	  $(".tipos-adm").css('color','#000');
	  
	
	});
	
	
	$("#bt-add-tipo-adm").click(function(){
		if($("#inp-nome-tipo-desp").val()=="")
          addDiv("O campo nome é obrigatório","alert");
		else{
		  addDiv("Tipo adicionado com sucesso!","sucess");
		}	
	});	
	
	
	$("#bt-alt-tipo-adm").click(function(){
		if(elementTarget==null)
          addDiv("Selecione um tipo!","alert");
		else if($('#inp-alt').val()==''){
		  addDiv("O campo nome é obrigatório","alert");
		}else{
		  addDivAltAdm("Deseja alterar o adimistrador de id "+elementTarget+"?","sucess");
		}	
	});
	
	
	$("#bt-exc-tipo-adm").click(function(){
		if(elementTarget==null)
          addDiv("Selecione um tipo!","alert");
		else{
		  addDivExcAdm("Deseja excluir o administrador de id "+elementTarget+"?","sucess");
		}	
	});
	
	
	
	
	$(".tipos-adm").click(function(){
		
		$("#inp-alt-adm").val( jQuery.trim($(this).children(".id").text()) );
		$("#inp-nome-alt-adm").val( jQuery.trim($(this).children(".nome").text()) );
		$("#inp-cpf-alt-adm").val( jQuery.trim($(this).children(".cpf").text()) );
		$("#inp-username-alt-adm").val( jQuery.trim($(this).children(".username").text()) );
		
		
		$(".tipos-adm").css('background','#eee');
		$(".tipos-adm").css('color','#000');
		$(this).css('background','linear-gradient(to bottom, rgba(255,200,0, .5), rgba(255,170,0, .7))');
		$(this).css('color','#fff');
		elementTarget = jQuery.trim($(this).children(".id").text());
	});
	
	$(".tipos-adm").mouseover(function(){
	 var elementTargetTemporario = jQuery.trim($(this).children(".id").text());
	  
	  if(elementTarget!= elementTargetTemporario)
		$(this).css('background','linear-gradient(to bottom, transparent, rgba(255,200,0, .5))');
	});
	
	$(".tipos-adm").mouseout(function(){
	
	  var elementTargetTemporario = jQuery.trim($(this).children(".id").text());
	  
	  if(elementTarget!= elementTargetTemporario)
		 $(this).css('background','#eee');
	});


}



// despesa

function init_despesa(){
   
    
	$("#bt-aba-add-desp").css('background','#fff');
	$("#bt-aba-add-desp").css('border-bottom','1px #fff solid');
	$("#bt-aba-add-desp").css('color','#000');

	if(urlGET("erro")==true){
			$('#msg-erro').css('display','block');
	}else{
			$('#msg-erro').css('display','none');
	}
	
	
	
	$("#bt-aba-add-desp").click(function(){
	
	  elementTarget=null;
	
	  $("#bt-aba-add-desp").css('background','#fff');
	  $("#bt-aba-add-desp").css('border-bottom','1px #fff solid');
	  $("#bt-aba-add-desp").css('color','#000');
	  
	  
	  $(".aba-add-tipo-desp").css('display','block');
	  $(".aba-alt-tipo-desp").css('display','none');
	  $(".aba-exc-tipo-desp").css('display','none');
	 
	  $("#bt-aba-alt-desp").css('background','rgb(36,99,88)');
	  $("#bt-aba-alt-desp").css('border-bottom','1px #444 solid;');
	  $("#bt-aba-alt-desp").css('color','rgba(255,255,255, .7)');
	  $("#bt-aba-exc-desp").css('background','rgb(36,99,88)');
	  $("#bt-aba-exc-desp").css('border-bottom','1px #444 solid;');
	  $("#bt-aba-exc-desp").css('color','rgba(255,255,255, .7)');
		  
	  $(".tipos-desp").css('background','#eee');
	  $(".tipos-desp").css('color','#000');
	  
	  $('#inp-nome-tipo-desp').val('');
	
	});
	
	
	
	$("#bt-aba-alt-desp").click(function(){
	
	 elementTarget=null;
	
	  $("#bt-aba-alt-desp").css('background','#fff');
	  $("#bt-aba-alt-desp").css('border-bottom','1px #fff solid');
	  $("#bt-aba-alt-desp").css('color','#000');
	  
	  $(".aba-alt-tipo-desp").css('display','block');
	  $(".aba-exc-tipo-desp").css('display','none');
	  $(".aba-add-tipo-desp").css('display','none');
	  
	  $("#bt-aba-add-desp").css('background',' rgb(36,99,88)');
	  $("#bt-aba-add-desp").css('border-bottom','1px #444 solid;');
	  $("#bt-aba-add-desp").css('color','rgba(255,255,255, .7)');
	  $("#bt-aba-exc-desp").css('background',' rgb(36,99,88)');
	  $("#bt-aba-exc-desp").css('border-bottom','1px #444 solid;');
	  $("#bt-aba-exc-desp").css('color','rgba(255,255,255, .7)');
	  

	  $(".tipos-desp").css('background','#eee');
	  $(".tipos-desp").css('color','#000');
	  
	  $("#inp-alt-desp").val("");
	
	});
	
	$("#bt-aba-exc-desp").click(function(){
	
	 elementTarget=null;
	
	  $("#bt-aba-exc-desp").css('background','#fff');
	  $("#bt-aba-exc-desp").css('border-bottom','1px #fff solid');
	  $("#bt-aba-exc-desp").css('color','#000');
	  
	  $(".aba-exc-tipo-desp").css('display','block');
	  $(".aba-alt-tipo-desp").css('display','none');
	  $(".aba-add-tipo-desp").css('display','none');
	  
	 $("#bt-aba-add-desp").css('background',' rgb(36,99,88)');
	 $("#bt-aba-add-desp").css('border-bottom','1px #444 solid;');
	 $("#bt-aba-add-desp").css('color','rgba(255,255,255, .7)');
	 $("#bt-aba-alt-desp").css('background',' rgb(36,99,88)');
	 $("#bt-aba-alt-desp").css('border-botom','1px #444 solid;');
	 $("#bt-aba-alt-desp").css('color','rgba(255,255,255, .7)');
		  
	  $(".tipos-desp").css('background','#eee');
	  $(".tipos-desp").css('color','#000');
	  
	
	});
	
	
	$("#bt-add-tipo-desp").click(function(){
		if($("#inp-nome-tipo-desp").val()=="")
          addDiv("O campo nome é obrigatório","alert");
		else{
		  addDiv("Tipo adicionado com sucesso!","sucess");
		}	
	});	
	
	
	$("#bt-alt-tipo-desp").click(function(){
		if(elementTarget==null)
          addDiv("Selecione um tipo!","alert");
		else if($('#inp-alt').val()==''){
		  addDiv("O campo nome é obrigatório","alert");
		}else{
		  addDivAltDesp("Deseja alterar o tipo de despesa de id "+elementTarget+"?","sucess");
		}	
	});
	
	
	$("#bt-exc-tipo-desp").click(function(){
		if(elementTarget==null)
          addDiv("Selecione um tipo!","alert");
		else{
		  addDivExcDesp("Deseja excluir o tipo de despesa de id "+elementTarget+"?","sucess");
		}	
	});
	
	
	
	
	$(".tipos-desp").click(function(){
	  
	    $("#inp-alt-desp-nome").val( jQuery.trim($(this).children(".nome").text()) );
		$("#inp-alt-desp-preco").val( jQuery.trim($(this).children(".valor").text()) );
		
		$(".tipos-desp").css('background','#eee');
		$(".tipos-desp").css('color','#000');
		$(this).css('background','linear-gradient(to bottom, rgba(255,200,0, .5), rgba(255,170,0, .7))');
		$(this).css('color','#fff');
		elementTarget = jQuery.trim($(this).children(".id").text());
	});
	
	$(".tipos-desp").mouseover(function(){
	 var elementTargetTemporario = jQuery.trim($(this).children(".id").text());
	  
	  if(elementTarget!= elementTargetTemporario)
		$(this).css('background','linear-gradient(to bottom, transparent, rgba(255,200,0, .5))');
	});
	
	$(".tipos-desp").mouseout(function(){
	
	  var elementTargetTemporario = jQuery.trim($(this).children(".id").text());
	  
	  if(elementTarget!= elementTargetTemporario)
		 $(this).css('background','#eee');
	});


}




function urlGET(name)
{
	  var url   = window.location.search.replace("?", "");
	  var itens = url.split("&");

	  for(n in itens)
	  {
	    if( itens[n].match(name) )
	    {
	      return true;
	    }
	  }
	  return false;
}


function addDiv(cont,tipo){
    
	if(tipo=='alert')
	  var img = 'images/warning.png';
	else if (tipo=='sucess')
	   var img = 'images/success.png';
	  
	var conteudo = "<div class='mensage-box'><div class='box'><div class='msg'>	<img src='"+img+"'><span>"+cont+"</span></div><div class='bt-ok'><button id='bt-ok'>Ok</button></div></div></div>";
	$('body').prepend(conteudo);
	
	$('#bt-ok').click(function(){ $('.mensage-box').remove();  $('.inp').val('');   });

}


function addDivExc(cont,tipo){
    
	if(tipo=='alert')
	  var img = 'images/warning.png';
	else if (tipo=='sucess')
	   var img = 'images/success.png';
	  
	var conteudo = "<div class='mensage-box'><div class='box'><div class='msg'>	<img src='"+img+"'><span>"+cont+"</span></div><div class='bt-ok'><button id='bt-ok'>Ok</button></div></div></div>";
	$('body').prepend(conteudo);
	
	$('#bt-ok').click(function(){ 
			$('.mensage-box').remove();  
			$('.inp').val('');   
			$('#inp_exc_servico').val(elementTarget);
			$('#form_exc_servico').submit();
	});

}




function addDivExcAdm(cont,tipo){
    
	if(tipo=='alert')
	  var img = 'images/warning.png';
	else if (tipo=='sucess')
	   var img = 'images/success.png';
	  
	var conteudo = "<div class='mensage-box'><div class='box'><div class='msg'>	<img src='"+img+"'><span>"+cont+"</span></div><div class='bt-ok'><button id='bt-ok'>Ok</button></div></div></div>";
	$('body').prepend(conteudo);
	
	$('#bt-ok').click(function(){ 
			$('.mensage-box').remove();  
			$('.inp').val('');   
			$('#inp_exc_administrador').val(elementTarget);
			$('#form_exc_administrador').submit();
	});

}



//despesa
function addDivExcDesp(cont,tipo){
    
	if(tipo=='alert')
	  var img = 'images/warning.png';
	else if (tipo=='sucess')
	   var img = 'images/success.png';
	  
	var conteudo = "<div class='mensage-box'><div class='box'><div class='msg'>	<img src='"+img+"'><span>"+cont+"</span></div><div class='bt-ok'><button id='bt-ok'>Ok</button></div></div></div>";
	$('body').prepend(conteudo);
	
	$('#bt-ok').click(function(){ 
			$('.mensage-box').remove();  
			$('.inp').val('');   
			$('#inp_exc_despesa').val(elementTarget);
			$('#form_despesa_exc').submit();
	});

}



function addDivAlt(cont,tipo){
    
	if(tipo=='alert')
	  var img = 'images/warning.png';
	else if (tipo=='sucess')
	   var img = 'images/success.png';
	  
	var conteudo = "<div class='mensage-box'><div class='box'><div class='msg'>	<img src='"+img+"'><span>"+cont+"</span></div><div class='bt-ok'><button id='bt-ok'>Ok</button></div></div></div>";
	$('body').prepend(conteudo);
	
	$('#bt-ok').click(function(){ 
			$('.mensage-box').remove();  
			
			$('#inp_alt_servico').val(elementTarget);
		//	$('#inp-alt').val($('#inp-alt').text());
			$('#form_alt').submit();
	});

}





function addDivAltDesp(cont,tipo){
    
	if(tipo=='alert')
	  var img = 'images/warning.png';
	else if (tipo=='sucess')
	   var img = 'images/success.png';
	  
	var conteudo = "<div class='mensage-box'><div class='box'><div class='msg'>	<img src='"+img+"'><span>"+cont+"</span></div><div class='bt-ok'><button id='bt-ok'>Ok</button></div></div></div>";
	$('body').prepend(conteudo);
	
	$('#bt-ok').click(function(){ 
			$('.mensage-box').remove();  
			$('#inp_alt_despesa').val(elementTarget);
			$('#form_alt_desp').submit();
	});

}



function addDivAltAdm(cont,tipo){
    
	if(tipo=='alert')
	  var img = 'images/warning.png';
	else if (tipo=='sucess')
	   var img = 'images/success.png';
	  
	var conteudo = "<div class='mensage-box'><div class='box'><div class='msg'>	<img src='"+img+"'><span>"+cont+"</span></div><div class='bt-ok'><button id='bt-ok'>Ok</button></div></div></div>";
	$('body').prepend(conteudo);
	
	$('#bt-ok').click(function(){ 
			$('.mensage-box').remove();  
			$('#inp_alt_administrador').val(elementTarget);
			$('#form_alt_adm').submit();
	});

}