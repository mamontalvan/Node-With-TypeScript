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

5. Para ejecutar el código (paso opcional, en los siguientes pasos se configurará typescript con nodemon)

```
yarn nodemon dist/app.js
```

En los pasos anteriores se explicó como configurar typescript en Node, a continuación se explicarán los pasos para ejecutar código de typescript directamente en node sin tener que transpilarlo ó configurarlo.

6. Instalamos el siguiente paquete (esto permite ejecutar directamente código de typescript en node, es decir, sin tener que transpilarlo)

```
yarn add -D ts-node
```

7. Configuramos el archivo nodemon.json:

```
{
    "watch": ["src"],
    "ext": "ts,json",
    "ignore": ["src/**/*.spec.ts"],
    "exec": "ts-node ./src/app.ts"
}
```
8. Instalar rimraf (herramienta que funciona similar al rm -f) eliminar directorio

```
yarn add -D rimraf
```

9. Creamos un script para la ejecución de la aplicación:

```
"build": "rimraf ./dist && tsc",
"start": "yarn build && node dist/app.js"
```
