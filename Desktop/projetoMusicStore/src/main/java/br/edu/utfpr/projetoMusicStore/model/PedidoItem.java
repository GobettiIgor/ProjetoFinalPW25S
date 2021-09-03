package br.edu.utfpr.projetoMusicStore.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "pedidoItem")
@Data
@EqualsAndHashCode(of = "id")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PedidoItem implements Serializable {

    @EmbeddedId
    private PedidoItemPK id;

    @Column
    private Integer quantidade;

    @Column
    private Double valor;

}
