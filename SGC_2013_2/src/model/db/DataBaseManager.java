package model.db;

import java.util.ArrayList;
import java.util.Vector;

import model.business.Administrador;
import model.business.Despesa;
import model.business.Servico;

//facade
public class DataBaseManager {

	private static DataBaseManager singleton;
	AdministradoresDAO admDAO = new AdministradoresDAO();
	ServicoDAO servicoDAO = new ServicoDAO();
	DespesaDAO despesaDAO = new DespesaDAO();

	private DataBaseManager() {
	}

	public static DataBaseManager getInstance() {
		if (singleton == null)
			singleton = new DataBaseManager();

		return singleton;
	}

	// mŽtodos de servi�o
	public void deleteServico(String id) {
		servicoDAO.deleteServico(id);
	}

	public void addServico(String nome) {
		servicoDAO.addServico(nome);
	}

	public void alterServico(String nome, String id) {
		servicoDAO.alterServico(nome, id);
	}
	
	public ArrayList<Servico> getListServico() {
		return servicoDAO.getListServico();
	} 
	
	// mŽtodos de Administrador
	public int inserirAdministradorBD(Administrador adm) {
		return admDAO.inserirAdministrador(adm);
	}

	public int alterarAdministradorBD(Administrador adm) {
		return admDAO.alterarAdministrador(adm);
	}

	public int deletarAdministradorbd(Administrador adm) {
		return admDAO.deletarAdministrador(adm);

	}

	public Administrador verificarLogin(String usuario, String senha) {
		return admDAO.verificarLogin(usuario, senha);

	}

	public Vector<Administrador> listarAdministradoresbd() {
		try {
			AdministradoresDAO administradorDAO = new AdministradoresDAO();
			Vector<Administrador> vetorAdministradores = administradorDAO
					.listarTodosAdministradores();
			return vetorAdministradores;

		} catch (Exception e) {
			System.out
					.println("FacadeDAO: Erro ao listar todos os administradores");
			return null;
		}

	}
	
    //método de despesa
	public void addDespesa(String nome, String valor) {
		despesaDAO.addDespesa(nome, Double.parseDouble(valor) ); 
		
	}

	public ArrayList<Despesa> getListDespesa() {
		return despesaDAO.getListDespesa();
	}

	public void deleteDespesa(String id) {
		despesaDAO.deleteDespesa(id);
	}

	public void alterDespesa(String id, String nome, String valor) {
		despesaDAO.alterDespesa(id, nome, valor);
	}

}
