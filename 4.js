function trafficLightSimulation() {
    // Duración de cada estado del semáforo en milisegundos
    const greenDuration = 5000; // 5 segundos
    const yellowDuration = 2000; // 2 segundos
    const redDuration = 7000; // 7 segundos

    // Función para mostrar la señal del semáforo
    function showSignal(color) {
        console.clear();
        switch (color) {
            case 'green':
                console.log(" Verde - Avanzar");
                break;
            case 'yellow':
                console.log(" Amarillo - Precaución");
                break;
            case 'red':
                console.log(" Rojo - Detenerse");
                break;
            default:
                console.log("Estado desconocido");
        }
    }

    // Función para simular el ciclo del semáforo
    function runTrafficLight() {
        // Mostrar luz verde
        showSignal('green');
        setTimeout(() => {
            // Mostrar luz amarilla
            showSignal('yellow');
            setTimeout(() => {
                // Mostrar luz roja
                showSignal('red');
                setTimeout(runTrafficLight, redDuration);
            }, yellowDuration);
        }, greenDuration);
    }

    // Iniciar el ciclo del semáforo
    runTrafficLight();
}

// Llamada a la función principal para ejecutar el programa
trafficLightSimulation();
