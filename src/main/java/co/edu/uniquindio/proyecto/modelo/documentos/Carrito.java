package co.edu.uniquindio.proyecto.modelo.documentos;

import co.edu.uniquindio.proyecto.modelo.vo.DetalleCarrito;
import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Document("carritos")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Carrito {

    private LocalDateTime fecha;
    private List<DetalleCarrito> items;
    @Id
    private String idCarrito;
    private ObjectId idUsuario;

    @Builder
    public Carrito(String idCarrito, String nombre, double v) {

    }
}
