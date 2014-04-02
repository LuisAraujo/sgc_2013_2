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
			<div id="menu" class="container">
			  <a style='text-align:left; line-height:0px'  href='administrador.jsp' >	<img  class='menu' src='images/menu.png'></img></a>
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

								<form id="form_add_adm" name="form_add_adm" method="post" action='SGCServlet'>
									<span class='aba-title'>Nome</span>
									<input class='inp' name='nome' id="inp-nome-adm" type='text' />
									
									<span class='aba-title'>CPF</span>
									<input class='inp' name='cpf' id="inp-cpf-adm" type='text' />
									
									<span class='aba-title'>Username</span>
									<input class='inp' name='username' id="inp-username-adm" type='text' />
									
									<span class='aba-title'>Senha</span>
									<input class='inp' name='senha' id="inp-senha-adm" type='password' />
									
									
									<input type="hidden" name="cmd" value="AddAdministradorCmd"" />
									
									<button id="bt_add_tipo">Adicionar</button>
								</form>

							</div>

						</div>
					</div>


					<div class="aba aba-alt-tipo-adm" style='height:620px'>
						<div class="aba-bg" style='height:620px'>
							<div class='aba-conteiner' >

								<span class='aba-title'>Lista de Administradores</span>
								
								<div id='sobre-lista-desp-alt' class="lista-tipos"
									style='width: 885px; height: 25px; overflow: hidden; margin-bottom: 0px;'>
									<div class="atipos atipos-adm">
										<div class="id">ID</div>
										<div class="nome">NOME</div>
										<div class="username">USERNAME</div>
										<div class="cpf">CPF</div>
										
									</div>
								</div>
								
								
								<div class="lista-tipos" style="width:900px">

									<%
										
									ArrayList<Administrador> listaAdministrador = (ArrayList<Administrador>)request.getAttribute("listaAdministrador");
									for (Administrador a : listaAdministrador) {
									%>

									<div class="tipos tipos-adm"> 
										<div class="id"><%=a.getId()%></div>
										<div class="nome"><%=a.getNome()%></div>
										<div class="username"><%=a.getUsuario()%></div>
										<div class="cpf"><%=a.getCpf()%></div>
									
										
									</div>

									<%
										}
									%>

								</div>

								<form id="form_alt_adm" name="form_alt_adm" method="post" action='SGCServlet'>
									
									<span class='aba-title'>Nome</span>
									<input class='inp' name='nome' id="inp-nome-alt-adm" type='text' />
									
									<span class='aba-title'>CPF</span>
									<input class='inp' name='cpf' id="inp-cpf-alt-adm" type='text' />
									
									<span class='aba-title'>Username</span>
									<input class='inp' name='username' id="inp-username-alt-adm" type='text' />
									
									<span class='aba-title'>Senha</span>
									<input class='inp' name='senha' id="inp-senha-alt-adm" type='password' />
									
									
									<input id='inp_alt_administrador' type="hidden" name="idadministrador"
										value="0" />
									
									<input type="hidden" name="cmd" value="AlterAdministradorCmd"" />
									
									
								</form>
								
								
								<button id="bt-alt-tipo-adm">Alterar</button>
								

							</div>
						</div>
					</div>



					<div class="aba aba-exc-tipo-adm">

						<div class="aba-bg">
							<div class='aba-conteiner'>
							
								<span class='aba-title'>Lista de Administradores</span>
								
								<div id='sobre-lista-desp-alt' class="lista-tipos"
									style='width: 885px; height: 25px; overflow: hidden; margin-bottom: 0px;'>
									<div class="atipos atipos-adm">
										<div class="id">ID</div>
										<div class="nome">NOME</div>
										<div class="username">USERNAME</div>
										<div class="cpf">CPF</div>
										
									</div>
								</div>
								
								
								
								<div class="lista-tipos" style="width:900px">

									<%
										
									for (Administrador a : listaAdministrador) {
									%>

									<div class="tipos tipos-adm"> 
										<div class="id"><%=a.getId()%></div>
										<div class="nome"><%=a.getNome()%></div>
										<div class="username"><%=a.getUsuario()%></div>
										<div class="cpf"><%=a.getCpf()%></div>
									
										
									</div>

									<%
										}
									%>

									
								</div>

 							
 								<form id="form_exc_administrador" name="form_administrador_exc" method="post" action='SGCServlet'>								
									<input id='inp_exc_administrador' type="hidden" name="idadministrador" value="0" />
									<input type="hidden" name="cmd" value="DeleteAdministradorCmd" />
								</form>
								
								<button id="bt-exc-tipo-adm">Excluir</button>
 							
 							
 							
 							
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
