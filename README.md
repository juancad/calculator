# Calculadora

## Contenidos 
1. [Link web](#link-web)
2. [Visualización](#visualizacion)
3. [Descripción del trabajo realizado](#descripcion)

## 1. Link web <a name="link-web"/>
https://juancad.github.io/calculator/

## 2. Visualización <a name="visualizacion"/>

Se trata de una simple calculadora que permite sumar, restar, dividir y multiplicar dos números.
Adicionalmente, permitirá calcular la raíz cuadrada del primer número, la potencia del primer número como base y segundo como exponente, el logaritmo del primer número con base el segundo número o el factorial del primer número.

![calcladora](https://user-images.githubusercontent.com/91132611/162523903-fd1d4520-98a1-40a2-af0f-1b0a832fa35a.png)

## 3. Descripción del trabajo realizado <a name="descripcion"/>

En el archivo `app.component.ts` se ha creado la componente de la calculadora. Se trata de una clase con los atributos title, num1, num2, output, result, isNum1 y operator.
- title guardará el título de la aplicación.
- num1 guardará el primer número de la calculadora.
- num2 guardará el segundo número de la calculadora.
- output guardará el texto a mostrar en la ventana de la calculadora. El texto a mostrar dependerá de num1, num2 y la operación a realizar.
- result guardará el resultado de la operación.
- isNum1 es una variable booleana que indica si estamos escribiendo el número 1 o el número 2 (al darle a un operador cambiará su valor).
- operator es una cadena de caracteres que guardará la operación a realizar.

La clase tiene distintas funciones, que son las siguientes:
- La función reset() resetea la calculadora al estado inicial. Esta función es llamada cuando se presiona la tecla "C".
- La función solve() calcula el resultado en función de la operación a realizar y los valores de num1 y num2. Guarda el resultado en la variable result.
- La función setOperator(op: string) recibe una cadena de caracteres con la operación a realizar y cambia el valor de la variable operator.
- La función number(x: number) recibe un número y lo concatena a num1 o num2 (en función del valor de la variable isNum1). Es llamada cuando se presiona una tecla numérica de la calculadora.
- La función changeOutput() se encarga de actualizar lo que se muestra en la pantalla de la calculadora, es decir, el valor del output. Cada vez que una tecla de la calculadora es pulsada, se llama a esta función, para mostrar lo que se ha pulsado.
- La función factorial(x: number) me permite calcular el factorial del número que se ha pasado. Es utilizada cuando el operador es el factorial.

Los resltados de la calculadora se calculan de la siguiente manera:
- El botón "+" suma num1 y num2.
- El botón "-" resta num1 y num2.
- El botón "*" multiplica num1 y num2.
- El botón "/" divide num1 y num2.
- El botón "√" calcula la raíz cuadrada del num1.
- El botón "^" calcula la potencia del num1 elevado al num2.
- El botón "log" calcula el logaritmo en base al num2 del num1 y lo guarda en result. En caso de que no se no se especifique base, calculará el logaritmo en base 10.
- El botón "n1" calcula el factorial del num1.

El archivo `app.component.html` contiene el html de la aplicación. En él se muestra el título guardado en el `app.component.ts` y se muestra un formulario donde se pueden establecer los valores de num1, operator y num2. Por cada botón se llama a una función de la calculadora. El botón "=" llama a la función solve(), el botón "C" llama a la función reset(), los valores numéricos llaman a la función number(x: number) y los operadores llaman a la función setOperator(op: string).

El archivo `app.component.css` se establece mediante css el diseño visual de la aplicación. 
