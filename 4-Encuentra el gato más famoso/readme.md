# Ejercicio 4 - Encontrar el gato más fomoso - Platzi

En este desafío, debemos encontrar al gato más famoso en base a su número de seguidores.

## Instrucciones

Recibimos un array de objetos que incluirán las siguientes propiedades:

- `name`: nombre del gato.
- `followers`: un array de números, donde cada uno representa los seguidores de cada red social.

Tenemos que devolver un array con los nombres de los gatos que tienen solo el mayor número de seguidores.
Si hay dos o más gatos con el mismo número máximo de seguidores, tenemos que incluirlos en el array de resultado, manteniendo el orden en el que aparecen en el array de entrada.

Tendrás inputs y outputs como los siguientes 👇

Ejemplo 1:

```
Input: findFamousCats([
{
name: "Luna",
followers: [500, 200, 300]
},
{
name: "Michi",
followers: [100, 300]
},
])

Output: ["Luna"]
```

Ejemplo 2:

```
Input: findFamousCats([
{
name: "Mimi",
followers: [320, 120, 70]
},
{
name: "Milo",
followers: [400, 300, 100, 200]
},
{
name: "Gizmo",
followers: [250, 750]
}
])

Output: ["Milo", "Gizmo"]
```
