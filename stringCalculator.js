function stringCalculator(str) {
    if(str === ""){
        return 0;
    }

    // Handling comma and \n separated case
    let sum = 0
    const str_array = str.split(/[\n,]/);
    str_array.forEach(element => {
        sum += parseInt(element);
    });
    return sum;

}

module.exports = stringCalculator;
