const btn = document.querySelector('.get-quotes');
btn.addEventListener('click',getQuotes);
const number = document.querySelector('#number');
const ShowQuotes = document.querySelector('.quotes');



function getQuotes(e){
    e.preventDefault();

    if(number.value.length == 0){alert('Please, enter a number');}
    else{

        const https = new XMLHttpRequest();

        https.open("GET","https://type.fit/api/quotes",true);

       https.onload = function(){
           if(this.status === 200){
               const response = shuffle(JSON.parse(this.responseText));
               let output = "";

               for(let i=0;i<response.length;i++){
                   if(i == number.value){break;}
                   output += `
                   <li>Quote: ${response[i].text}</li>
                   <li>Author: ${response[i].author}</li>
                   <hr>
                   `;
               }

               ShowQuotes.innerHTML = output;
           }
       }
       https.send();
    }
}


// FUNCTION TO SHUFFLE QUOTES

function shuffle(quotes){
    let CI = quotes.length, tempValue, randomIndex;

    //While elements exist in the array
    while(CI >0){
        randomIndex = Math.floor(Math.random() *  CI);
        // DECREASE CI BY 1
        CI--;
        // SWAP THE KAST ELEMENT WITH CI
        tempValue = quotes[CI];
        quotes[CI] = quotes[randomIndex];
        quotes[randomIndex] = tempValue;
    }
    return quotes;
}



