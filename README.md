# README Entrega semana 6

## Grupo 12
- Leonardo Barrios 
- Juan David Calderon 
- Sneyder Amado 
- Luis Alberto Cortes

## URL repositorio github
https://github.com/JuanDaCalderon/GhostE2E-semana6


## Funcionalidades cubiertas
- Inicio de sesion.
- Post.
- Tags.
- Pages.
- Staff
- General settings

## Escenarios de pruebas ajustados. Aplican para Kraken y Cypress

1. Inicia sesion, crear un post y lo publica y valida que se adiciona a lista de post publicados.
2. Inicia sesion, crear un post programado (scheduled) y valida que se adiciona a lista de post scheduled.
3. Inicia sesion, crear un borrador de post y valida que se adiciona a lista de post scheduled.
4. Inicia sesion, crear un post y lo publica, lo selecciona de lista de post, le modifica title y el texto secuandario y valida que este en la lista con los valores actualizados.
5. Inicia sesion, crear un post y lo publica, lo selecciona de lista de post, lo elimina y valida que ya no este en el listado.

6. Crear page, Crea una página y la publica despues se valida que haya sido creada correctamente.
7. Crear page programada, Crea una página y la programa, despues se valida que esta programada.
8. Eliminar pagina, Se crea una página, se valida que se creo y despues se elimina, para por ultimo validar que se elimino.
9. Editar page, Se crea una página y despues se edita la descripción de la misma.
10. Filtrar pages, Se crean tres páginas; Publicada, Agendada, y en borrador, despues se filtrar por borradores y se valida que este filtrada.

11. Iniciar sesión, crear tag y validar la correcta creación de este tag.
12. Iniciar sesión, crear tag, validar la correcta creación, entrar al tag, editar el tag, guardar los cambios y validar la correcta ejecución del escenario.
13. Iniciar sesión, crear tag, validar la correcta creación, entrar al tag, eliminar el tag y validar la correcta ejecución del escenario.
14. Iniciar sesión, crear tag, validar la correcta creación, crear un post, entrar al post, asociar el tag y validar la correcta ejecución del escenario.
15. Iniciar sesión, crear tag, validar la correcta creación, dar clic en la pestaña de internal tags y validar la correcta ejecución del escenario.

16. inicia sesion, se va a la seccion de staff click en el boton "invite people" y se hace invitacion al usuario
17. inicia sesion, se va a la seccion de staff click en el usuario y se edita la informacion del usuario
18. inicia sesion, se va a la seccion de staff, se invita al usuario, se recarga la pagina y se da clik en el boton "Revoke" del usuario invitado
19. inicia sesion, se va a la seccion de Setings en General , se da click en el boton "Expand" y se edita la informacion general de Titulo y descripcion
20. inicia sesion, se va a la seccion de Setings en General , si da click en le boton de hacer publica o privada la pagina

# Escenarios de prueba para comparacion

A continuacion los 10 esceanrios elegidos para la comparacion, entre parentesis el numero correspondiente a la lista anterior.
1. Crear page, Crea una página y la publica despues se valida que haya sido creada correctamente.(6)
2. Inicia sesion, crear un borrador de post y valida que se adiciona a lista de post scheduled.(3)
3. Inicia sesion, crear un post y lo publica y valida que se adiciona a lista de post publicados. (1) 
4. Iniciar sesión, crear tag, validar la correcta creación, entrar al tag, editar el tag, guardar los cambios y validar la correcta ejecución del escenario. (12)
5. Eliminar pagina, Se crea una página, se valida que se creo y despues se elimina, para por ultimo validar que se elimino.(8)
6. Inicia sesion, crear un post y lo publica, lo selecciona de lista de post, lo elimina y valida que ya no este en el listado.(5)
7. Iniciar sesión, crear tag, validar la correcta creación, entrar al tag, eliminar el tag y validar la correcta ejecución del escenario.(13)
8. Inicia sesion, se va a la seccion de staff click en el boton "invite people" y se hace invitacion al usuario. (16)
9. Inicia sesion, se va a la seccion de Setings en General , si da click en le boton de hacer publica o privada la pagina (20)
10. Iniciar sesión, crear tag, validar la correcta creación, dar clic en la pestaña de internal tags y validar la correcta ejecución del escenario.(15)


