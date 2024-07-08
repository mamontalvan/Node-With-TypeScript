## Node with TypeScript

1. Crear un directorio nuevo e inicializar un proyecto nuevo con el siguiente comando:

```
yarn init -y
````

2. Instalar typeScript y tipos de Node como dependencia de desarrollo  (esto instala el compilador "tsc" de typescript):

```
yarn add -D typescript @types/node
```

3. Inicializar el archivo de configuración de Typescript (se envían flags en el comando para configurar el directorio donde residirá el código javascript transpilado y el directorio donde residirá el código fuente de la aplicación)

```
yarn tsc --init --outDir dist/ --rootDir src
```

4. Para iniciar la transpilación de código typescript a javascript ejecutar el siguiente comando y revisar que se haya creado el directorio "/dist":

```
yarn tsc --watch
```

5. Para ejecutar el código 

```
yarn nodemon dist/app.js
```

6. 