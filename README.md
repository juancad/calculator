# Calculadora

## Contenidos 

## Link web
https://juancad.github.io/calculator/

## Visualización

Se trata de una simple calculadora que permite sumar, restar, dividir y multiplicar dos números.
Adicionalmente, permitirá calcular la raíz cuadrada del primer número, la potencia del primer número como base y segundo como exponente, el logaritmo del primer número con base el segundo número o el factorial del primer número.

![Sin título-1](https://user-images.githubusercontent.com/91132611/161382008-51a9903e-07e2-42ff-bf5e-d48207e01301.png)

## Descripción del trabajo realizado

En el archivo `app.component.ts` se ha creado la componente de la calculadora. Se trata de una clase con los atributos title, num1, num2, textResult y result.
- title guardará el título de la aplicación
- num1 guardará el primer número de la calculadora
- num2 guardará el segundo número de la calculadora
- textResult guadará el texto a mostrar en función de la operación realizada
- result guardará el resultado de la operación

La clase tiene distintas funciones, una por cada operación de la calculadora. Las funciones creadas son las siguientes:
- La función sum() suma num1 y num2 y lo guarda en result.
- La función sub() resta num1 y num2 y lo guarda en result.
- La función mul() multiplica num1 y num2 y lo guarda en result.
- La función div() divide num1 y num2 y lo guarda en result.
- La función sqrt() calcula la raíz cuadrada del num1 y lo guarda en result.
- La función pow() calcula la potencia del num1 elevado al num2 y lo guarda en result.
- La función log() calcula el logaritmo en base al num2 del num1 y lo guarda en result.
- La función fact() calcula el factorial del num1. Esta función llama a otra llamada factorial(x), que permite calcular el factorial del número que se le pasa por parámetro.

El archivo `app.component.html` contiene el html de la aplicación. En él se muestra el título guardado en el `app.component.ts` y se muestra un formulario donde se pueden establecer los valores de num1 y num2. En este formulario se muestra también un botón por cada operación a realizar, que llamará a las funciones que se han creado en la clase de la componente. Finalmente se muestra el valor del resultado.

El archivo `app.component.css` se establece mediante css el diseño visual de la aplicación. 
