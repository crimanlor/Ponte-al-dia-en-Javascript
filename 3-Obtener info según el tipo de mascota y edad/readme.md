# Ejercicio 3 - Obtener info según el tipo de mascota y la edad - Platzi

En este desafío tenemos devolver al usuario diferente información en función del tipo de mascota y su edad.

## Instrucciones

Dependiendo de estos 2 factores (tipo de mascota y edad), tendrás que construir la función llamada getPetExerciseInfo la cual retornará una cadena de texto con la información necesaria acerca de cuanto ejercicio necesita hacer cada tipo de mascota.

La función recibirá las siguientes mascotas:

- perro
- gato
- ave

En caso de pasar una mascota la cual no sea de la lista deberá retornar "Tipo de mascota inválida".

Para cada tipo de mascota, la función retornará diferente información basada en la edad.

### Perros
- Si la edad es menor al año, deberá retornar "Los cachorros necesitan pequeñas y frecuentes sesiones de juego"
- Si la edad es entre 1 y 7 años, deberá retornar "Los perros a esta edad necesitan caminatas diarias y sesiones de juego"
- Si la edad es mayor a 7 años, deberá retornar "Los perros adultos necesitan caminatas más cortas"

### Gatos
- Si la edad es menor al año, deberá retornar "Los gatitos necesitan frecuentes sesiones de juego"
- Si la edad es entre 1 y 7 años, deberá retornar "Los gatos a esta edad necesitan jugar diariamente"
- Si la edad es mayor a 7 años, deberá retornar "Los gatos adultos necesitan sesiones de juego más cortas"

### Aves
- Si la edad es menor al año, deberá retornar "Las aves jóvenes necesitan mucho espacio para volar"
- Si la edad es entre 1 y 7 años, deberá retornar "Las aves necesitan jugar diariamente y un lugar para volar"
Si la edad es mayor a 7 años, deberá retornar "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar"

Tendrás inputs y outputs como los siguientes 👇

Ejemplo 1:
```
Input: getPetExerciseInfo("perro", 3)
Output: "Los perros a esta edad necesitan caminatas diarias y sesiones de juego"
```

Ejemplo 2:
```
Input: getPetExerciseInfo("gato", 8)
Output: "Los gatos adultos necesitan sesiones de juego más cortas"
```

Ejemplo 3:
```
Input: getPetExerciseInfo("Mamut", 25)
Output: "Tipo de mascota invalida"
```