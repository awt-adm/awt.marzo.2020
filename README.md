### Clase 1
# Linea de comandos
- Todos los comandos se escriben con minúscula
- Tabulador: Completa el nombre de archivo/carpeta **Si existe en el directorio actual**
- Flecha arriba/abajo: Historial de comandos

- #### Comandos básicos
  - **.**  -> *Mi nivel*
  - **..** -> *Un nivel arriba*
  - **ls** -> *List*
    - -l -> tipo lista
    - -a -> Archivos invisibles
  - **cd** -> *Cambiar de directorio*
  - **mkdir** -> *Crea un directorio*
    - Nombre de directorio


# Git
GIT es una aplicación que nos ayuda a versionar el software que nos permite llevar un orden en los cambios de nuestro código.

```
Nota: Para cerrar VIM(editor de texto en la terminal)
- Tecla: esc
- Esribir: ** :q! **
```
- Código **Open Source**
  - [Repositorio de Bitcoin](https://github.com/bitcoin/bitcoin)

- #### Comandos básicos GIT
  - git clone [URL]
  - git status
  - git add .
  - git commit -m "Comentario del paquete"
  - git pull
  - git push (la primera vez: -u origin [rama])
  - git log
    - -p

# Markdown [Tutorial](https://www.markdowntutorial.com/)

- #### Titulos
  - # h1
  - ## h2
  - ### h3
  - #### h4
  - ##### h5
  - ###### h6

- #### Decoración
  - **Soy Bold**
  - *Soy Itálica*

- #### Listas
  - Las listas se declaran con guión
    - Y se concatenan con tabuladores
      - O espacios
        - Respectivos a el guión anterior
          - Y puedes continuar
            - Y puedes continuar  
              - Y puedes continuar  
                - Concatenando  
- Imágenes
  - ![Texto alternativo de la imágen](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtfS0tg-pdXXlIULOg4KgHfsiZnn1vmNKeeX07nX0YiPnH7oXu)

- Links
  - [Nombre del link](http://urlsdellink.com)

### Clase 2

# Linea de comandos

- #### Comandos básicos
  - **clear** -> *Limpia pantalla*
  - **mv**  -> *Mover o renombrar*
    - **Mover**
      - mv carpeta ../../
    - **Cambiar nombre**
      - mv carpeta carpeta.old
  - **cp**  -> *Copiar*
    - **Copiar archivo**
      - cp archivo ../../../../
    - **Copiar carpeta**
      - cp -R carpeta ../../
  - **touch**  -> *Crear archivo*
    - touch nuevo_archivo.md
  - **rm** -> *Remover*
    - **Remover archivo**
      - rm archivo
    - **Remover carpeta**
      - rm -r carpeta

- ##### POO 1
  - Fundamentos
    - [OOP / POO](https://codesolt.com/tutoriales/fundamentos/programacion-orientada-objetos/)
    - [OOP / POO](https://msdn.microsoft.com/es-es/library/bb972232.aspx)
    - [ECMAScript 6](https://www.youtube.com/watch?v=OjMZg9gTLgw)  
    - [JS](https://www.youtube.com/watch?v=k9wTpG8NI4Q)  
    - [Material Design](https://material.io/)  

- ### [DOM](https://es.wikipedia.org/wiki/Document_Object_Model)

  - Constantes Globales (*Ya están predeclaradas en el DOM*)
    - window
    - document

    #### JS Eventos
    https://www.w3schools.com/jsref/dom_obj_event.asp


### Clase 3

- #### Sintaxis
 - Variables (No Tipado)
   - Espacio en memoria que contiene cualquier valor, Se antepone el nombre de la variable:
     - var
     - let
     - const
     - final
 - Strings
   - Textos, siempre se escriben entre comillas
     - "Soy un string"     
 - Funciones
   - Son intrucciones que se escriben entre {}
     - Función anonima(Arrow function): () => {"Instruccion"}
     - Función: function nombreFuncion() {"Instruccion"}
     - Igualadas a variables o no anónimas
        - const nombreFuncion = () => {}  

 - Array (Listas o arreglos)
   - Son grupos o listas de objetos, valores, o funciones: Arrays literales se escriben entre '[]', Los arrays asociativos JSON se escriben entre llaves {'descripcion':'valor'}

 - Clases
   - Son Objetos que tienen la capacidad de pasar parametros y cambiar sus propiedades: Se escriben siempre con mayusculas
    - Ej. Programacion reactiva con React o Flutter   

 - Metodos
   - Son Funciones que viven dentro de una clase y van a afectar sus propiedades: Todos los metodos van despues de un punto "." y se escriben "camelCase"
   - Ej. document.getElementById()

 - Operadores lógicos
   - Simbolos que nos permiten generar operaciones matemáticas
     - Multiplicación: 2*2
     - Suma: 2+2
     - resta: 2-2
     - Potencia: 2**2
     - División: 2/2

  - Estructuras de control
    - Estructuras que nos permiten condicionar nuestro código
      - If
      - Switch
      - For
      - ForEach
      - While

  - Herencia


### 4

### 5
- Gestores de paquetes
  - Win: [Chocolately](https://chocolatey.org/)
    - Usar PowerShell como administrador
  - MAC: [Brew](https://brew.sh/)
  - Ubuntu: apt-get

- [SASS](https://sass-lang.com/)
  - Variables comienzan con **'$'**  se igualan  con **':'**
  - ['&'](https://css-tricks.com/the-sass-ampersand/) se refiere a su padre
  - Listas (Arrays)
  - Iteración con **'@each'**

  - Tarea:
    - TODO: Solo SASS
      - Crar un nuevo proyecto
      - onepage
      - header
        - logo
        - meno de cada seccion
      - 4 secciones minimo
        - portada
        - quien somos
        - grid de productos
        - contacto
          - 3 inputs
          - nombre
          - correo
          - Mensaje
          - boton "Enviar"
