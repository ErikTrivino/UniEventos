
db = connect( 'mongodb://localhost:27017/proyecto' );
// Datos de Carrito


// Datos de Cupon
db.cupon.insertMany([
    {
        _id: ObjectId("652c95c6f0b56723d4638921"),
        descuento: 20.0,
        fechaVencimiento: ISODate("2024-12-31T23:59:00Z"),
        codigo: "CUPON2024",
        estado: "ACTIVO",
        tipo: "UNICO",
        nombre: "Descuento del 20%",
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Cupon'
    },
    {
        _id: ObjectId("652c95c6f0b56723d4638922"),
        descuento: 15.0,
        fechaVencimiento: ISODate("2024-11-30T23:59:00Z"),
        codigo: "CUPON2023",
        estado: "ACTIVO",
        tipo: "MULTIPLE",
        nombre: "Descuento del 15%",
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Cupon'

    },
    {
        _id: ObjectId("652c95c6f0b56723d4638923"),
        descuento: 10.0,
        fechaVencimiento: ISODate("2024-10-31T23:59:00Z"),
        codigo: "CUPON2022",
        estado: "EXPIRADO",
        tipo: "UNICO",
        nombre: "Descuento del 10%",
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Cupon'
    },
    {
        _id: ObjectId("652c95c6f0b56723d4638924"),
        descuento: 5.0,
        fechaVencimiento: ISODate("2024-09-30T23:59:00Z"),
        codigo: "CUPON2021",
        estado: "ACTIVO",
        tipo: "MULTIPLE",
        nombre: "Descuento del 5%",
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Cupon'
    },
    {
        _id: ObjectId("652c95c6f0b56723d4638925"),
        descuento: 25.0,
        fechaVencimiento: ISODate("2024-08-31T23:59:00Z"),
        codigo: "CUPON2020",
        estado: "REDIMIDO",
        tipo: "UNICO",
        nombre: "Descuento del 25%",
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Cupon'
    },

]);




