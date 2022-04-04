export function somaTudo(...nums){
    var total = 0
    if(nums.length > 0){
        nums.forEach(num => {
            total += num
        })
    }

    return total
}