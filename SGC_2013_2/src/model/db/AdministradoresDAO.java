package model.db;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Vector;

import javax.swing.JOptionPane;

import sun.misc.BASE64Encoder;

import model.business.Administrador;

public class AdministradoresDAO {

	private DAO bdMysql = DAO.getInstance();

	protected int inserirAdministrador(Administrador adm) {

		try {

			String sql = new String();
			sql = "INSERT INTO administradores(nome_admin,cpf_admin,usuarioAdmin, senha_admin) VALUES ("
					+ "'"
					+ adm.getNome()
					+ "','"
					+ adm.getCpf()
					+ "','"
					+ adm.getUsuario() + "','" + adm.getSenha() + "')";

			// System.out.println("Administrador inserido com sucesso");
			return bdMysql.executarSQL(sql);

		} catch (Exception e) {
			// System.out.println("Não foi possivel inserir Administrador");

		}

		return 1;

	}

	protected int alterarAdministrador(Administrador adm) {

		try {

			String sql = new String();

			sql = "update administradores set nome_admin = '" + adm.getNome()
					+ "'," + "cpf_admin = '" + adm.getCpf() + "',"
					+ "usuarioAdmin = '" + adm.getUsuario() + "',"
					+ "senha_admin = '" + adm.getSenha() + "'"
					+ "where id_admin = " + adm.getIdAdmin();

			// System.out.println("Usuario alterado com sucesso!");
			return bdMysql.executarSQL(sql);

		} catch (Exception e) {
			// System.out.println("Não foi possivel alterar Administrador");

		}

		return 1;

	}

	protected int deletarAdministrador(Administrador adm) {

		try {

			String sql = new String();

			sql = "delete from administradores where id_admin = '"
					+ adm.getIdAdmin() + "'";

			// System.out.println("Administrador excluido com sucesso!!");
			return bdMysql.executarSQL(sql);

		} catch (Exception e) {
			// System.out.println("Não foi possivel excluir o administrador");

		}

		return 1;

	}

	protected int buscarAdministradorPorID(Administrador adm) {

		String sql = new String();

		sql = "Select * from administradores where id_admin = '"
				+ adm.getIdAdmin() + "'";

		ResultSet rs = bdMysql.executarBuscaSQL(sql);

		if (rs == null) {
			return 0;
		} else
			try {
				while (rs.next()) {
					// Administrador a = new Administrador();
					// a.setIdAdmin(rs.getInt("idAdministrador"));
					adm.setNome(rs.getString("nome_admin"));
					adm.setNome(rs.getString("cpf_admin"));
					adm.setUsuario(rs.getString("usuarioAdmin"));
					adm.setSenha(rs.getString("senha_admin"));

				}
			} catch (SQLException e) {
				System.out
						.println("Não foi possivel encontrar este administrador");
			}

		return 0;
	}

	protected Vector<Administrador> listarTodosAdministradores() {
		Vector<Administrador> administrador = new Vector<Administrador>();

		String sql = "Select * from administradores";

		ResultSet rs = bdMysql.executarBuscaSQL(sql);

		if (rs == null) {
			return null;
		} else
			try {
				while (rs.next()) {
					Administrador adm = new Administrador();
					adm.setIdAdmin(rs.getInt("id_admin"));
					adm.setNome(rs.getString("nome_admin"));
					adm.setCpf(rs.getString("cpf_admin"));
					adm.setUsuario(rs.getString("usuarioAdmin"));
					adm.setSenha(rs.getString("senha_admin"));
					administrador.add(adm);

				}
			} catch (SQLException e) {
				return null;
			}

		return administrador;
	}

	protected Administrador verificarLogin(String usuario, String senha) {
		String sql = new String();
		sql = "select * from administradores where usuarioAdmin = '" + usuario
				+ "' and senha_admin = '" + senha + "'";
		Administrador administrador = null;
		ResultSet rs = bdMysql.executarBuscaSQL(sql);
		if (rs == null) {
			// se a busca retornar null, o rs vai ser nul, e devolve o valor
			// null
			return null;
		} else
			try {
				if (rs.next()) {
					administrador = new Administrador();
					int id = rs.getInt("id_admin");
					administrador.setIdAdmin(id);
					administrador.setNome(rs.getString("nome_admin"));
					administrador.setUsuario(rs.getString("usuarioAdmin"));
					administrador.setSenha(rs.getString("senha_admin"));
					// usuario encontrado

				}
			} catch (SQLException e) {
				return null;
			}
		return administrador;

	}

}
