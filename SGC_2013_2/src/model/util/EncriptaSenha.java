package model.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import model.business.Administrador;
import sun.misc.BASE64Encoder;

public class EncriptaSenha {

	public String encriptarSenha(Administrador adm) {
		try {
			MessageDigest digest = MessageDigest.getInstance("MD5");
			// System.out.println("A senha atual é: "+adm.getSenha());
			digest.update(adm.getSenha().getBytes());
			BASE64Encoder encoder = new BASE64Encoder();
			adm.setSenha(encoder.encode(digest.digest()));
			return adm.getSenha();
		} catch (NoSuchAlgorithmException ns) {
			ns.printStackTrace();
			System.out.println("Falha na criptografia");
			return adm.getSenha();
		}

	}

}
