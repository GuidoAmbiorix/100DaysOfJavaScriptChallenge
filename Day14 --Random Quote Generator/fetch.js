const btn = document.querySelector('.get-quotes');
btn.addEventListener('click',getQuotes);
const number = document.querySelector('#number');
const ShowQuotes = document.querySelector('.quotes');
const URL = "https://type.fit/api/quotes";


 async function getQuotes(e){
    e.preventDefault();
    if(number.value.length === 0){alert('Please, enter a number');}
    else{

        fetch(URL).then(function(response){
            return response.json();
        }).then(function(data){
           
            data = shuffle(data);

            let output = "";
            for(let i=0;i<data.length;i++){
                if(i == number.value){break;}
                output += `
                <li>Quote: ${data[i].text}</li>
                <li>Author: ${data[i].author}</li>
                <hr>
                `;
            }
            ShowQuotes.innerHTML = output;
        })
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


