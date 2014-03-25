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

		<div>
			Usuario =
			<%=SessionManager.getAtribulte()%>
		</div>

		<div>
			<a href='logout.jsp'> Sair </a>
		</div>




		<div id="header-wrapper">
			<div id="header" class="container">
				<div id="logo">
					<h1>
						<a href="#">Sistema de Condomínio</a>
					</h1>
					<p>Atividade de java web</p>
				</div>
			</div>
			<div id="menu" class="container">
				<ul>
					<li id='bt_administrador' class="current_page_item"> <span>Administradores</span> </li>
					<li id='bt_despesa' > <span> Despesas </span></li>
					<li id='bt_servico' > <span> Serviços </span> </li>
					<li id='bt_usuario'>  <span> btv04 </span>  </li>
				</ul>
			</div>
		</div>

    
       <!-- PAGINA -->

		<div id="page" class="container">

  			<!-- ADMINISTRADOR -->
			
			<div id='content_adm' class="content">

				<div class="secao">
					<div class="title">
						<h1 style='font-size: 30px'>Gerenciamento de Administradores</h1>
					</div>
					<div class="div-bt-abas">
						<div id="bt-aba-add-adm" class="bt-aba">
							<div class="text">Adicionar Administrador</div>
						</div>
						<div id="bt-aba-alt-adm" class="bt-aba">
							<div class="text">Alterar Administrador</div>
						</div>
						<div id="bt-aba-exc-adm" class="bt-aba">
							<div class="text">Excluir Administrador</div>
						</div>
					</div>


					<div class="aba aba-add-tipo-adm">
						<div class="aba-bg">

							<div class='aba-conteiner'>

							<!--  form here -->

							</div>

						</div>
					</div>


					<div class="aba aba-alt-tipo-adm">
						<div class="aba-bg">
							<div class='aba-conteiner'>

								<span class='aba-title'>Lista de Administradores</span>
								<div class="lista-tipos">

									<!--  for -->


								</div>

								<!--  form here -->
								

							</div>
						</div>
					</div>



					<div class="aba aba-exc-tipo-adm">

						<div class="aba-bg">
							<div class='aba-conteiner'>
							
								<span class='aba-title'>Lista de Administradores</span>
								<div class="lista-tipos">

									<!--  for -->
									
								</div>

 								<!--  from -->
							</div>
						</div>
					</div>

				</div>
			</div>
			
			
		
			
			
		</div>





		<div id="portfolio-wrapper">
			<div id="portfolio" class="container"></div>
		</div>
	</div>
	<div id="footer">
		<p>
			Copyright (c) 2013 Sitename.com. All rights reserved. Design by <a
				href="http://www.freecsstemplates.org/" rel="nofollow">FreeCSSTemplates.org</a>.
			Photos by <a href="http://fotogrph.com/">Fotogrph</a>.
		</p>
	</div>
</body>
</html>
