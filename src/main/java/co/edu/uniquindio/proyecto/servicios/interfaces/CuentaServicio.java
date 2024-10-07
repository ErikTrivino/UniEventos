package co.edu.uniquindio.proyecto.servicios.interfaces;

import co.edu.uniquindio.proyecto.modelo.documentos.Cuenta;
import co.edu.uniquindio.proyecto.modelo.dto.autenticacion.TokenDTO;
import co.edu.uniquindio.proyecto.modelo.dto.cuenta.*;

import java.util.List;

public interface CuentaServicio {

    String crearCuenta(CrearCuentaDTO cuenta) throws Exception;

    String editarCuenta(EditarCuentaDTO cuenta) throws Exception;

    String eliminarCuenta(String id) throws Exception;

    InformacionCuentaDTO obtenerInformacionCuenta(String id) throws Exception;

    String enviarCodigoRecuperacionPassword(String correo) throws Exception;

    String cambiarPassword(CambiarPasswordDTO cambiarPasswordDTO ) throws Exception;

    TokenDTO iniciarSesion(LoginDTO loginDTO) throws Exception;

    String activarCuenta(ActivarCuentaDTO activarCuentaDTO) throws Exception;

    List<ItemCuentaDTO> listarCuentas() throws Exception;

    Cuenta obtenerPorEmail(String email) throws Exception;

    String enviarCodigoActivacionCuenta(String correo) throws Exception;
}
