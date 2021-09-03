package br.edu.utfpr.projetoMusicStore.repository;

import br.edu.utfpr.projetoMusicStore.model.PedidoItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoItemRepository extends JpaRepository<PedidoItem, Long> {

}
