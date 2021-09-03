package br.edu.utfpr.projetoMusicStore.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Table(name = "compra")
@Data
@EqualsAndHashCode(of = "id")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Compra{

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(nullable = false)
        private LocalDate dt_compra;

        @ManyToOne
        @JoinColumn(name = "usuario_id", referencedColumnName = "id")
        private Usuario usuario;

        @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "id.compra")
        private List<PedidoItem> itensPedido;

        @Column(length = 255)
        private String observacao;

        public double getTotal(){ // ver do valor do frete;
                return itensPedido.stream()
                        .map(p -> p.getValor() * p.getQuantidade())
                        .collect(Collectors.summingDouble(Double::doubleValue));
        }
}
