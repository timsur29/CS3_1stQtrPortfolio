console.log('hi stronts')
console.log('look for a tv channel by number')

// gma - 7
// abs-cbn - 2
// tv5 - 5
// ibc - 13
// ptv - 4

rl = require('readline')
rli = rl.createInterface({
    input: process.stdin,
})
rli.on('line', give_station)

function give_station(num) {
    switch (Number(num)) {
        case 7:
            console.log(`gma - ${num}`)
            break
        case 2:
            console.log(`abs-cbn - ${num}`)
            break
        case 5:
            console.log(`tv5 - ${num}`)
            break
        case 13:
            console.log(`ibc - ${num}`)
            break
        case 4:
            console.log(`ptv - ${num}`)
            break
        default:
            console.log('channel not found')
            break
    }
}