<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Login SGC</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<link
	href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900"
	rel="stylesheet" />
<link href="style/default.css" rel="stylesheet" type="text/css"
	media="all" />
<link href="style/fonts.css" rel="stylesheet" type="text/css"
	media="all" />
<link rel='stylesheet' type='text/css' href='style/style.css' />



<link rel='stylesheet' type='text/css' href='style/normalize.css' />
<script type='text/javascript' src='js/jquery.js'></script>
<script type='text/javascript' src='js/script.js'></script>
<!--[if IE 6]>
	<link href="default_ie6.css" rel="stylesheet" type="text/css" />
	<![endif]-->
</head>
<body>


	<div id="wrapper">


		<%@ page import="model.business.*, model.db.*, java.util.ArrayList;"%>

		<form method="post" action='SGCServlet'>
			<input type="hidden" name="cmd" value="LogoffCmd" />
			<button>Sair</button>
		</form>




		<div id="header-wrapper">
			<div id="header" class="container">
				<div id="logo">
					<h1>
						<a href="#">Sistema de Condomínio</a>
					</h1>
					<p>Atividade de java web</p>
				</div>
			</div>
		<div id="menu" class="container" style='width:100%; height:120px; '>
			<div style='width:1150px; margin-left:auto; margin-right:auto'>
					
					<li id='bt_administrador' > 
						<form method="post" action='SGCServlet'>
						<input type="hidden" name="cmd" value="GetAdministradorCmd" />
						<button class='bt_acesso'>Administradores</button>
						</form> 
					</li>
									
					
					<li id='bt_despesa' > 
						<form method="post" action='SGCServlet'>
						<input type="hidden" name="cmd" value="GetDespesaCmd" />
						<button class='bt_acesso'>Despesas</button>
						</form> 
					</li>
					
					
					
					
					<li id='bt_servico' > 
						<form method="post" action='SGCServlet'>
						<input type="hidden" name="cmd" value="GetServicoCmd" />
						<button class='bt_acesso'>Serviços</button>
						</form> 
					</li>
				
				</div>
			</div>
		</div>

    
       <!-- PAGINA -->

		<div id="page" class="container" style='width:100%; height:758px; margin-top:0; padding-top:0px'>	
			<img class='img_cond' src='images/san_rafael.jpg' ></img>
		</div>
	</div>
	
<div id="footer">
		<p>Copyleft (c) 2014 IFBA - Santo Amaro. All rights not reserved. Design by Andreia Pinheiro, Fernando Moreira e Luis Gustavo.
	</div>
</body>
</html>
