function trainTicketPurchase() {
    // Definir tarifas base según el origen y destino
    const fares = {
        "CiudadA-CiudadB": 50,
        "CiudadB-CiudadC": 60,
        "CiudadA-CiudadC": 80
    };

    // Solicitar información del viaje al usuario
    let origin = prompt("Ingrese el origen del viaje:");
    let destination = prompt("Ingrese el destino del viaje:");
    let date = prompt("Ingrese la fecha del viaje (YYYY-MM-DD):");
    let time = prompt("Ingrese la hora del viaje (HH:MM):");
    let ticketType = prompt("Ingrese el tipo de tiquete (ida, ida y vuelta):").toLowerCase();

    // Solicitar datos del pasajero
    let passengerName = prompt("Ingrese el nombre del pasajero:");
    let passengerID = prompt("Ingrese la identificación del pasajero:");
    let passengerEmail = prompt("Ingrese el correo electrónico del pasajero:");

    // Validar la información ingresada
    if (!origin || !destination || !date || !time || !ticketType || !passengerName || !passengerID || !passengerEmail) {
        console.log("Todos los campos son obligatorios. Por favor, intente nuevamente.");
        return;
    }

    // Construir la clave para buscar la tarifa en la tabla
    let routeKey = `${origin}-${destination}`;
    let baseFare = fares[routeKey];

    // Validar si la ruta existe
    if (!baseFare) {
        console.log("La ruta ingresada no existe. Por favor, intente nuevamente.");
        return;
    }

    // Calcular el costo del tiquete
    let ticketCost = baseFare;
    if (ticketType === "ida y vuelta") {
        ticketCost *= 1.8; // Se aplica un descuento del 10% para ida y vuelta
    }

    // Mostrar resumen del viaje y costo del tiquete
    console.log("Resumen de su viaje:");
    console.log(`Origen: ${origin}`);
    console.log(`Destino: ${destination}`);
    console.log(`Fecha: ${date}`);
    console.log(`Hora: ${time}`);
    console.log(`Tipo de tiquete: ${ticketType}`);
    console.log(`Costo del tiquete: $${ticketCost.toFixed(2)}`);

    // Confirmación de la compra
    let confirmPurchase = prompt("¿Desea confirmar la compra? (sí/no):").toLowerCase();
    if (confirmPurchase === "sí" || confirmPurchase === "si") {
        console.log("Transacción exitosa. ¡Gracias por su compra!");
        // Se podría agregar aquí código adicional para procesar el pago, enviar un correo electrónico de confirmación, etc.
    } else {
        console.log("Compra cancelada.");
    }
}

// Llamada a la función principal para ejecutar el programa
trainTicketPurchase();
