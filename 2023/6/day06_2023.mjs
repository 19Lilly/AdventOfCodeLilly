/* Time:        55     82     64     90
Distance:   246   1441   1012   1111 */

// const arr=[[7,9],[15,40], [30,200]]
const arr = [[55,246], [82,1441], [64,1012], [90,1111]]
let result=[]

function howManyTimesBeatRecord(time, distance){
    let sum = 0;
    for(let i = 0; i <= time; i++ ){
        i*(time-i) <= distance ? null : sum++
    }
    // console.log(sum)
    return result = sum
}

const final = arr.map(item => {
 return howManyTimesBeatRecord(item[0],item[1])
}).reduce((acc, curr) => acc*curr)

howManyTimesBeatRecord(7,9)
console.log(`Part 1: ${final}`)
console.log(`Part 2: ${howManyTimesBeatRecord(55826490,246144110121111)}`)