package model.business;


public class Administrador {
	
	String nome;
	String usuario;
	String cpf;
	String senha;
	int id;
	
	public Administrador(){	
	};
	
	public Administrador(String nome, String cpf, String usuario, String senha){
		this.nome = nome;
		this.usuario = usuario;
		this.cpf = cpf;
		this.senha = senha;
	};
	
	

	
	
	public int getId() {
		return id;
	}
	public void setId(int idAdmin) {
		this.id = idAdmin;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}

}
