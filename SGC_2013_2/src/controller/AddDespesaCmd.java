package controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;



import model.SGC;
//import model.ProjCondominio;
import model.business.Despesa;
import model.business.Servico;
//import model.db.DAO_Despesa;
import model.db.DataBaseManager;
//import model.db.GerenteBanco;

public class AddDespesaCmd extends Command {

	@Override
	public void execute() {

		
		DataBaseManager db= DataBaseManager.getInstance(); 
		
		String nome = request.getParameter("nome");
		String valor = request.getParameter("valor");

		
		if ((nome!= null) && (valor != null)){		
			db.addDespesa(nome, valor);
		}
		
		
	//	ProjCondominio.getInstance().insertDespesa(nome, valor);

		try {
			redireciona("adm_despesa.jsp");
		} catch (ServletException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// TODO Auto-generated method stub

	}
	
	public void redireciona(String forward) throws ServletException, IOException {

		ArrayList<Despesa> listaDespesa = SGC.getInstance().getListDespesas();

		request.setAttribute("listaDespesa", listaDespesa);

		RequestDispatcher view = request.getRequestDispatcher(forward);
		view.forward(request, response);

	}

}
