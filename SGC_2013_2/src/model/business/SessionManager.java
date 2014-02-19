package model.business;

import java.sql.Connection;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import model.db.DAO;

public class SessionManager {

	private static  SessionManager singleton = null;
	private static HttpSession session = null;

	private SessionManager(HttpServletRequest rq) {
		this.session = rq.getSession();
	}

	public static SessionManager getInstance(HttpServletRequest rq) {
		if (singleton == null)
			singleton = new SessionManager(rq);
		
		return singleton;
	}

	public void setAtribulte(String username) {

		session.setAttribute("username", username);

	}

	public static String getAtribulte() {

		String name = null;

		if (session != null){
			name = (String) session.getAttribute("username");

			if (name != null)
				return name;
		
		}
		
			return "null";

	}

	public boolean userLogado() {

		String username = (String) session.getAttribute("username");

		if (username == null)
			return false;
		else
			return true;

	}

	public static void invalideSession() {

		if (session != null){
			session.invalidate();
		}
	}

}
