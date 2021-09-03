package br.edu.utfpr.projetoMusicStore.repository;

import br.edu.utfpr.projetoMusicStore.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByUsername(String username);
}
