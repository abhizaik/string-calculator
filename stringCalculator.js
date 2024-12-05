function stringCalculator(str) {
    if(str === ""){
        return 0;
    }

    // Set delimiter
    let delimiter = /[\n,]/; 
    if (str.startsWith("//")) {
        const parts = str.split("\n");
        delimiter = new RegExp(parts[0].slice(2));
        str = parts[1];
    }

    // Handling custom delimiter
    let sum = 0
    const str_array = str.split(delimiter);
    str_array.forEach(element => {
        sum += parseInt(element);
    });
    return sum;

}

module.exports = stringCalculator;
