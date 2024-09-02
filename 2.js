function sportsRegistration() {
    // Datos simulados de estudiantes registrados y actividades deportivas
    const students = [
        { code: "12345", career: "Ingeniería" },
        { code: "67890", career: "Medicina" },
        { code: "11223", career: "Derecho" }
    ];

    const sports = {
        "Fútbol": { semester: 1, availableSlots: 5 },
        "Baloncesto": { semester: 2, availableSlots: 3 },
        "Natación": { semester: 3, availableSlots: 2 },
        "Tenis": { semester: 1, availableSlots: 0 }
    };

    while (true) {
        // Solicitar información del estudiante
        let studentCode = prompt("Ingrese su código de estudiante:");
        let career = prompt("Ingrese su carrera:");
        
        // Validar si el estudiante está registrado y pertenece a la carrera
        let student = students.find(s => s.code === studentCode && s.career.toLowerCase() === career.toLowerCase());
        
        if (!student) {
            console.log("El estudiante no está registrado o no pertenece a la carrera indicada.");
            continue;
        }

        // Solicitar la actividad deportiva y el semestre
        let sportActivity = prompt("Ingrese la actividad deportiva deseada (Fútbol, Baloncesto, Natación, Tenis):");
        let semester = parseInt(prompt("Ingrese el semestre:"));

        // Validar si la actividad deportiva existe y si tiene cupos disponibles en el semestre indicado
        let sport = sports[sportActivity];

        if (!sport) {
            console.log("La actividad deportiva ingresada no existe. Inténtelo de nuevo.");
            continue;
        }

        if (sport.semester !== semester) {
            console.log("La actividad deportiva seleccionada no está disponible para el semestre indicado.");
            continue;
        }

        if (sport.availableSlots <= 0) {
            console.log("No hay cupos disponibles para la actividad deportiva seleccionada.");
            continue;
        }

        // Registrar al estudiante en la actividad deportiva
        sport.availableSlots -= 1; // Reducir el número de cupos disponibles

        // Mostrar mensaje de confirmación
        console.log(`Registro exitoso. Estudiante ${studentCode} registrado en ${sportActivity}. Cupos restantes: ${sport.availableSlots}.`);

        // Menú para salir del programa
        let exit = prompt("Presione 's' para salir del programa o cualquier otra tecla para continuar:").toLowerCase();
        if (exit === "s") {
            break;
        }
    }

    console.log("Gracias por utilizar el sistema de registro de créditos deportivos.");
}

// Llamada a la función principal para ejecutar el programa
sportsRegistration();
