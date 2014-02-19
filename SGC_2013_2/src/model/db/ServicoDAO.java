package model.db;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import model.SisCond;
import model.business.Servico;

public class ServicoDAO {

	public static void deleteServico(String id) {
		DAO tiposervicoDAO = DAO.getInstance();
		String query = "delete from tbtiposervico where idtbtiposervico = "
				+ id + "";
		tiposervicoDAO.executarSQL(query);
	}

	public static void addServico(String nome) {
		DAO tiposervicoDAO = DAO.getInstance();
		String query = "insert into tbtiposervico value(null,'" + nome + "')";
		tiposervicoDAO.executarSQL(query);
	}

	public static void alterServico(String nome, String id) {
		DAO tiposervicoDAO = DAO.getInstance();
		String query = "update tbtiposervico set nome ='" + nome
				+ "' where idtbtiposervico=" + id + "";
		tiposervicoDAO.executarSQL(query);
	}
	
	public static ArrayList<Servico> getListServico() {
		DAO tiposervicoDAO = DAO.getInstance();
		return tiposervicoDAO.getListServico();
		
	}
			
}
