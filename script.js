console.log("Hello World")


/*ESERCIZIO 1*/
/* function esercizio1(a, b) {
    if (a === 50 || b === 50 || a+b===50) {
        return true;
    } else { return false
        }
}

console.log(esercizio1(25, 50))
 */


/*ESERCIZIO 2*/
/* function removeChar(string, position) {
    return string.slice(0, position) + string.slice(position+1)  
}

console.log(removeChar("ciao a tutti", 1)) */

/*ESERCIZIO 3*/
/* function between70and100 (a, b) {
    if ((a>=40 && a<=60) || (a >=70 && a<=100) && (b>=40 && b<=60) || (b>=70 && b<=100)){
        return true;
    } else return false;
}
console.log(between70and100(100,100)) */

/* ESERCIZIO 4 */

/* function city (name) {
    let nameLow = name.toLowerCase();
    if (nameLow.startsWith("los") || nameLow.startsWith("new")) return true;
    else return false
} 
console.log(city("new angeles")) */


/*ESERCIZIO 5*/

/* function sommatoria(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    } 
    return sum;
}
console.log(sommatoria([1,2,3,4,100])) */

/*ESERCIZIO 6*/
/* function check1and3(array) {
    if (array.includes(1) || array.includes(3)) return false;

    return true;
} 
console.log(check1and3([0,2,4])) */

/*ESERCIZIO 7*/
/* function cheAngolo(num) {
    if (num < 90) return "acuto"
    else if (num === 90) return "retto"
    else if (num>90 && num<180) return "ottuso"
    else if (num === 180) return "piatto"
    else return "superiore a 180°"
}

console.log(cheAngolo(360)) */

/*ESERCIZIO 8*/
/* let string = "Fabbrica Italiana automobili Torino";
function acronimo(string) {
    let splitted = string.split(" ");
    let acronimo = [];
    for (let i = 0; i < splitted.length; i++) {
        acronimo.push(splitted[i][0].toUpperCase());
    }
    return acronimo;
}
console.log(acronimo(string).join("")) */


//* ESERCIZIO 1 EXTRA 

/* let string = "i topi non avevano nipoti";
function maxChar(string) {
    let strObj = {};
    let max = "";
    let maxCount = 0;
    let result = [];

    for (const char of string) {
        strObj[char] = strObj[char] + 1 || 1;
    }
    for (const key in strObj) {
        if (strObj[key] > maxCount) {
            maxCount = strObj[key];
            max = key;
            result = [];
            result.push(max);
            result.push(maxCount);
        }
    }
    return result;
}

console.log("Il vincitore è: " + maxChar(string)[0] + " con " + maxChar(string)[1] + " volte"); */


//* ESERCIZIO 2 EXTRA

/* let str1 = "asd";
let str2 = "ads";

let final1 = str1.split("").sort().join();
let final2 = str2.split("").sort().join();
console.log(final1, final2)
function anagramma(final1, final2) {
    let first = {};
    let second = {};
    for (const char of final1) {
        first[char] = first[char] + 1 || 1;
    }
    for (const char of final2) {
        second[char] = second[char] + 1 || 1;
    }
    console.log(first, second)
    for (const key in second) {
        if (first[key] === second[key]) continue
        else return "fail"
    }
   
    return "anagramma"
}
console.log(anagramma(str1, str2));  */


//*ESERCIZIO 3 EXTRA

/* let list = ["bbaa", "abab", "bbaa", "aaaa", "baba"];
let word = "abba";
let anagrammi = [];

function isAnagramma (list, word) {
    // oggetto con le lettere della parola
    let wordObj = {}
    for (const char of word) {
        wordObj[char] = wordObj[char] + 1 || 1;
    }
    console.log(wordObj);
    
    // ciclo che scorre tutte le parole della lista
    
    for (let i = 0; i < list.length; i++) {
        let listObj = {};
        let counter = true;

        // per ogni parola creo un oggetto con le lettere ed il loro contatore

        for (const char of list[i]) {
            listObj[char] = listObj[char] + 1 || 1;
        }

        // ciclo per controllare che gli oggetti siano uguali

        for (const key in listObj) {
            if (wordObj[key] === listObj[key]) continue;
            else { 
                counter = false;
                break;
            }
        }
        if (counter === true) {
            anagrammi.push(list[i])
        }
        
    }
    console.log(anagrammi)
}

isAnagramma(list, word) */


//*ESERCIZIO 4 EXTRA

/* let string = "i topi non avevano nipoti";

function aibohphobia(string) {
    let control = string.split("");
    control = control.reverse();
    control = control.join("");
    if (control.replace(/\s/g, "") === string.replace(/\s/g, "")) return true;
    else return false;
}

console.log(aibohphobia(string)) */


//* ESERCIZIO 5 EXTRA

/* let num = 21123;

function reverseNum(num) {
    let control = num.toString().split("").reverse().join("");
    return control;
}
console.log(reverseNum(num)) */


//*ESERCIZIO 6 EXTRA

/* let num = 6;
function scala(num) {
    if (num < 0) console.log("Numero negativo")
    for (i=0; i<num; i++) {
        console.log("#".repeat(i));
    }
}

scala(num) */


//*ESERCIZIO 7 EXTRA

/* let string = "Ciao";
function reverseString(string) {
    console.log(string.split("").reverse().join(""));
}

reverseString(string) */

//*ESERCIZIO 8 EXTRA

/* let array = [1,2,3,4,5,6];
let y = 4;
function arraySplitter(array, y) {
    let quantiArr = Math.ceil(array.length / y);
    console.log(quantiArr);
    let counter = 0;
    for (let i = 0; i < quantiArr; i++) {
        for (let x = 0; x < y; x++) {
            console.log(array.slice(counter, counter + y));
            counter = counter+y;
            break;
        }
    }
}
arraySplitter(array, y) */


//*ESERCIZIO 9 EXTRA

//*ESERCiZIO 10 EXTRA

let x = 6;
let total = x * x;
console.log(total) 
function matrix(x) {
    for (let i = 1; i <= x; i++) {
        let sing = [];
        for (let z = 1; z <= x; z++) {
            sing.push(z);
            
        }
        console.log(sing);
    }
}

matrix(x)
