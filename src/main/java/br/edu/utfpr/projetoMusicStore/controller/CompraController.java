package br.edu.utfpr.projetoMusicStore.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("compra")
public class CompraController {

    @GetMapping
    private String index() {
        return "carrinho";
    }

}