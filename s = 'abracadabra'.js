let inputText = 'abracadabra'
let alph = []
let n = 0
let chars = ""
let Hentropy = 0
let powerofalph = 0


for(let index = 0; index < inputText.length; index++)
{
    if (alph[inputText.charAt(index)])
        alph[inputText.charAt(index)]++
    else {
        n++
        chars += inputText.charAt(index)
        alph[inputText.charAt(index)] = 1
    }
}


if (n !== 1)
    for (let index = 0; index < n; index++)
    {
        powerofalph = alph[chars.charAt(index)]/inputText.length
        Hentropy -= powerofalph * (Math.log(powerofalph)/Math.log(n))
    }
console.log (Hentropy)
