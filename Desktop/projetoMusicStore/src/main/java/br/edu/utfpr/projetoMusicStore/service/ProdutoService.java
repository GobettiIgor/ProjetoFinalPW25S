package br.edu.utfpr.projetoMusicStore.service;

import br.edu.utfpr.projetoMusicStore.model.Produto;

import java.util.List;

public interface ProdutoService extends CrudService<Produto, Long>{
    List<Produto> findByCategoriaId(Long id);
}
