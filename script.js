(()=>{
    document.getElementById('run').addEventListener('click',()=>{
            console.clear();
            const joueur1 = prompt('entrez le mot à deviner: ')
            console.log("Welcome in the hanged game ! ")
            const letters = joueur1.toUpperCase().split("");
    
            //construction of the second array
            let lettersFound = [];
            letters.forEach(arr =>{lettersFound.push(" _")});
            console.log("the word has "+lettersFound.length+" letters");
            console.log("Good Luck!")
            lettersFound.forEach(arr=>{console.log(arr)});
    
    
        //those "string" will be used to check if the guessWord and the WordFound are the same
        let stringTab = "";
        let stringFound = "";
        let count = 0;
        const letterFalse = [];
            //tableaucacher.forEach(lettre =>{stringTab +=lettre}) other solution to put the letters in the string
            stringTab = letters.join("");
            while(stringTab != stringFound){
                stringFound = "";
                let string = prompt("entrez une lettre: ");
                if(!stringTab.includes(string.toUpperCase())){
                    letterFalse.push(string.toUpperCase());
                    let letterFalseSet = new Set(letterFalse);
                    for(let item of letterFalseSet){console.log("There are no "+item)}
                }else{
                    for(let i=0;i<letters.length;i++){
                        if(string.toUpperCase() === letters[i]){
                            lettersFound[i]=string.toUpperCase();
                        }
                    }
                }
                stringFound = lettersFound.join("")
                console.log(stringFound);
                count++;
            }
            console.log("Congratulation !!")
            console.log("you found the word in "+count+" trials !")
    })
})()