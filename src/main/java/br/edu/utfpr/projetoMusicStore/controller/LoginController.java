package br.edu.utfpr.projetoMusicStore.controller;

import br.edu.utfpr.projetoMusicStore.model.Usuario;
import br.edu.utfpr.projetoMusicStore.service.PermissaoService;
import br.edu.utfpr.projetoMusicStore.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.mail.*;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.util.Properties;
import java.util.Set;

@Controller
@RequestMapping("login")
public class LoginController {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private PermissaoService permissaoService;

    @GetMapping
    private String login() {
        return "/login/login";
    }

    @GetMapping(value = {"novo"})
    private String criarLogin(Model model) {
        model.addAttribute("novoUsuario", new Usuario());
        return "login/criarLogin";
    }

    @PostMapping(value = {"novo"})
    private String save(Usuario novoUsuario){
        novoUsuario.setPermissoes(Set.of(permissaoService.findOne(1L)));
        novoUsuario.setSenha(BCrypt.hashpw(novoUsuario.getPassword(), BCrypt.gensalt()));

        usuarioService.save(novoUsuario);
        return "redirect:/";
    }

    @GetMapping(value = {"email"})
    private String enviaEmail(){
        Properties props = new Properties();
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.socketFactory.port", "465");
        props.put("mail.smtp.socketFactory.class",
                "javax.net.ssl.SSLSocketFactory");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.port", "465");

        Session session = Session.getDefaultInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication()
            {
                return new PasswordAuthentication("---",
                        "------");
            }
        });

        session.setDebug(true);

        try {
            Message msg = new MimeMessage(session);
            msg.setFrom(new InternetAddress("---", "PESSOA TESTE"));
            msg.addRecipient(Message.RecipientType.TO,
                    new InternetAddress("---", "Você"));
            msg.setSubject("Teste");
            msg.setText("This is a test");
            Transport.send(msg);
        } catch (AddressException e) {
            // ...
        } catch (MessagingException e) {
            // ...
        } catch (UnsupportedEncodingException e) {
            // ...
        }
        return "login/criarLogin";
    }

}