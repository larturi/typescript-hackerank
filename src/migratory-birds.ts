// https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true

'use strict'

export function migratoryBirds(arr: number[]): number {

    const frequencyMap: { [key: number]: number } = {};

    // Contar la frecuencia de cada tipo de ave
    arr.forEach((birdType) => {
        if (frequencyMap[birdType]) {
            frequencyMap[birdType]++;
        } else {
            frequencyMap[birdType] = 1;
        }
    });

    let mostFrequentType = 0;
    let maxFrequency = 0;

    // Encontrar el tipo de ave más frecuente con el ID más bajo
    for (const birdType in frequencyMap) {
        const currentType = Number(birdType); // Convertir el tipo de ave a número
        if (frequencyMap[birdType] > maxFrequency || 
            (frequencyMap[birdType] === maxFrequency && currentType < mostFrequentType)) {
            maxFrequency = frequencyMap[birdType];
            mostFrequentType = currentType;
        }
    }

    return mostFrequentType;
}

