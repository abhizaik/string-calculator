function stringCalculator(str) {
    if(str === ""){
        return 0;
    }

    if(str === "1"){
        return 1;
    }

    // Handling comma separated case
    let sum = 0
    const str_array = str.split(',');
    str_array.forEach(element => {
        sum += parseInt(element);
    });
    return sum;

}

module.exports = stringCalculator;
