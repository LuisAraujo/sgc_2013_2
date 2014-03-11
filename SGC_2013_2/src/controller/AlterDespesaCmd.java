package controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;

import model.SGC;
import model.business.Servico;
import model.db.DataBaseManager;

public class AlterDespesaCmd extends Command{
	@Override
	public void execute() {

		DataBaseManager db = DataBaseManager.getInstance();
		String id = request.getParameter("iddespesa");
		String nome = request.getParameter("nome");
		String valor = request.getParameter("valor");

		if (id != null) {
			db.alterDespesa(id,nome,valor);
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

		request.setAttribute("listaDespesa", listaServico);

		RequestDispatcher view = request.getRequestDispatcher(forward);
		view.forward(request, response);
		
	}

}
