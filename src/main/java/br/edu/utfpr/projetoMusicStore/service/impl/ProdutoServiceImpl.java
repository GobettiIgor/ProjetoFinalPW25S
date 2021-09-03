package br.edu.utfpr.projetoMusicStore.service.impl;

import br.edu.utfpr.projetoMusicStore.model.Produto;
import br.edu.utfpr.projetoMusicStore.repository.ProdutoRepository;
import br.edu.utfpr.projetoMusicStore.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoServiceImpl extends CrudServiceImpl<Produto, Long> implements ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    @Override
    protected JpaRepository<Produto, Long> getRepository() {
        return produtoRepository;
    }

    @Override
    public List<Produto> findByCategoriaId(Long id) {
        return produtoRepository.findByCategoriaId(id);
    }
}