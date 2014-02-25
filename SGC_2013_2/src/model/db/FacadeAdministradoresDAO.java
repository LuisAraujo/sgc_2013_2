package model.db;

import java.util.Vector;

import model.business.Administrador;
import model.util.EncriptaSenha;

public class FacadeAdministradoresDAO {
	
		 
	private static FacadeAdministradoresDAO fachadaDAOSingleton = null;  
	  
	   //construtor defualt da classe
	   private void FacadeDAOl() {  
	       
	   }     
	  
	   // retorna a única instancia da fachada 
	   public static FacadeAdministradoresDAO getInstance() {  
	      if (fachadaDAOSingleton == null) {  
	         fachadaDAOSingleton = new FacadeAdministradoresDAO();  
	     }  
	     return fachadaDAOSingleton;  
	   }  
	    
	    
	
	AdministradoresDAO admDAO = new AdministradoresDAO();
	
	  
	   public int inserirAdministradorBD(Administrador adm) { 
		   return admDAO.inserirAdministrador(adm);
		  
	        
	   }  
	  
	   public int alterarAdministradorBD(Administrador adm) {  
		   return admDAO.alterarAdministrador(adm);
	   }  
	   
	   public int deletarAdministradorbd(Administrador adm){
		   return admDAO.deletarAdministrador(adm);
		   
	   }
	   
	   public Administrador verificarLogin(String usuario, String senha){
		   return admDAO.verificarLogin(usuario, senha);
		   
	   }
	
	 
		public Vector<Administrador> listarAdministradoresbd(){
			try {
				AdministradoresDAO administradorDAO = new AdministradoresDAO();
				Vector<Administrador> vetorAdministradores = administradorDAO.listarTodosAdministradores();
				return vetorAdministradores;
			
			} catch (Exception e) {
				System.out.println("FacadeDAO: Erro ao listar todos os administradores");
				return null;
			}
			


	}
	
	
		
	

}//end of class
