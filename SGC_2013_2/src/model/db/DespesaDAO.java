package model.db;

import java.util.ArrayList;

import model.business.Despesa;
import model.business.Servico;

public class DespesaDAO {
	
	
	protected static void deleteDespesa(String id) {
		DAO tipodespesaDAO = DAO.getInstance();
		String query = "delete from tbtipodespesa where idtbtipodespesa = "
				+ id + "";
		tipodespesaDAO.executarSQL(query);
	}

	protected static void addDespesa(String nome, Double valor) {
		DAO tipodespesaDAO = DAO.getInstance();
		String query = "insert into tbtipodespesa value(null,'" + nome + "','"+valor+")";
		tipodespesaDAO.executarSQL(query);
	}

	protected static void alterDespesa(String nome, String id, String valor) {
		DAO tipodespesaDAO = DAO.getInstance();
		String query = "update tbtipodespesa set nome ='" + nome
				+ "', valor ="+valor+" where idtbtipodespesa=" + id + "";
		tipodespesaDAO.executarSQL(query);
	}
	
	protected static ArrayList<Despesa> getListDespesa() {
		DAO tipodespesaDAO = DAO.getInstance();
		return tipodespesaDAO.getListDespesa();
		
	}
			
}
