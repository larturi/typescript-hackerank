'use strict'

/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

export function divisibleSumPairs(n: number, k: number, ar: number[]): number {
    let countOfDivisibleSumPairs = 0

    for (let i = 0; i < n; i++) {
        for (let j = 1 + i; j < n; j++) {
            if((ar[i] + ar[j]) % k === 0) {
                console.log(`${ar[i]} + ${ar[j]} = ${ar[i] + ar[j]}`)
                countOfDivisibleSumPairs++
            }
        }
    }
    return countOfDivisibleSumPairs
}

