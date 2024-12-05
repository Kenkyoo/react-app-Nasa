NASA Image of the Day App

Este es un proyecto de una aplicación web construida con React, Next.js, y Vercel que muestra la imagen del día proporcionada por la API de la NASA (APOD - Astronomy Picture of the Day). La aplicación permite ver la imagen del día actual o seleccionar una fecha específica para obtener la imagen asociada a esa fecha.

Características

    Imagen del día de la NASA: Muestra la imagen del día junto con su título, descripción, y autor (si disponible).
    Selección de fecha: Permite al usuario seleccionar una fecha y ver la imagen correspondiente de esa fecha en particular.
    Uso de API de la NASA: La aplicación interactúa con la API pública de la NASA para obtener las imágenes y datos asociados.

Tecnologías Utilizadas

    React: Biblioteca principal para construir la interfaz de usuario.
    Next.js: Framework de React para la construcción de aplicaciones web optimizadas.
    TailwindCSS: Framework de CSS para un diseño rápido y responsivo.
    TypeScript: Superset de JavaScript para una mayor robustez en el código.
    Vercel: Plataforma para despliegue continuo de aplicaciones.

Instalación

    Clona este repositorio:

git clone https://github.com/Kenkyoo/react-app-Nasa.git
cd react-app-Nasa

    Instala las dependencias:

npm install

    Ejecuta el servidor de desarrollo:

npm run dev

La aplicación estará disponible en http://localhost:3000.
Uso

La aplicación se carga con la imagen del día de la NASA. Puedes seleccionar una fecha desde el campo de selección para obtener la imagen correspondiente a esa fecha.
Ejemplo de Uso

    Al cargar la página, la aplicación automáticamente mostrará la imagen del día.
    Utiliza el selector de fecha para elegir una fecha específica, y la imagen para esa fecha se actualizará automáticamente.

API de la NASA

Este proyecto utiliza la API pública de la NASA para obtener la imagen del día y sus detalles. Se hace una solicitud a la siguiente URL:

https://api.nasa.gov/planetary/apod?date={fecha}&api_key={tu_api_key}

Nota: Necesitarás una clave API de la NASA, la cual puedes obtener gratuitamente registrándote en https://api.nasa.gov.

Archivos Importantes

    pages/index.tsx: Contiene la lógica principal de la aplicación, incluyendo la obtención de los datos de la API de la NASA y la visualización de la imagen.
    components/select.tsx: Componente que permite seleccionar la fecha para obtener la imagen correspondiente.
    components/image.tsx: Componente que muestra la imagen y sus detalles (título, descripción, autor, etc.).

Contribuciones

Si deseas contribuir, por favor sigue estos pasos:

    Realiza un fork del proyecto.
    Crea una nueva rama para tu contribución (git checkout -b feature/nueva-funcionalidad).
    Realiza tus cambios y haz un commit (git commit -am 'Agrega nueva funcionalidad').
    Haz push a la rama (git push origin feature/nueva-funcionalidad).
    Abre un pull request.

Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.
