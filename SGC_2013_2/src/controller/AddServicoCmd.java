package controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;

import model.SGC;
import model.business.Despesa;
import model.business.Servico;
import model.db.DAO;
import model.db.DataBaseManager;

public class AddServicoCmd extends Command {

	@Override
	public void execute() {

		DataBaseManager db= DataBaseManager.getInstance(); 
		String nome = request.getParameter("nome");

		if (nome != null) {
			db.addServico(nome);
		}

		try {
			redireciona("administrador.jsp");
		} catch (ServletException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
	
	
	public void redireciona(String forward) throws ServletException, IOException {

		ArrayList<Servico> listaServico = SGC.getInstance().getListServico();

		request.setAttribute("listaServico", listaServico);

		RequestDispatcher view = request.getRequestDispatcher(forward);
		view.forward(request, response);
		
	}

}
