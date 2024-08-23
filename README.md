# ifxNetworks-app

## Descripción

`ifxNetworks-app` es una aplicación web desarrollada en Angular para gestionar entidades y empleados. La aplicación permite la creación, actualización, eliminación y visualización de empleados, así como la gestión de entidades asociadas.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

ifxNetworks-app/
│
├── src/
│   ├── app/
│   │   ├── components/                # Componentes reutilizables
│   │   ├── models/                    # Modelos de datos (DTOs)
│   │   ├── services/                  # Servicios para manejar la lógica de negocio
│   │   ├── guards/                    # Guards para la protección de rutas
│   │   ├── pipes/                     # Pipes personalizados
│   │   ├── app.module.ts              # Módulo principal de la aplicación
│   │   └── app-routing.module.ts      # Configuración de rutas
│   │
│   ├── assets/                         # Recursos estáticos (imágenes, estilos)
│   ├── environments/                   # Archivos de configuración de entorno
│   ├── index.html                     # Archivo HTML principal
│   ├── styles.css                     # Estilos globales
│   └── main.ts                        # Archivo de entrada de la aplicación
│
├── angular.json                        # Configuración de Angular
├── package.json                        # Dependencias y scripts de NPM
└── README.md                           # Este archivo

## Patrones de Diseño Utilizados

La aplicación utiliza varios patrones de diseño para mejorar la estructura y la mantenibilidad del código:

1. **Patrón de Diseño de Componentes**: Cada componente se encarga de una parte de la interfaz de usuario, permitiendo la reutilización y separación de responsabilidades.
  
2. **Inyección de Dependencias**: Utiliza la inyección de dependencias para gestionar servicios y dependencias, facilitando pruebas unitarias y mejorando la modularidad.

3. **Patrón de Diseño de Servicio**: Los servicios manejan la lógica de negocio y las interacciones con la API, manteniendo los componentes ligeros y enfocados en la presentación.

4. **Observador**: Utiliza el patrón observador a través de `Subject` y `BehaviorSubject` de RxJS para manejar el estado y la comunicación entre componentes.

5. **Patrón de Modelo-Vista-Controlador (MVC)**: Aunque Angular utiliza el patrón MVC, los componentes actúan como controladores, gestionando la lógica y la presentación de datos.

## Cómo Ejecutar la Aplicación

Para ejecutar la aplicación, sigue estos pasos:

1. **Instalar Dependencias**:
   Asegúrate de tener [Node.js](https://nodejs.org/) y [Angular CLI](https://angular.io/cli) instalados. Luego, abre una terminal y navega hasta la carpeta del proyecto:

   git clone https://github.com/fabian90/PruebaifxNetworksAngular.git
   cd ifxNetworks
   cd ifxNetworks-app
   npm install