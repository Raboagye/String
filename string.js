let string = "Richard Aboagye is rich. Who is also rich like richard. Being rich is not easy"

// charAt
console.log(string.charAt(6))
// output d

// indexOf
    console.log(string.indexOf("rich"))
    // output 19
    console.log(string.indexOf("rich", 20))
    // output 37
    console.log(string.lastIndexOf("rich"))
    // output 62
    console.log(string.lastIndexOf("rich", -1))
    // output -1

// splice
    console.log(string.slice(10))
    // output oagye is rich. Who is also rich like richard. Being rich is not easy
    console.log(string.slice(-4))
    // output easy
    console.log(string.slice(13,16))
    // output ye 
    console.log(string.slice(16,13))
    // output ""


// substring
    console.log(string.substring(10))
    // output oagye is rich. Who is also rich like richard. Being rich is not easy
    console.log(string.substring(-4))
    //output Richard Aboagye is rich. Who is also rich like richard. Being rich is not easy
    console.log(string.substring(13,16))
    // output ye
    console.log(string.substring(16,13))
    // output ye

// split
    console.log(string.split())
    // output ['Richard Aboagye is rich. Who is also rich like richard. Being rich is not easy']
    console.log(string.split(" "))
    // output ['Richard', 'Aboagye', 'is', 'rich.', 'Who', 'is', 'also', 'rich', 'like', 'richard.', 'Being', 'rich', 'is', 'not', 'easy']
    console.log(string.split(""))
    // output ['R', 'i', 'c', 'h', 'a', 'r', 'd', ' ', 'A', 'b', 'o', 'a', 'g', 'y', 'e', ' ', 'i', 's', ' ', 'r', 'i', 'c', 'h', '.', ' ', 'W', 'h', 'o', ' ', 'i', 's', ' ', 'a', 'l', 's', 'o', ' ', 'r', 'i', 'c', 'h', ' ', 'l', 'i', 'k', 'e', ' ', 'r', 'i', 'c', 'h', 'a', 'r', 'd', '.', ' ', 'B', 'e', 'i', 'n', 'g', ' ', 'r', 'i', 'c', 'h', ' ', 'i', 's', ' ', 'n', 'o', 't', ' ', 'e', 'a', 's', 'y']
    console.log(string.split(" ", 2))
    // output ['Richard', 'Aboagye']
    console.log(string.split("o"))
    // output ['Richard Ab', 'agye is rich. Wh', ' is als', ' rich like richard. Being rich is n', 't easy']

// includes
    console.log(string.includes("Aboagye"))
    // output true
    console.log(string.includes("Aboagye", 0))
    // output true
    console.log(string.includes("Aboagye", 20))
    // output false
    console.log(string.includes("Martin"))
    // output false

// startsWith
    console.log(string.startsWith("Richard"))
    // output true
    console.log(string.startsWith("rich"))
    // output false
    console.log(string.startsWith("rich", 19))
    // output true

// endswith
    console.log(string.endsWith("easy"))
    // output true
    console.log(string.endsWith("eas"))
    // output false
    console.log(string.length)
    // output 78
    console.log(string.endsWith("eas", 77))
    // output true

// concat
    let str1 = "richy"
    let str2 = "aboagye"
    console.log(str1.concat(str2))
    // output richyaboagye
    console.log(str1.concat(" ", str2))
    // output richy aboagye

// +
    console.log(str1 + " " + str2)
    // output richy aboagye

// repeat
    console.log("abc".repeat(2))
    // output abcabc
    console.log("abc".repeat(0))
    // output ""
    console.log("abc".repeat(3.5))
    // output abcabcabc
    // console.log("abc".repeat(-1))
    // output RangeError

// trim, trimStart, trimEnd
    let stringing = "   Richard   "
    console.log(stringing.trim())
    // output "Richard"
    console.log(stringing.trimStart())
    // output "Richard   "
    console.log(stringing.trimEnd())
    // output "   Richard"

// padStart and padEnd
    let padstring = "abc"
    console.log(padstring.padStart(10))
    // output "       abc"
    console.log(padstring.padStart(10,"foo"))
    // output foofoofabc
    console.log(padstring.padEnd(10))
    // output "abc       "
    console.log(padstring.padEnd(10,"foo"))
    // output abcfoofoof
    console.log(padstring.padStart(2))
    // output abc

