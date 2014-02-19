<%@ page import="model.business.*"%>

<%
	SessionManager.invalideSession();
	response.sendRedirect("index.html");
%>