package controller;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;

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
							forward("administrador.jsp");
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
	
	

}
