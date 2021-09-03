package br.edu.utfpr.projetoMusicStore.repository;

import br.edu.utfpr.projetoMusicStore.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    List<Produto> findByCategoriaId(Long id);
}