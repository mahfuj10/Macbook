// declare a varible
const memoryCost = document.getElementById('memory-cost');
const totalPrice = document.getElementById('total-price');
const amountTotal = document.getElementById('total-amount');
const productPrice = document.getElementById('product-price');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const inputField = document.getElementById('input-field');

buttonListener()

function updateTotalCost(){  //update cost  & solved mathematical problem

    totalPrice.innerText = parseInt(memoryCost.innerText) + parseInt(productPrice.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCost.innerText);
   
    amountTotal.innerText = totalPrice.innerText;
}

function promoCode(click){  //pomo code function

    if(click.value.toLowerCase() == 'stevekaku'){  
    
    const discountPrice = parseInt(totalPrice.innerText) * 20;
    const newPrice = discountPrice / 100;
    amountTotal.innerText = totalPrice.innerText - newPrice;
    }
    
    else{
    alert('your promo code is wrong please try again !');
    }
    inputField.value =''; 
}

function buttonListener(){  //add event listener in button

    const buttons = document.getElementsByClassName('button-1');
    
    for(const button of buttons){
    button.addEventListener('click',function(event){
   
    if (event.target.innerText == "16GB unified memory") {
        memoryCost.innerText = 180;  
    }
   else if (event.target.innerText == "8GB unified memory") {
        memoryCost.innerText = 0;  
    }
   else if (event.target.innerText == "256GB SSD storage") {
        storageCost.innerText = 0;  
    }
   else if (event.target.innerText == "512GB SSD storage") {
        storageCost.innerText = 100;  
    }
   else if (event.target.innerText == "1TB SSD storage") {
        storageCost.innerText = 180;  
    }
   else if (event.target.innerText == "Friday, Aug 28 FREE Prime Delivery") {
        deliveryCost.innerText = 0;  
    }
   else if (event.target.innerText == "Friday, Aug 23 Delivery charge $20") {
        deliveryCost.innerText = 20;  
    } 
    updateTotalCost();
})
}
}
//promo code button
document.getElementById('submit-button').addEventListener('click',function(){
    
     promoCode(inputField);
});