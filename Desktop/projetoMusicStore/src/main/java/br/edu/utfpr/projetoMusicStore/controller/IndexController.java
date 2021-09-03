package br.edu.utfpr.projetoMusicStore.controller;

import br.edu.utfpr.projetoMusicStore.service.CategoriaService;
import br.edu.utfpr.projetoMusicStore.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class IndexController {

    @Autowired
    private ProdutoService produtoService;

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping
    private String home(Model model) {
        model.addAttribute("listProdutos", produtoService.findAll());
        model.addAttribute("listCategorias", categoriaService.findAll());
        return "index";
    }
}
