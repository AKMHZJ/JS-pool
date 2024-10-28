function pyramid(str, number) {
    let string = '';
    const strlen = str.length;

    for (let i = 0; i < number; i++) {
        let space = '';
        let shape = '';

        let numSpaces = number - i - 1;
        space = ' '.repeat(numSpaces * strlen);

        let numChars = 2 * i + 1;
        shape = str.repeat(numChars);

        string += space + shape;

        if (i < number - 1) {
            string += '\n';
        }
    }
    return string;
}



console.log(pyramid('{}', 12));
