




// memory section
document.getElementById('memory8gb').addEventListener('click',function(){
    const extraMemorycost=document.getElementById('Extra-Memory-Cost');
    const exta=extraMemorycost.innerText=parseInt(0);
});
document.getElementById('memory16gb').addEventListener('click',function(){
    const extraMemorycost=document.getElementById('Extra-Memory-Cost');
    const extacostText=extraMemorycost.innerText=parseInt(180);
});

// storage section
document.getElementById('freeStorage').addEventListener('click',function(){
    const extraMemorycost=document.getElementById('Extra-Storage-Cost');
    const exta=extraMemorycost.innerText=parseInt(0);
});
document.getElementById('storage512').addEventListener('click',function(){
    const extraMemorycost=document.getElementById('Extra-Storage-Cost');
    const exta=extraMemorycost.innerText=parseInt(100);
});
document.getElementById('storageItb').addEventListener('click',function(){
    const extraMemorycost=document.getElementById('Extra-Storage-Cost');
    const exta=extraMemorycost.innerText=parseInt(180);
});

// delivery section


document.getElementById('freeDelivery').addEventListener('click',function(){
    const extraMemorycost=document.getElementById('Delivery-Charge')
    const exta=extraMemorycost.innerText=parseInt(0);
});
document.getElementById('deliveryWithCharge').addEventListener('click',function(){
    const extraMemorycost=document.getElementById('Delivery-Charge')
    const exta=extraMemorycost.innerText=parseInt(20);
   
});

var bestPrice =document.getElementById('Delivery-Charge').addEventListener('click', function(){

});
// var bestPricetext=bestPrice.innerText;
// var toooo =bestPricetext + exta;
// // calculate Total

// function calculateTotal() {
//     var bestPrice =document.getElementById('best-price');
//     var extamemoryCost = document.getElementById('Extra-Memory-Cost');
//     var extastorageCost = document.getElementById('Extra-Storage-Cost');
//     var delivery = document.getElementById('delivery-charge');
//     var totalPrice = bestPrice + extamemoryCost + extastorageCost +delivery;
//     document.getElementById('total-price').innerText = totalPrice;
//     document.getElementById('allTotal-price').innerText = totalPrice;
// };
// calculateTotal();


// promoCode batton
const btn =document.getElementsByClassName('promobtn');
for(const item of btn){
    item.addEventListener('click',function(){
        document.getElementById('promoCode').
        remove(promoCode)
    });
};
