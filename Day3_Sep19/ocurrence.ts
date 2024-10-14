/*1.Input a string of alphabets.find out the number of occurence of all alphabets
in that string.find out the alphabet in that string.find out the alphabet with Maximum occurence*/
 

function alphabetOccurrence(input:string)
{
    let Occurrences:{[key:string]:number}={};
    let maxOccurrence=0;
    let maxAlphabet='';
    for(let char of input){
                if(Occurrences[char]){
                   Occurrences[char]++;
                }else{
                   Occurrences[char]=1;
                }
                if(Occurrences[char]>maxOccurrence){
                    maxOccurrence=Occurrences[char]
                    maxAlphabet=char;
                }
            
        }
        console.log('Alphabet occurences:',Occurrences);
        console.log(`The Alphabet with maximum occurrence is'${maxAlphabet}'with ${maxOccurrence}occurrences.`)

    }
    alphabetOccurrence('Trisaa');


