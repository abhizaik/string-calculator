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
    const negatives = [];
    const str_array = str.split(delimiter);
    for (const element of str_array) {
        const number = parseInt(element);
        if (number < 0) {
            negatives.push(number);
        } else if (number > 1000) {
            continue;
        } else {
            sum += number;
        }
    };

    // show message if there are negative numbers
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    return sum;

}

module.exports = stringCalculator;
