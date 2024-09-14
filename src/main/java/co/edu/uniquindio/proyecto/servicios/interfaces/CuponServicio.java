package co.edu.uniquindio.proyecto.servicios.interfaces;

import co.edu.uniquindio.proyecto.modelo.documentos.Cupon;
import co.edu.uniquindio.proyecto.modelo.dto.cuenta.InformacionCuentaDTO;
import co.edu.uniquindio.proyecto.modelo.dto.cupon.CrearCuponDTO;
import co.edu.uniquindio.proyecto.modelo.dto.cupon.EditarCuponDTO;
import co.edu.uniquindio.proyecto.modelo.dto.cupon.InformacionCuponDTO;
import co.edu.uniquindio.proyecto.modelo.enums.TipoCupon;

import java.util.List;
import java.util.Optional;

public interface CuponServicio {


    List<Cupon> listarCuponesPorTipo(TipoCupon tipo) throws Exception;
    Cupon crearCupon(CrearCuponDTO cupon) throws Exception;


    Cupon actualizarCupon(EditarCuponDTO cupon) throws Exception;


    void eliminarCupon(String id) throws Exception;


    InformacionCuponDTO obtenerInformacionCuenta(String id) throws Exception;





    List<Cupon> listarCuponesActivos() throws Exception;


   // List<Cupon> listarCuponesActivosPorEvento(String eventoId);


    boolean redimirCupon(String codigo) throws Exception;


    //long contarCuponesRedimidosPorEvento(String eventoId) throws Exception;


    List<Cupon> listarCuponesPorExpirar() throws Exception;
}
