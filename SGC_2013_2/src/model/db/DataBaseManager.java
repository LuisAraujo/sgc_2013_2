package model.db;
//facade
public class DataBaseManager {
	
	private static DataBaseManager singleton;
	
	private DataBaseManager(){}
	
	public static DataBaseManager getInstance(){
		if(singleton == null)
			singleton = new DataBaseManager();
		
		return singleton;	
	}
	
	public void deleteServico(String id){
		ServicoDAO.deleteServico(id);
	}
	
	public static void addServico(String nome){
		ServicoDAO.addServico(nome);
	}
	
	public static void alterServico(String nome, String id){
		ServicoDAO.alterServico(nome,id);
	}
	
	
	
}
