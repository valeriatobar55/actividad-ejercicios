function labReservationSystem() {
    // Datos simulados de reservas existentes
    const reservations = [];

    while (true) {
        // Solicitar información de la reserva
        let date = prompt("Ingrese la fecha de la reserva (YYYY-MM-DD):");
        let startTime = parseInt(prompt("Ingrese la hora de inicio de la reserva (0-24):"));
        let duration = parseInt(prompt("Ingrese la duración de la reserva en horas:"));
        let endTime = startTime + duration;
        let userName = prompt("Ingrese el nombre del usuario o grupo que realiza la reserva:");

        // Validar la hora de la reserva (simular con horario de 8 a 20)
        if (startTime < 8 || endTime > 20) {
            console.log("No es posible realizar la reserva. El horario permitido es de 8:00 a 20:00.");
            continue;
        }

        // Verificar la disponibilidad del salón en la fecha y hora solicitada
        let isAvailable = true;
        for (let reservation of reservations) {
            if (reservation.date === date && 
                ((startTime >= reservation.startTime && startTime < reservation.endTime) || 
                (endTime > reservation.startTime && endTime <= reservation.endTime) ||
                (startTime <= reservation.startTime && endTime >= reservation.endTime))) {
                isAvailable = false;
                break;
            }
        }

        if (!isAvailable) {
            console.log("No es posible realizar la reserva. El salón 305 ya está reservado para la fecha y hora seleccionadas.");
            continue;
        }

        // Registrar la reserva
        reservations.push({ date, startTime, endTime, userName });

        // Mostrar mensaje de confirmación
        console.log(`Reserva confirmada para el ${date} de ${startTime}:00 a ${endTime}:00. Reservado por: ${userName}.`);

        // Menú para salir del programa o hacer una nueva reserva
        let exit = prompt("Presione 's' para salir del programa o cualquier otra tecla para realizar una nueva reserva:").toLowerCase();
        if (exit === "s") {
            break;
        }
    }

    console.log("Gracias por utilizar el sistema de reservas del salón 305.");
}

// Llamada a la función principal para ejecutar el programa
labReservationSystem();
