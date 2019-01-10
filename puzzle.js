module.exports = {
    solve: function(input){

        input = "Please solve this puzzle:\n ABCD\nA-->-\nB-=--\nC->--\nD-<--\n";
        // 1. Get weight of the letters
        let inputSplit = input.split('\n');
        let lettersWeight = this.getLettersWeight(inputSplit);

        // 2. Apply letters weights to fill the matrix and give a solution
        let solution = this.fillMatrix(lettersWeight);

        return solution;

    },
    getLettersWeight: function(inputSplit){

        let lettersWeight = {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0
        }

        inputSplit.forEach(function(rule, index){
            if(index>1){
                var ruleSplit = rule.split('');
                ruleSplit.shift(); // Remove letter from the rule
                ruleSplit.forEach(function(operator, position){
                    if(operator !== '-'){
                        // TODO
                    }
                })
            }
        });
        return lettersWeight;

    },
    fillMatrix: function(lettersWeight){

        let matrix = {
            '0': ['-', '-', '-', '-'],
            '1': ['-', '-', '-', '-'],
            '2': ['-', '-', '-', '-'],
            '3': ['-', '-', '-', '-']
        }
        let indexToLetters = {
            '0': 'A',
            '1': 'B',
            '2': 'C', 
            '3': 'D'
        }
        let solution = " ABCD";
        for(var row in matrix){
            matrix[row].forEach(function(cell, index){
                matrix[row][index] = compareLetters(lettersWeight, row, index.toString());
            });
            solution += '\n' + indexToLetters[row] + matrix[row].join("");
        }
        return solution;

    }
}

function compareLetters(lettersWeight, letter1, letter2){
    if(letter1 === letter2){
        return '=';
    }
    if(lettersWeight[letter1] > lettersWeight[letter2]){
        return '>';
    }
    return '<';
}