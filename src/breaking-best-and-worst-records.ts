'use strict'

// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true

export function breakingBestAndWorstRecords(scores: number[]): number[] {
    let higestScore: number = scores[0]
    let lowestScore: number = scores[0]
    let countBreakingHigestScore: number = 0
    let countBreakingLowestScore: number = 0

    scores.forEach((score) => {
        if(score > higestScore) {
            countBreakingHigestScore++
            higestScore = score
        }
        if(score < lowestScore) {
            countBreakingLowestScore++
            lowestScore = score
        }
    })

    return [countBreakingHigestScore, countBreakingLowestScore]
}

