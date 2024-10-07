package co.edu.uniquindio.proyecto.controladores;

import co.edu.uniquindio.proyecto.modelo.dto.autenticacion.MensajeDTO;
import co.edu.uniquindio.proyecto.modelo.dto.evento.CrearEventoDTO;
import co.edu.uniquindio.proyecto.modelo.dto.evento.EditarEventoDTO;
import co.edu.uniquindio.proyecto.servicios.interfaces.EventoServicio;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin")
public class AdmistradorControlador {

    private final EventoServicio eventoServicio;

    @PostMapping("/crear-evento")
    public ResponseEntity<MensajeDTO<String>> crearEvento(@Valid @RequestBody CrearEventoDTO evento) throws Exception{
        eventoServicio.crearEvento(evento);
        return ResponseEntity.ok(new MensajeDTO<>(false, "Evento creado exitosamente"));
    }

    @PutMapping("/editar-evento")
    public ResponseEntity<MensajeDTO<String>> editarEvento(@Valid @RequestBody EditarEventoDTO evento) throws Exception{
        eventoServicio.editarEvento(evento);
        return ResponseEntity.ok(new MensajeDTO<>(false, "Evento editado exitosamente"));
    }

    @DeleteMapping("/eliminar-evento/{id}")
    public ResponseEntity<MensajeDTO<String>> eliminarEvento(@PathVariable String id) throws Exception{
        eventoServicio.eliminarEvento(id);
        return ResponseEntity.ok(new MensajeDTO<>(false, "Evento eliminado exitosamente"));
    }


}
