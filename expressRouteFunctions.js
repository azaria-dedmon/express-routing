const RoutingError = require('./routingError')

function mean(nums) {
        let vals = undefined
        for(let x in nums) {
            strNum = nums[x].replace(/,/g, '').split('')
            nums = strNum.reduce((total, amount) =>  {
                amt = parseInt(amount)
                total = parseInt(total)
                if (Number.isNaN(total) || Number.isNaN(amt)) throw new RoutingError("Your entry contains non-numbers", 400)
                numTtl = amt+total
                numTimes = strNum.length
                vals = [numTtl, numTimes]
                return vals
            })
        }
        const meanNum = (vals[0]/vals[1])
        return meanNum
}

function median(nums) {
        let numStr = ''
        for(let x in nums) {
            numStr += nums[x]
        }
        numStr = numStr.split(',').map(n => parseInt(n, 10)).sort((a,b) => {
            if (Number.isNaN(b) || Number.isNaN(a)) throw new RoutingError("Your entry contains non-numbers", 400)
            a - b})
        half = Math.floor(numStr.length/2)
        let median = numStr.length % 2 == 0 ? (numStr[half - 1] + numStr[half]) / 2 : numStr[half]
        return median
}

function mode(nums) {
        let numStr = '';
        for(let x in nums) {
            numStr += nums[x]
        }
        numStr = numStr.split(',').map(n => parseInt(n, 10)).sort((a,b) => {
            if (Number.isNaN(b) || Number.isNaN(a)) throw new RoutingError("Your entry contains non-numbers", 400)
            a - b})
        let [max,mode,freq] = [0,0,0]
        for(let i=0; i < numStr.length; i++){
            if(numStr[i]===numStr[i+1]){
                freq++;
            }
            else {
                freq=0;
            }
            if(freq>max){
                mode = numStr[i];
            }
        }
        return mode
}

module.exports = {
    mean,
    median,
    mode
}