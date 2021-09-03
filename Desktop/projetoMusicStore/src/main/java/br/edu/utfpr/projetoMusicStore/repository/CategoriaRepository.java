package br.edu.utfpr.projetoMusicStore.repository;

import br.edu.utfpr.projetoMusicStore.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

}
