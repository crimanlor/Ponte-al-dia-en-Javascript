var pet;
var age;
var result;

function getPetExerciseInfo(pet, age) {
    pet = document.getElementById('pet-input').value
    age = document.getElementById('age-input').value
    result = document.getElementById('info-container')

    switch (pet) {
        case "perro":
            if (age < 1) {
                result.innerText = "Los cachorros necesitan pequeñas y frecuentes sesiones de juego"
            } else if (age >= 1 && age <= 7) {
                result.innerText = "Los perros a esta edad necesitan caminatas diarias y sesiones de juego"
            } else if (age > 7) {
                result.innerText = "Los perros adultos necesitan caminatas más cortas"
            }
            break;

        case "gato":
            if (age < 1) {
                result.innerText = "Los gatitos necesitan frecuentes sesiones de juego"
            } else if (age >= 1 && age <= 7) {
                result.innerText = "Los gatos a esta edad necesitan jugar diariamente"
            } else if (age > 7) {
                result.innerText = "Los gatos adultos necesitan sesiones de juego más cortas"
            }
            break;

        case "ave":
            if (age < 1) {
                result.innerText = "Las aves jóvenes necesitan mucho espacio para volar"
            } else if (age >= 1 && age <= 7) {
                result.innerText = "Las aves necesitan jugar diariamente y un lugar para volar"
            } else if (age > 7) {
                result.innerText = "Las aves adultas necesitan descansar más, pero siguen ocupando un lugar para volar"
            }
            break;

        default:
            result.innerText = "Lo sentimos, no tenemos información sobre este tipo de mascota"
    }

}