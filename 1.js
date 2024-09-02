function gymSubscription() {
    // Definición de precios por tipo de plan
    const monthlyPrice = 50;
    const quarterlyPrice = 140; // 3 meses
    const annualPrice = 500; // 12 meses

    while (true) {
        // Solicitar la edad del usuario
        let age = prompt("Ingrese su edad:");
        age = parseInt(age);

        // Validar si el usuario es menor de edad
        if (age < 18) {
            console.log("Lo siento, no puede suscribirse al gimnasio si es menor de edad.");
            continue;
        }

        // Solicitar el tipo de plan de suscripción
        let planType = prompt("Ingrese el tipo de plan de suscripción (mensual, trimestral, anual):").toLowerCase();

        // Inicializar variables para el cálculo
        let totalCost = 0;
        let installments = 1;

        // Estructura de decisión para seleccionar el plan
        switch (planType) {
            case "mensual":
                totalCost = monthlyPrice;
                break;
            case "trimestral":
                installments = prompt("Ingrese el número de cuotas (1-3):");
                installments = parseInt(installments);
                totalCost = quarterlyPrice / installments;
                break;
            case "anual":
                installments = prompt("Ingrese el número de cuotas (1-12):");
                installments = parseInt(installments);
                totalCost = annualPrice / installments;
                break;
            default:
                console.log("Tipo de plan no válido. Inténtelo de nuevo.");
                continue;
        }

        // Mostrar resumen al usuario
        console.log("Resumen de su suscripción:");
        console.log("Tipo de plan:", planType);
        console.log("Número de cuotas:", installments);
        console.log("Costo total por cuota:", totalCost.toFixed(2));

        // Menú para salir del programa
        let exit = prompt("Presione 's' para salir del programa o cualquier otra tecla para continuar:").toLowerCase();
        if (exit === "s") {
            break;
        }
    }

    console.log("Gracias por utilizar nuestro servicio.");
}

// Llamada a la función principal para ejecutar el programa
gymSubscription();
