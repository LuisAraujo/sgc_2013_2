package model.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Vector;

import model.SGC;
import model.business.Administrador;
import model.business.Despesa;
import model.business.Servico;

public class DAO {

	private static DAO singleton = null;
	private Connection con;

	public static DAO getInstance() {
		if (singleton == null) {
			singleton = new DAO();
		}
		return singleton;
	}
    
	private DAO() {
		try {

			Class.forName("com.mysql.jdbc.Driver").newInstance();
			con = DriverManager.getConnection(
					"jdbc:mysql://localhost:3306/condominio", "root", "root");
	

		} catch (Exception e) {
			System.out.println(e.getMessage());
			System.out.println("Nao foi possível realizar a conexão.");
		}
	}

	// Executar consultas no banco: SELECTs
	public ResultSet executarBuscaSQL(String sql) {
		try {
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(sql);
			return rs;
		} catch (Exception e) {
			System.out.println("Nao foi possível recuperar dados.");
			return null;
		}

	}

	
	
	/*
	// executar atualizações no banco: INSERTs, UPDATEs, DELETEs
	public void executarSQL(String sql) {
		try {

			Statement st = con.createStatement();
			st.executeUpdate(sql);
			st.close();

		} catch (Exception e) {
			System.out.println("Nao foi possível executar SQL.");
		}
	}
	
	*/
	

	public int executarSQL(String sql) {
		try {

			Statement st = con.createStatement();
			st.executeUpdate(sql);
			st.close();

		} catch (Exception e) {
			System.out.println("Nao foi possível executar SQL.");
			return 0;
		}
		return 1;
	}
	

	public  int getRowCount(ResultSet rs) {
		int rows = 0;
		try {
			rs.last();
			rows = rs.getRow();
			rs.beforeFirst();
		} catch (Exception e) {
			System.out
					.println("Erro ao capturar a quantidade de linhas do resultset");
		}
		return rows;
	}

	// fechando a conex�o

	public void fecharConexao() {
		try {
			con.close();
		} catch (Exception e) {
			System.out.println("Nao foi poss�vel fechar a conex�o.");
		}

	}

	public void finalize() {
		fecharConexao();
	}
	
	
	public ArrayList<Servico> getListServico() {
		
		int i = 0;
		ArrayList<Servico> listaServico = new ArrayList<Servico>();

		
		try {
			Statement st = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,  ResultSet.CONCUR_UPDATABLE);  
			ResultSet rs = st.executeQuery("select * from tbtiposervico");
		
			if (DAO.getInstance().getRowCount(rs) > 0) {			
				while (rs.next()) {	
					//System.out.println(++i);
					Servico s = SGC.getInstance().newInstanceOfServico(rs.getInt("idtbtiposervico"),rs.getString("nome"));
					listaServico.add(s);
				}

			}

		} catch (Exception e) {
			System.out.println("Nao foi possível recuperar dados");
			return null;
		}

		return listaServico;
	
	}

	public ArrayList<Despesa> getListDespesa() {
		int i = 0;
		ArrayList<Despesa> listaDespesa = new ArrayList<Despesa>();

		
		try {
			Statement st = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,  ResultSet.CONCUR_UPDATABLE);  
			ResultSet rs = st.executeQuery("select * from tbtipodespesa");
		
			if (DAO.getInstance().getRowCount(rs) > 0) {			
				while (rs.next()) {	
					System.out.println(++i);
					Despesa s = new Despesa(rs.getInt("idtbtipodespesa"), rs.getString("nome"),rs.getDouble("valor"));
					listaDespesa.add(s);
				}

			}

		} catch (Exception e) {
			return null;
		}

		return listaDespesa;
	
	}
	
	
	

	public ArrayList<Administrador> getListAdministrador() {
		
		int i=0;
		ArrayList<Administrador> listaAdministrador = new ArrayList<Administrador>();
		
		try {
				
			Statement st = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,  ResultSet.CONCUR_UPDATABLE); 
			ResultSet rs = st.executeQuery("Select * from tbadministrador");

			if (DAO.getInstance().getRowCount(rs) > 0) {			
				while (rs.next()) {	
					System.out.println(++i);
					
					Administrador a = new Administrador();
					
					a.setId(rs.getInt("idtbadministrador"));	
					a.setNome(rs.getString("nome"));
					a.setUsuario(rs.getString("usuario"));
					a.setCpf(rs.getString("cpf"));
					
				//	a.setId(rs.getInt("idtbadministrador"));	
				//	a.setNome(rs.getString("nome"));
				//	a.setUsuario(rs.getString("usuario"));
				//	a.setCpf(rs.getString("cpf"));
					
					listaAdministrador.add(a);		
				}

			}
			
	     } catch (SQLException e) {
	    	 return null;
		}

		return listaAdministrador;
	}
}
