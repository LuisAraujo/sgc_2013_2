package controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.SGC;
import model.business.Servico;

public abstract class Command {

	protected ServletContext context;
	protected HttpServletRequest request;
	protected HttpServletResponse response;

	// gets and sets
	public void setServletContext(ServletContext context) {
		this.context = context;
	}

	// gets and sets
	public ServletContext getServletContext() {
		return context;
	}

	public HttpServletRequest getRequest() {
		return request;
	}

	public void setRequest(HttpServletRequest request) {
		this.request = request;
	}

	public HttpServletResponse getResponse() {
		return response;
	}

	public void setResponse(HttpServletResponse response) {
		this.response = response;
	}

	public abstract void execute();

	
}
