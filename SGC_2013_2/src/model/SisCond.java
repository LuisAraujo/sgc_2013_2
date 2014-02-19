//pp facade
package model;

import model.business.Servico;

public class SisCond {
	
	private static SisCond singleton;
	
	private SisCond(){};
	
	public static SisCond getInstance(){
		if(singleton == null)
			singleton = new SisCond();
		
		return singleton;
		
	};
	
	public static Servico newInstanceOfServico(int id, String nome){
		return new Servico(id, nome);	
	}
}
