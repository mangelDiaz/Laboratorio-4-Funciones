# Proceso Laboratorio 4

## Preparación

1. Git clone, npm install en repositorio clonado y npm run dev
2. Copiar + pegar material de base en index.html y style.css
3. Crear repositorio privado en github
4. Conectarlo al repositorio clonado y subirlo a github

## Elementos html y css

1. Crear etiquetas de todos los nuevos elementos: boton siguiente, anterior, reset, y además añadimos label input y boton para añadir turno.
2. Añadir y jugar con estilos nuevos para los dos bloques nuevos, el de los botones y el del input
3. Modificar estilos de root para que el hover y colores de los botones, se corresponda con los estilos nuevos.
4. Jugar con las clases y los estilos para que los botones ocupen 1/3 del espacio, que el input ocupe el espacio restante y luego se reduzca en responsive
5. Incorporar estilo active para los botones en root y eliminar focus
6. Rehacer estilos llevandolo a azules

## Añadir lógica de javascript en main.ts

1. He repasado los pdfs de JS y TS y he copiado y pegado las partes más relevantes para las operaciones
2. He añadido la parte de Pstart y he tratado de hacer la funcion de Sumando1 al pulsar el botón Siguiente
3. Numerosos errores impedian que funcionara al estar en modo estricto. He ido informandome de cada error y mas o menos arreglandolo en la primera función de sumar +1 con el botón siguiente
4. Con el mismo funcionamiento he sacado restar -1 para el botón Anterior, y ponerlo en 0 con el botón Reiniciar, sin embargo, no lo entendía muy bien y tenía diez errores de tipado, luego decidí parar y volver a ver las clases para repasar conceptos.
5. A medida que repaso los videos, pruebo diferentes alternativas para ver nuevas posibilidades de mejorar lo que tengo y repasar los conceptos
6. He finalizado la funcionalidad básica a nivel de javascript y ya funcionan todos los botones aunque hay muchos errores de tipado

## Corregir errores de typescript en main.ts

1. Arreglado error de .value con (as HTMLInputElement)
2. Arreglado errores de .innerHTML añadiendo .toSting ()
3. Creado const general elementoMarcador y aplicada sustituyendo codigo repetido de mostrar el resultado con if (elementoMarcador !== null && elementoMarcador !== undefined) para evitar que salga null o undefined
4. Cambiada la estructura de los condicional if para que abarquen otros dos casos en que habia que comprobar que no fueran null en las funciones, y añadidas dos comprobaciones más de null para limpiar de errores typescript en modo estricto

## Añadir padstart y ultimos retoques
1. Añadido passtart al final de cada función para que añada un 0 al inicio si el numero solo tiene un digito
2. añadidos if anidados en las funciones para que al pulsar el boton añadir no suba mas de 99, y que al pulsar el boton anterior no baje del 0
3. añadido otro if para limitar los numeros que se pueden introducir en el input de 0 a 99.
4. Añadida alerta si se introduce un número fuera de ese rango.

## Finalizar ejercicio
1. Git add, Git commit, Git push
2. Hacer público el repositorio del ejercicio y entregar enlace
