function ordenarNumeros() {
    let numeros = prompt('Digite uma sequência de números separados por vírgula:');
    arrayNumeros = numeros.split(',');
    const arrayNumerosInt = [];

    for (var i = 0; i < arrayNumeros.length; i++) {
        arrayNumerosInt.push(parseInt(arrayNumeros[i]));
    }
    let numerosOrdenados = arrayNumerosInt.sort((a, b) => a - b);
    console.log(numerosOrdenados);
}