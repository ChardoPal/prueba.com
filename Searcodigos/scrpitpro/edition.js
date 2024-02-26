// Función para obtener la versión del archivo .conf
function getVersionFromConf() {
    fetch('/Searcodigos/Version.conf') // Lee el archivo configuracion.conf
        .then(response => response.text())
        .then(config => {
            // Busca la línea que contiene la versión
            const lines = config.split('\n');
            const versionLine = lines.find(line => line.startsWith('Version:'));

            if (versionLine) {
                // Obtiene la versión desde la línea y actualiza el elemento del pie de página
                const version = versionLine.split('Version:')[1].trim();
                document.getElementById('version').innerText = version;
            } else {
                console.error('No se encontró la versión en el archivo de configuración.');
            }
        })
        .catch(error => {
            console.error('Error al obtener la versión:', error);
        });
    }

// Llama a la función para obtener y mostrar la versión al cargar la página
getVersionFromConf();