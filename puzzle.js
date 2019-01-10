module.exports = {
    solve: function(input){

        input = "Please solve this puzzle:\n ABCD\nA-->-\nB-=--\nC->--\nD-<--\n";
        // 1. Get rules or the order of the letters
        let inputSplit = input.split('\n');
        let rulesMatrix = this.getRules(inputSplit);
        console.log(rulesMatrix);
        // 2. Apply rules to fill the matrix
        let finalMatrix = this.fillMatrix(rulesMatrix);
        console.log(finalMatrix);
        // 3. Give correct output

        return solution;

    },
    getRules: function(inputSplit){

        let rulesMatrix = {
            '0': [],
            '1': [],
            '2': [],
            '3': []
        }
        inputSplit.forEach(function(rule, index){
            if(index>1){
                var ruleSplit = rule.split('');
                ruleSplit.shift(); // Remove letter from the rule
                ruleSplit.forEach(function(operator, position){
                    if(operator !== '-'){
                        rulesMatrix[(index-2)]=[operator, position.toString()];
                    }
                })
            }
        });
        return rulesMatrix;

    },
    fillMatrix: function(rulesMatrix){

        let matrix = {
            '0': ['-', '-', '-', '-'],
            '1': ['-', '-', '-', '-'],
            '2': ['-', '-', '-', '-'],
            '3': ['-', '-', '-', '-']
        }
        for(var row in matrix){
            for(index = 0; index < matrix[row].length; index++){
                matrix[row][index] = this.compareLetters(rulesMatrix, row, index);
            }
        }
        return matrix;

    },
    compareLetters: function(rulesMatrix, letter1, letter2){

        if(letter1 === letter2){
            return '=';
        }
        if(rulesMatrix[letter1][1] == letter2){
            return rulesMatrix[letter1][0]
        }
        if(rulesMatrix[letter2][1] == letter1){
            if(rulesMatrix[letter2][0] == '<'){
              return '>'
            }else{
              return '<';
            }
        }
        return this.compareLetters(rulesMatrix, rulesMatrix[letter1][1], letter2);

    }
}