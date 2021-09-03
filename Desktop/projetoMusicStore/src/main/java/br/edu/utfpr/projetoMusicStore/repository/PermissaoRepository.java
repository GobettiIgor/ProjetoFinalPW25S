package br.edu.utfpr.projetoMusicStore.repository;

import br.edu.utfpr.projetoMusicStore.model.Permissao;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PermissaoRepository extends JpaRepository<Permissao, Long> {
}