package controller;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sun.corba.se.spi.orbutil.fsm.Action;

import model.business.Servico;
import model.business.SessionManager;
import model.db.DAO;

@WebServlet("/SGCServlet")
public class Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private Map mappings = null;

	public Servlet() {

	}

	// command
	public void init(ServletConfig config) throws ServletException {
		mappings = new HashMap();
		// mapping
		mappings.put("LoginCmd", "controller.LoginCmd");
		mappings.put("AddServicoCmd", "controller.AddServicoCmd");
		mappings.put("DeleteServicoCmd", "controller.DeleteServicoCmd");
		mappings.put("AlterServicoCmd", "controller.AlterServicoCmd");
	};

	protected void service(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		String cmd = request.getParameter("cmd");

		String actionClass = (String) mappings.get(cmd);

		Command action = null;

		try {
			action = (Command) Class.forName(actionClass).newInstance();
		} catch (InstantiationException | IllegalAccessException
				| ClassNotFoundException e1) {
			e1.printStackTrace();
		}

		action.setRequest(request);
		action.setResponse(response);
		// action.setServletContext(getServletContext());
		action.execute();

	}

}