// Datos de Orden
db.orden.insertMany([
    {
        _id: ObjectId("6701fcf0bdb88d4aa14f6547"),
        idCliente: ObjectId("652c95c6f0b56723d4638910"),
        fecha: ISODate("2024-01-01T15:30:00Z"),
        codigoPasarela: "CODIGO_PASARELA_123",
        items:  [
            {
                "id": "item001",
                "idEvento": "evento001",
                "precio": 20000.0,
                "nombreLocalidad": "VIP",
                "cantidad": 2
            },
            {
                "id": "item002",
                "idEvento": "evento002",
                "precio": 15000.0,
                "nombreLocalidad": "General",
                "cantidad": 1
            }
        ],
        pago: {
            moneda: "USD",
            tipoPago: "CREDIT_CARD",
            detalleEstado: "Pago exitoso",
            codigoAutorizacion: "AUTH123",
            fecha: ISODate("2024-01-01T15:35:00Z"),
            id: ObjectId(),
            valorTransaccion: 350.0,
            estado: "COMPLETADO"
        },
        total: 350.0,
        idCupon: ObjectId("652c95c6f0b56723d4638921")
        ,
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Orden'
    },
    {
        _id: ObjectId("6701fd0d44bf8e22611ddeaa"),
        idCliente: ObjectId("652c95c6f0b56723d4638911"),
        fecha: ISODate("2024-02-15T10:45:00Z"),
        codigoPasarela: "CODIGO_PASARELA_456",
        items:  [
            {
                "id": "item001",
                "idEvento": "evento001",
                "precio": 20000.0,
                "nombreLocalidad": "VIP",
                "cantidad": 2
            },
            {
                "id": "item002",
                "idEvento": "evento002",
                "precio": 15000.0,
                "nombreLocalidad": "General",
                "cantidad": 1
            }
        ],
        pago: {
            moneda: "COP",
            tipoPago: "DEBIT_CARD",
            detalleEstado: "Pago pendiente",
            codigoAutorizacion: "AUTH456",
            fecha: ISODate("2024-02-15T10:50:00Z"),
            id: ObjectId(),
            valorTransaccion: 550.0,
            estado: "PENDIENTE"
        },
        total: 550.0,
        idCupon: ObjectId("652c95c6f0b56723d4638922"),
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Orden'
    },
    {
        _id: ObjectId("6701fd148a8526257d0ed1f5"),
        idCliente: ObjectId("652c95c6f0b56723d4638912"),
        fecha: ISODate("2024-03-20T18:00:00Z"),
        codigoPasarela: "CODIGO_PASARELA_789",
        items:  [
            {
                "id": "item001",
                "idEvento": "evento001",
                "precio": 20000.0,
                "nombreLocalidad": "VIP",
                "cantidad": 2
            },
            {
                "id": "item002",
                "idEvento": "evento002",
                "precio": 15000.0,
                "nombreLocalidad": "General",
                "cantidad": 1
            }
        ],
        pago: {
            moneda: "USD",
            tipoPago: "PAYPAL",
            detalleEstado: "Pago rechazado",
            codigoAutorizacion: "AUTH789",
            fecha: ISODate("2024-03-20T18:05:00Z"),
            id: ObjectId(),
            valorTransaccion: 600.0,
            estado: "RECHAZADO"
        },
        total: 600.0,
        idCupon: ObjectId("652c95c6f0b56723d4638923"),
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Orden'
    },
    {
        _id: ObjectId("6701fd1b9b809cfdda0a5c4f"),
        idCliente: ObjectId("652c95c6f0b56723d4638913"),
        fecha: ISODate("2024-04-05T12:00:00Z"),
        codigoPasarela: "CODIGO_PASARELA_101",
        items:  [
            {
                "id": "item001",
                "idEvento": "evento001",
                "precio": 20000.0,
                "nombreLocalidad": "VIP",
                "cantidad": 2
            },

        ],
        pago: {
            moneda: "EUR",
            tipoPago: "BANK_TRANSFER",
            detalleEstado: "Pago exitoso",
            codigoAutorizacion: "AUTH101",
            fecha: ISODate("2024-04-05T12:05:00Z"),
            id: ObjectId(),
            valorTransaccion: 100.0,
            estado: "COMPLETADO"
        },
        total: 100.0,
        idCupon: ObjectId("652c95c6f0b56723d4638924"),
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Orden'
    },
    {
        _id: ObjectId("6701fd25aba7f616b42cbfb1"),
        idCliente: ObjectId("652c95c6f0b56723d4638914"),
        fecha: ISODate("2024-05-10T08:00:00Z"),
        codigoPasarela: "CODIGO_PASARELA_202",
        items:  [
            {
                "id": "item001",
                "idEvento": "evento001",
                "precio": 20000.0,
                "nombreLocalidad": "VIP",
                "cantidad": 2
            },
            {
                "id": "item002",
                "idEvento": "evento002",
                "precio": 15000.0,
                "nombreLocalidad": "General",
                "cantidad": 1
            }
        ],
        pago: {
            moneda: "COP",
            tipoPago: "CASH",
            detalleEstado: "Pago exitoso",
            codigoAutorizacion: "AUTH202",
            fecha: ISODate("2024-05-10T08:05:00Z"),
            id: ObjectId(),
            valorTransaccion: 540.0,
            estado: "COMPLETADO"
        },
        total: 540.0,
        idCupon: ObjectId("652c95c6f0b56723d4638925"),
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Orden'
    }
]);

// Datos de Cuenta
db.cuenta.insertMany([
    {
        "_id": ObjectId("6701ec61eb812956e91267d7") ,
        "email": "usuario1@example.com",
        "password": "password123",
        "rol": "ADMINISTRADOR",
        "fechaRegistro": ISODate("2023-09-10T08:30:00Z"),
        "usuario": {
            "id": "6701ecb5522faa848df6771c",
            "telefono": "123456789",
            "direccion": "Calle 123",
            "cedula": "987654321",
            "nombre": "Juan Perez"
        },
        "estado": "ACTIVO",
        "codigoValidacionRegistro": {
            "codigo": "VAL001",
            "fechaCreacion": ISODate("2023-09-10T08:35:00Z"),
            "fechaExpiracion": ISODate("2023-09-11T08:35:00Z")
        },
        "codigoValidacionPassword": null,
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Cuenta'
    },
    {
        "_id": ObjectId("6701ed1fa81f609e1a5692fb"),
        "email": "usuario2@example.com",
        "password": "password1234",
        "rol": "CLIENTE",
        "fechaRegistro": ISODate("2023-09-11T09:00:00Z"),
        "usuario": {
            "id": "6701ed2718dc56dfc847f9c7",
            "telefono": "987654321",
            "direccion": "Calle 456",
            "cedula": "123456789",
            "nombre": "Ana Gomez"
        },
        "estado": "INACTIVO",
        "codigoValidacionRegistro": {
            "codigo": "VAL002",
            "fechaCreacion": ISODate("2023-09-11T09:05:00Z"),
            "fechaExpiracion": ISODate("2023-09-12T09:05:00Z")
        },
        "codigoValidacionPassword": null,
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Cuenta'
    },
    {
        "_id": ObjectId("6701ed2718dc56dfc847f9c7"),
        "email": "usuario3@example.com",
        "password": "password12345",
        "rol": "ADMINISTRADOR",
        "fechaRegistro": ISODate("2023-09-12T10:00:00Z"),
        "usuario": {
            "id": "6701ed5940fbd4b4320644f1",
            "telefono": "345678901",
            "direccion": "Calle 789",
            "cedula": "876543210",
            "nombre": "Carlos Lopez"
        },
        "estado": "ACTIVO",
        "codigoValidacionRegistro": null,
        "codigoValidacionPassword": null,
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Cuenta'
    },
    {
        "_id": ObjectId("6701edd7e490d979c91ccac0"),
        "email": "usuario4@example.com",
        "password": "password123456",
        "rol": "CLIENTE",
        "fechaRegistro": ISODate("2023-09-13T11:30:00Z"),
        "usuario": {
            "id": "6701ede133cf27e08dd1e854",
            "telefono": "567890123",
            "direccion": "Calle 321",
            "cedula": "543216789",
            "nombre": "Marta Silva"
        },
        "estado": "ACTIVO",
        "codigoValidacionRegistro": null,
        "codigoValidacionPassword": {
            "codigo": "VAL003",
            "fechaCreacion": ISODate("2023-09-13T11:35:00Z"),
            "fechaExpiracion": ISODate("2023-09-14T11:35:00Z")
        },
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Cuenta'
    },
    {
        "_id": ObjectId("6701ee143c2efcda35bec4e6"),
        "email": "usuario5@example.com",
        "password": "password654321",
        "rol": "CLIENTE",
        "fechaRegistro": ISODate("2023-09-14T12:00:00Z"),
        "usuario": {
            "id": "6701ee143c2efcda35bec4e6",
            "telefono": "789012345",
            "direccion": "Calle 654",
            "cedula": "654321987",
            "nombre": "Laura Rodriguez"
        },
        "estado": "INACTIVO",
        "codigoValidacionRegistro": null,
        "codigoValidacionPassword": null,
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Cuenta'
    }
]);


