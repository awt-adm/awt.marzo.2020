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
Nota: Para cerrar VIM
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

  ##### JS Funciones
  - Arrow function o Función anónima
    - () => {
      **contenido de funcion**
    }
  - Igualadas a variables o no anónimas
    - const nombreFuncion = () => {}   