# Instrucciones para ejecutar tests - Kraken

## Dependencias globales
* Tener instalado Cypress V12.9.0. Remitirse al tutorial del curso. https://thesoftwaredesignlab.github.io/AutTestingCodelabs/cypress-tutorial/index.html#0
* Tener instalado Kraken. Remitir al tutorial del curso. https://thesoftwaredesignlab.github.io/AutTestingCodelabs/kraken-web-testing-tool/index.html#0
* Tener instalado Ghost. Remitirse al tutorial del curso. https://thesoftwaredesignlab.github.io/AutTestingCodelabs/ghost-local-deployment/index.html#0
  En la semana 5 se utilizo la version 3.41.1 de Ghost, en caso de utilizar docker, se puede utilizar la imagen ejecutando el siguiente comando `docker pull ghost:3.41.1`
  Para esta semana se utilizo la version 4.44 de Ghost, en caso de utilizar docker, se puede utilizar la imagen ejecutando el siguiente comando `docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.44.0 ghost:4.44.0` 
* Node V14.21.3.
* Tener instalado ResembleJS. Remitirse al tutorial del curso. https://www.coursera.org/learn/pruebas-automatizadas-software/supplement/qTkSe/pruebas-de-regresion-visual-con-resemble-js

# Ejecución de las pruebas
## Kraken
Desde la carpeta raiz del proyecto, `kraken_ghost`  :
* Ejecutar el comando `npm install` para instalar las dependencias. 
* En caso no instalarse, las dependencias son: 
 - Faker V7.6.0. Ejecutar en la terminal el comando `npm install @faker-js/faker --save-dev`
 - Chai V4.3.7. Ejecutar en la terminal el comando `npm install chai`
