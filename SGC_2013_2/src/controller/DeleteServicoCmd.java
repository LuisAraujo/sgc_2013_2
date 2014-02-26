package controller;

import java.io.IOException;

import javax.servlet.ServletException;

import model.db.DAO;
import model.db.DataBaseManager;

public class DeleteServicoCmd extends Command {

	@Override
	public void execute() {
		
		DataBaseManager db = DataBaseManager.getInstance();
		String id =request.getParameter("idservico");
		
		if (id != null) { 
			 db.deleteServico(id);
		}
				  
		try {
			forward("administrador.jsp");
		} catch (ServletException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