// search
    let sstring = "aaalso AAALSO Richard also rich also aboagye ALSO"
    console.log(sstring.search("lso"))
    // output 3
    console.log(sstring.search(/lso/))
    // output 3
    console.log(sstring.search(/LSO/))
    // output 10
    console.log(sstring.search(/LSO/i))
    // output 3

// match

    console.log(sstring.match("lso"))
    // output ['lso', index: 3, input: 'aaalso AAALSO Richard', groups: undefined]
    console.log(sstring.match(/lso/))
    // output ['lso', index: 3, input: 'aaalso AAALSO Richard', groups: undefined]
    console.log(sstring.match(/lso/g))
    // output ['lso', 'lso', 'lso']
    console.log(sstring.match(/lso/gi))
    // output ['lso', 'LSO', 'lso', 'lso', 'LSO']

// matchAll
    let res = sstring.matchAll("lso")
    console.log([...res])
    // output  
    // ['lso', index: 3, input: 'aaalso AAALSO Richard also rich also aboagye ALSO', groups: undefined]
    // ['lso', index: 23, input: 'aaalso AAALSO Richard also rich also aboagye ALSO', groups: undefined]
    // ['lso', index: 33, input: 'aaalso AAALSO Richard also rich also aboagye ALSO', groups: undefined]
    let ress = sstring.matchAll(/lso/gi)
    console.log([...ress])
    // output 
    // ['lso', index: 3, input: 'aaalso AAALSO Richard also rich also aboagye ALSO', groups: undefined]
    // ['LSO', index: 10, input: 'aaalso AAALSO Richard also rich also aboagye ALSO', groups: undefined]
    // ['lso', index: 23, input: 'aaalso AAALSO Richard also rich also aboagye ALSO', groups: undefined]
    // ['lso', index: 33, input: 'aaalso AAALSO Richard also rich also aboagye ALSO', groups: undefined]
    // ['LSO', index: 46, input: 'aaalso AAALSO Richard also rich also aboagye ALSO', groups: undefined]

// Replace
    console.log(sstring.replace("also", "malso"))
    // output aamalso AAALSO Richard also rich also aboagye ALSO
    console.log(sstring.replace("also", (match)=> {
       return match.toUpperCase()
    }))
    // aaALSO AAALSO Richard also rich also aboagye ALSO
    console.log(sstring.replace(/also/g, "malso"))
    // output aamalso AAALSO Richard malso rich malso aboagye ALSO
    console.log(sstring.replace(/also/gi, (match)=> {
        return match.toUpperCase()
     }))
    //  output aaALSO AAALSO Richard ALSO rich ALSO aboagye ALSO
    console.log(sstring.replace(/also/gi, "malso" ))
    // output amalso AAmalso Richard malso rich malso aboagye malso

    console.log(" ")

// ReplaceAll
    console.log(sstring.replaceAll("also", "malso"))
    // output aamalso AAALSO Richard malso rich malso aboagye ALSO
    console.log(sstring.replaceAll("also", (match)=> {
    return match.toUpperCase()
    }))
    // output aaALSO AAALSO Richard ALSO rich ALSO aboagye ALSO
    console.log(sstring.replaceAll(/also/g, "malso"))
    // output aamalso AAALSO Richard malso rich malso aboagye ALSO
    console.log(sstring.replaceAll(/also/gi, (match)=> {
        return match.toUpperCase()
    }))
    //  output aaALSO AAALSO Richard ALSO rich ALSO aboagye ALSO
    console.log(sstring.replaceAll(/also/gi, "malso" ))
    // output aamalso AAmalso Richard malso rich malso aboagye malso

// toLowerCase and toUpperCase
    console.log(sstring.toLowerCase())
    // output aalso aaalso richard also rich also aboagye also
    console.log(sstring.toUpperCase())
    // output AAALSO AAALSO RICHARD ALSO RICH ALSO ABOAGYE ALSO

// toLocalLowerCase and toLocalUpperCase
    let sstringg = "INSTANBLE"
    console.log(sstringg.toLocaleLowerCase("en-US"))
    // output instanble
    console.log(sstringg.toLocaleLowerCase("tr"))
    // output ınstanble
    console.log(sstringg.toLocaleUpperCase("tr"))
    // output INSTANBLE
    console.log(sstringg.toLocaleUpperCase("en-US"))
    // output INSTANBLE

// toString and valueOf
    const stringObj = new String("Hello World")
    console.log(stringObj)
    // output String {'Hello World'}
    console.log(stringObj.toString())
    // output Hello World
    console.log(stringObj.valueOf())
    // output Hello World