// Datos de Evento
db.evento.insertMany([
    {
        "_id": ObjectId("6701eea02f877bfc0e9397cf"),
        "imagenPortada": "portada_evento1.jpg",
        "estado": "ACTIVO",
        "nombre": "Concierto Banda XYZ",
        "descripcion": "Un concierto inolvidable con Banda XYZ",
        "imagenLocalidades": "localidades_evento1.jpg",
        "tipo": "CONCIERTO",
        "fechaEvento": ISODate("2023-11-15T19:00:00Z"),
        "ciudad": "Bogotá",
        "localidades": [
            { "nombre": "General", "precio": 50000, "capacidadMaxima": 100 },
            { "nombre": "VIP", "precio": 100000, "capacidadMaxima": 50 }
        ],
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Evento'
    },
    {
        "_id": ObjectId("6701eea60f15f5a0bd60922f"),
        "imagenPortada": "portada_evento2.jpg",
        "estado": "ACTIVO",
        "nombre": "Festival de Jazz",
        "descripcion": "Disfruta del mejor jazz en vivo",
        "imagenLocalidades": "localidades_evento2.jpg",
        "tipo": "CULTURAL",
        "fechaEvento": ISODate("2023-12-20T18:00:00Z"),
        "ciudad": "Medellín",
        "localidades": [
            { "nombre": "General", "precio": 40000, "capacidadMaxima": 150, "entradasVendidas": 0 },
            { "nombre": "VIP", "precio": 80000, "capacidadMaxima": 60, "entradasVendidas": 0 }
        ],
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Evento'
    },
    {
        "_id": ObjectId("6701eeb14d32c9a9e276392f"),
        "imagenPortada": "portada_evento3.jpg",
        "estado": "INACTIVO",
        "nombre": "Teatro Clásico",
        "descripcion": "Una obra clásica que te emocionará",
        "imagenLocalidades": "localidades_evento3.jpg",
        "tipo": "CULTURAL",
        "fechaEvento": ISODate("2023-10-05T17:00:00Z"),
        "ciudad": "Cali",
        "localidades": [
            { "nombre": "Platea", "precio": 60000, "capacidadMaxima": 80, "entradasVendidas": 20 },
            { "nombre": "Balcón", "precio": 40000, "capacidadMaxima": 50, "entradasVendidas": 8 }
        ]
    },
    {
        "_id": ObjectId("6701eeb9fbc0310ac379122a"),
        "imagenPortada": "portada_evento4.jpg",
        "estado": "ACTIVO",
        "nombre": "Feria de Ciencia",
        "descripcion": "Exposición de los mejores proyectos científicos",
        "imagenLocalidades": "localidades_evento4.jpg",
        "tipo": "CULTURAL",
        "fechaEvento": ISODate("2023-11-30T09:00:00Z"),
        "ciudad": "Barranquilla",
        "localidades": [
            { "nombre": "General", "precio": 20000, "capacidadMaxima": 300, "entradasVendidas": 0 },
            { "nombre": "Estudiantes", "precio": 10000, "capacidadMaxima": 200, "entradasVendidas": 0 }
        ],
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Evento'
    },
    {
        "_id": ObjectId("6701eec35da1f43a2940c085"),
        "imagenPortada": "portada_evento5.jpg",
        "estado": "INACTIVO",
        "nombre": "Exposición de Arte",
        "descripcion": "Una colección impresionante de arte moderno",
        "imagenLocalidades": "localidades_evento5.jpg",
        "tipo": "CULTURAL",
        "fechaEvento": ISODate("2024-01-10T10:00:00Z"),
        "ciudad": "Cartagena",
        "localidades": [
            { "nombre": "General", "precio": 70000, "capacidadMaxima": 120, "entradasVendidas": 0 },
            { "nombre": "VIP", "precio": 150000, "capacidadMaxima": 30, "entradasVendidas": 0 }
        ],
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Evento'
    }
]);



