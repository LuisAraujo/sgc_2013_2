package controller;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;

import model.SGC;
import model.business.Servico;
import model.business.SessionManager;
import model.db.DAO;

public class LoginCmd extends Command{

	@Override
	public void execute() {
			
			DAO usuarioDAO = DAO.getInstance();
			String nome = request.getParameter("username");
			String password = request.getParameter("password");

			if (nome != null && password != null) {
				String query = "select * from tbusuario where nome ='" + nome
						+ "' and senha ='" + password + "'";
				ResultSet rs = usuarioDAO.executarBuscaSQL(query);
				try {
					if (rs.next()) {
					
						// inicia sessão
						SessionManager sm = SessionManager.getInstance(request);
						sm.setAtribulte(nome);
						try {
							redireciona("administrador.jsp");
						} catch (ServletException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						} catch (IOException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}

					} else {
						try {
							response.sendRedirect("index.html?erro=true");
						} catch (IOException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
					}
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}

			}
		
	}
	
	
	
	public void redireciona(String forward) throws ServletException, IOException {

		ArrayList<Servico> listaServico = SGC.getInstance().getListServico();

		request.setAttribute("listaServico", listaServico);

		RequestDispatcher view = request.getRequestDispatcher(forward);
		view.forward(request, response);
		
	}
	
	

}
