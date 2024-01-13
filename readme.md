# ANGULAR

### FRAMEWORK
* Es un marco de trabajo estandarizado
* Es modular
* Es mantenida por google

### PILARES FUNDAMENTALES
+ Componentes (html+ts)
+ Servicios (estados globales)
+ Directivas (de componentes, estructurales y de atributos)
+ Rutas (url del cliente)
+ Módulos (para agrupar)P

### APLICACION DE ANGULAR
Desde la version 17, los proyectos trabajan sin módulos, por lo que es necesario crear la app con:
> ng new devtalles --standalone false
Para levantar la app:
> ng serve -o

### ARCHIVOS DE LA APP
* **.editorconfig** para las configuraciones del vsc (identacion, orden, etc)
* **.gitignore** para ignorar ciertos archivos/carpetas
* **angular.json** para configurar la app de angular (es raro tocar este archivo)
* **package.json** para configurar la metadata de la app y los modulos de node (entre otras cosas)
* **readme.md** para detallar la app
* **tsconfig.json** para configurar ts

### CARPETAS DE LA APP
* **.angular** ayuda a angular a detectar cambios en la app
* **.vscode** ayuda a configurar vsc
* **node_modules** modulos de node para que la app funcione
* **src** carpeta con los pilares de la app

### APP COMPONENT
Es el componente principal de una app, cuenta con archivos:
* HTML que lee las variables del TS con {{ }}
* CSS encapsulado para los estilos de app
* SPEC para los tests
* TS para definir propiedades y métodos
* MODULE para configurar el módulo del componente

### COMPONENT
Un componente necesita la configuración de:
* Decorador Component() con las propiedades selector y template (hasta 4 lineas)
* Clase con las propiedades y métodos que necesita
* Requerirse en el módulo principal
* Se crea con el snipet a-component o el comando ng g c ruta/nombre

### DIRECTIVA *ngIf
> *ngIf="deleted; else template"

### DIRECTIVA *ngFor
> *ngFor="let name of heroes"

### DIRECTIVA *ngFor
Un modulo necesita la configuración de:
* Decorador ngModule con las propiedades declarations y exports
* Clase con las propiedades y métodos que necesita
* Imports de los modulos que necesita (CommonModule para directivas)
* Requerirse en el módulo principal
* Se crea con el snipet a-module