var elementTarget;

$(window).ready(function(){init();});

// background: rgb(36,99,88);

function init(){

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
	
	
	
	
	$(".tipos").click(function(){
		
		$("#inp-alt").val( jQuery.trim($(this).children(".nome").text()) );
		$(".tipos").css('background','#eee');
		$(".tipos").css('color','#000');
		$(this).css('background','linear-gradient(to bottom, rgba(255,200,0, .5), rgba(255,170,0, .7))');
		$(this).css('color','#fff');
		elementTarget = jQuery.trim($(this).children(".id").text());
	});
	
	$(".tipos").mouseover(function(){
	 var elementTargetTemporario = jQuery.trim($(this).children(".id").text());
	  
	  if(elementTarget!= elementTargetTemporario)
		$(this).css('background','linear-gradient(to bottom, transparent, rgba(255,200,0, .5))');
	});
	
	$(".tipos").mouseout(function(){
	
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
			$('#form_exc').submit();
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