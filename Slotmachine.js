let balance=1000
const symbols=["🍒","🍉","🍋","🔔","⭐"]
document.getElementById("btn1").addEventListener('click',function() {
    let bet=parseInt(document.getElementById("bet").value);
    const message=document.getElementById("message");

    if(isNaN(bet)||bet<0){
        message.textContent="Enter a valid bet Amount."
        return
    }

    if(bet>balance){
        message.textContent="Insuffecient Balance!!"
        return
    }
    balance -=bet;


    const slot1=symbols[Math.floor(Math.random()*symbols.length)];
    const slot2=symbols[Math.floor(Math.random()*symbols.length)];
    const slot3=symbols[Math.floor(Math.random()*symbols.length)];

    document.querySelector(".slot1").textContent = slot1;
    document.querySelector(".slot2").textContent = slot2;
    document.querySelector(".slot3").textContent = slot3;
    
    let payout=0;

    if(slot1 === slot2 && slot2 === slot3){
        switch (slot1){
            case "🍒":payout=bet*3;break;
            case "🍉" : payout=bet*4;break;
            case "🍋" :payout=bet*5;break;
            case "🔔" :payout=bet*10;break;
            case "⭐" :payout=bet*20;break;
        }
        message.textContent=`You won ₹${payout} 🥳🥳`
    }
    else{
        message.textContent=`You Loss the rount.Try Again!`
    }
    balance +=payout;
    document.getElementById("balance").textContent=balance;
})