// Datos de Usuario
db.usuario.insertMany([
    {
        "_id": ObjectId("6701ecb5522faa848df6771c"),
        "telefono": "123456789",
        "direccion": "Calle 123",
        "cedula": "987654321",
        "nombre": "Juan Perez",
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Usuario'
    },
    {
        "_id": ObjectId("6701ed2718dc56dfc847f9c7"),
        "telefono": "987654321",
        "direccion": "Calle 456",
        "cedula": "123456789",
        "nombre": "Ana Gomez",
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Usuario'
    },
    {
        "_id": ObjectId("6701ed5940fbd4b4320644f1"),
        "telefono": "345678901",
        "direccion": "Calle 789",
        "cedula": "876543210",
        "nombre": "Carlos Lopez",
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Usuario'
    },
    {
        "_id": ObjectId("6701ede133cf27e08dd1e854"),
        "telefono": "567890123",
        "direccion": "Calle 321",
        "cedula": "543216789",
        "nombre": "Marta Silva",
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Usuario'
    },
    {
        "_id": ObjectId("6701ee143c2efcda35bec4e6"),
        "telefono": "789012345",
        "direccion": "Calle 654",
        "cedula": "654321987",
        "nombre": "Laura Rodriguez",
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Usuario'
    }
]);

db.carrito.insertMany([
    {
        "_id": ObjectId("6701eedf2c4a9b1234567890"),
        "fecha": ISODate("2024-10-05T12:00:00Z"),
        "items": [
            { "idEvento": "6701eea02f877bfc0e9397cf", "cantidad": 2, "nombreLocalidad": "General" },
            { "idEvento": "6701eeb14d32c9a9e276392f", "cantidad": 1, "nombreLocalidad": "Platea" }
        ],

        "idUsuario": "usuario001",
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Carrito'
    },
    {
        "_id": ObjectId("6701eefb2c4a9b1234567891"),
        "fecha": ISODate("2024-10-06T14:30:00Z"),
        "items": [
            { "idEvento": "6701eea60f15f5a0bd60922f", "cantidad": 3, "nombreLocalidad": "VIP" },
            { "idEvento": "6701eeb9fbc0310ac379122a", "cantidad": 1, "nombreLocalidad": "General" }
        ],

        "idUsuario": "usuario002",
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Carrito'
    },
    {
        "_id": ObjectId("6701eefb2c4a9b1234567892"),
        "fecha": ISODate("2024-10-07T10:00:00Z"),
        "items": [
            { "idEvento": "6701eeb14d32c9a9e276392f", "cantidad": 4, "nombreLocalidad": "Balcón" }
        ],

        "idUsuario": "usuario003",
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Carrito'
    },
    {
        "_id": ObjectId("6701eefb2c4a9b1234567893"),
        "fecha": ISODate("2024-10-08T16:45:00Z"),
        "items": [
            { "idEvento": "6701eeb9fbc0310ac379122a", "cantidad": 2, "nombreLocalidad": "Estudiantes" }
        ],

        "idUsuario": "usuario004",
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Carrito'
    },
    {
        "_id": ObjectId("6701eefb2c4a9b1234567894"),
        "fecha": ISODate("2024-10-09T11:15:00Z"),
        "items": [
            { "idEvento": "6701eec35da1f43a2940c085", "cantidad": 1, "nombreLocalidad": "General" },
            { "idEvento": "6701eea02f877bfc0e9397cf", "cantidad": 2, "nombreLocalidad": "VIP" }
        ],

        "idUsuario": "usuario005",
        _class: 'co.edu.uniquindio.proyecto.modelo.documentos.Carrito'
    }
]);