* Desde la raiz del proyecto, en el archivo `properties.json` configurar los valores para Usuario1 y Password1
* En la carpeta `features\Escenarios_completos` se encuentran 2 carpetas. La 3.41.1 incluye los archivos .feature correspondiente a los escenarios modificados de la semana anterior. La 4.44 incluye los archivos .feature correspondientes a los escenarios ajustados en esta version de Ghost 
* Para su ejecucion, de las carpetas mencionadas anteriormente mover el escenario deseado a la carpeta `.\features\`. Debe ser el unico en esta ubicacion.
* Desde la raiz del proyecto Kraken ejecutar el comando `./node_modules/kraken-node/bin/kraken-node run`

## Cypress
Desde la carpeta raiz del proyecto, `cypress_ghost`  :
* Ejecutar el comando `npm install` para instalar las dependencias
* En caso no instalarse, las dependencias son: 
 - Faker V7.6.0. Ejecutar en la terminal el comando `npm install @faker-js/faker --save-dev`
 - Chai V4.3.7. Ejecutar en la terminal el comando `npm install chai`
* Desde la carpeta raiz del proyecto de cypresss, en el archivo `.\cypress-ghost\config\config.json` configurar host, user y password
* Ejecutar el comando `cypress open` para abrir la consola de la aplicacion
* En la consola Adicionar el proyecto. Buscar la carpeta cypress-ghost descargada del repositorio github
  <img width="938" alt="agregar proyecto" src="https://user-images.githubusercontent.com/124101392/236691524-aa3a4466-a381-4126-992b-d9f663863a85.png">
* Ya se ve debe ver el proyecto, seleccionar cypress-ghost
![image](https://user-images.githubusercontent.com/124101392/236691843-b257f1a5-0f5e-47bd-8e2f-9781e49cf96a.png)
* Seleccionar E2E testing
![image](https://user-images.githubusercontent.com/124101392/236691572-a8561b8a-e8e2-4aa6-b7ec-25a44f11a4de.png)
* Seleccionar el navegador Chrome y hacer click en el boton Start E2E Testing in Chrome
![image](https://user-images.githubusercontent.com/124101392/236691553-aa01b58c-2099-47f2-8fbb-3ae422889d55.png)
* En la ventana se mostraran los archivos agrupados por la version de Ghost correspondiente.
![image](https://github.com/JuanDaCalderon/GhostE2E-semana6/assets/124101392/4c311e34-8abe-476d-90f4-f69c268041d9)
* Elegir el que se desee ejecutar
![image](https://github.com/JuanDaCalderon/GhostE2E-semana6/assets/124101392/acac23e1-03aa-4d4e-aabd-4e73b4b9264a)

## ResembleJs
Para ejecutar ResembleJS, teniendolo previamente instalado, en la carpeta `VRT-resemble` ejecutar el comando `node index.js`

## Reporte HTML Comparacion visual

Desde la raiz del proyecto, en el archivo `VRT-resemble\index.js` se encuentran la configuracion de los escenarios a los cuales se les realizara al prueba.

En la carpeta `VRT-resemble\results` se encuentran los resultados para cada escenario donde se incluye el archivo `report.html` que muestra la imagen de la version 3.41.1 etiquetada como REFERENCE, la de la version 4.44 se etiqueta como Test y el resultante de la comparacion como DIFF
<img width="908" alt="image" src="https://github.com/JuanDaCalderon/GhostE2E-semana6/assets/124101392/a643ba46-793f-499e-8f56-e013628a8ed6">
<img width="880" alt="image" src="https://github.com/JuanDaCalderon/GhostE2E-semana6/assets/124101392/db63c958-c93c-4e51-a4f9-427f9d7ed095">

## Reporte incidencias
El registro de las diferencias visuales se encuentran en el siguinte link del repositorio:
https://github.com/JuanDaCalderon/GhostE2E-semana6/issues

# Pros y contras de las dos herramientas utilizadas para pruebas de regresion visual

| Herramienta  | Pros | Contra |
| ------------- |-------------|------|
| Resemble JS   |Fácil integración, se puede integrar fácilmente en un flujo de trabajo de pruebas existentes, y es compatible con diferentes frameworks de automatización de pruebas como Cypress |Sensibilidad a cambios insignificantes, si no se configura correctamnete, Resemble.js puede detectar cambios menores en las imágenes que no tienen un impacto visual significativo, lo que puede generar falsas alarmas |
|              | Comparación visual precisa, Resemble.js utiliza algoritmos sofisticados para realizar comparaciones visuales precisas y detectar incluso los cambios más sutiles en los elementos visuales de una página web. | Configuración, Resemble.js, permite establecer la configuración de multiples parametros para que funcione de manera adecuada
||Personalización de la tolerancia, ResemebleJS permite ajustar la tolerancia de similitud en las comparaciones visuales según las necesidades, lo que permite establecer un umbral específico para determinar el éxito de las pruebas|
||Soporte multiplataforma, Resemble.js es compatible con diferentes sistemas operativos y navegadores web, lo que permite ejecutar pruebas de regresión visual en una amplia gama de entornos |Rendimiento, La comparación visual de imágenes puede ser intensiva en recursos, lo que puede afectar el rendimiento general de tus pruebas automatizadas.
| Backstop JS  | Configuración sencilla, Backstop.js permite hacer configuración fácil. | Curva de aprendizaje inicial, requirio tiempo para familiarizarnos con las opciones y características de Backstop.js |
||Captura automática de imágenes de referencia, Backstop.js permite capturar automáticamente imágenes de referencia y utilizarlas como puntos de comparación en las pruebas de regresión visual| Mantenimiento de las imágenes de referencia, actualizar y mantener las imágenes de referencia utilizadas en Backstop.js puede ser un esfuerzo adicional a si hay cambios significativos en la aplicacion|
|| Integración con herramientas de automatización, Backstop.js se puede integrar fácilmente con herramientas de automatización de pruebas como Selenium, Puppeteer y otras, lo que permite combinar pruebas de regresión visual con tus flujos de trabajo existentes |
||Flexibilidad en las pruebas, Backstop.js ofrece la posibilidad de personalizar reglas y configuraciones para adaptarse a las necesidades específicas de prueba visual|

# Link video
https://youtu.be/4tv6gVpPZfU
