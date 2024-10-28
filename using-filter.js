function filterShortStateName(array) {
    return array.filter((word) => word.length < 7)
}

function filterStartVowel(array) {
    return array.filter((word) => word[0] == 'a' || word[0] == 'o' || word[0] == 'u' || word[0] == 'i' || word[0] == 'e' || word[0] == 'A' || word[0] == 'O' || word[0] == 'U' || word[0] == 'I' || word[0] == 'E')
}

function filter5Vowels(array) {
    return array.filter((word) => vowlCount(word) >= 5)
}

function filter1DistinctVowel(array) {
    return array.filter((word) => UniqueVowl(word))
}
function vowlCount(word) {
    let count = 0
    for (let index = 0; index < word.length; index++) {
        if(word[index] == 'a' || word[index] == 'o' || word[index] == 'u' || word[index] == 'i' || word[index] == 'e' || 
            word[index] == 'A' || word[index] == 'O' || word[index] == 'U' || word[index] == 'I' || word[index] == 'E'){
                count++
            }
    }
    return count
}

function multiFilter(arr) {
    return arr.filter((a) => {return (a.capital.length >=8 && !/^[aeiou]/i.test(a.name) && /[aeiou]/i.test(a.tag) && a.region !== "South")})
}

function UniqueVowl(word) {
    let vowels = 'aouie'
    let isCountain = false
    for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < vowels.length; j++) {
                if(word[i].toLowerCase() == vowels[j]){
                    if(isCountain){
                        return false
                    }
                    isCountain = true
                    vowels = vowels.substring(0,j) + vowels.substring(j+1)
                }
            }
    }
    return isCountain
}
function hasOneVowel(word) {
    let vowels = 'aouie'
    for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < vowels.length; j++) {
                if(word[i].toLowerCase() == vowels[j]){
                    return true
                }
            }
    }
    return false
}