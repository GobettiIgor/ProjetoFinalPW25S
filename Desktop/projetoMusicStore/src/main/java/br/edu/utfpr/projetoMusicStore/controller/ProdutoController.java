package br.edu.utfpr.projetoMusicStore.controller;

import br.edu.utfpr.projetoMusicStore.service.CategoriaService;
import br.edu.utfpr.projetoMusicStore.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;

@Controller
@RequestMapping("produto")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping
    private String list(Model model){
        model.addAttribute("listProdutos", produtoService.findAll());
        model.addAttribute("listCategorias", categoriaService.findAll());
        return "produto/list";
    }

    @GetMapping("/{id}")
    private String view(@PathVariable("id") Long id, Model model) {
        model.addAttribute("produto", produtoService.findOne(id));
        return "produto/produto";
    }

    @GetMapping("categoria/{id}")
    private String filter(
            @PathVariable("id") Long idCategoria,
            Model model, Principal principal) {
        model.addAttribute("listCategorias", categoriaService.findAll());
        if (!categoriaService.findOne(idCategoria).getNome().equals("All") && categoriaService.findOne(idCategoria).getNome() != null) {
            model.addAttribute("listProdutos", produtoService.findByCategoriaId(idCategoria));

        } else {
            model.addAttribute("listProdutos", produtoService.findAll());
        }
        return "produto/list";
    }
}
