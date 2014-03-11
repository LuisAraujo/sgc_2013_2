/*Model Facade*/
package model;

import java.util.ArrayList;

import model.business.Despesa;
import model.business.Servico;
import model.db.DataBaseManager;

public class SGC {
	
	private static SGC singleton;
	private DataBaseManager dbm = DataBaseManager.getInstance();
	
	private SGC(){};
	
	public static SGC getInstance(){
		if(singleton == null)
			singleton = new SGC();
		
		return singleton;
		
	}
	
	public static Servico newInstanceOfServico(int id, String nome){
		return new Servico(id, nome);	
	}

	public ArrayList<Servico> getListServico() {
		
		return dbm.getListServico();
	}

	public ArrayList<Despesa> getListDespesas() {
		
		return dbm.getListDespesa();
	}

	
}
