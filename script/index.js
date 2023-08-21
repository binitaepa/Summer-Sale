let total=0;

function handleFirstProduct(){
const firstCard=handleProduct('first-product-money');
total= firstCard + parseFloat(total);

document.getElementById("total").innerText = total.toFixed(2);
addToCalculationEntry("product-k.acc");


}

function handleSecondProduct(){
    const secondCard=handleProduct('second-product-money');

total= secondCard + parseFloat(total);

document.getElementById("total").innerText = total.toFixed(2);
addToCalculationEntry("product-k.acc");

}

function handleThirdProduct(){
    const thirdCard =handleProduct('third-product-money');
total = thirdCard + parseFloat(total);
document.getElementById("total").innerText = total.toFixed(2);
addToCalculationEntry("home-cooker");

}
function handleFourthProduct(){
    const thirdCard =handleProduct('fourth-product-money');
total = thirdCard + parseFloat(total);
document.getElementById("total").innerText = total.toFixed(2);
addToCalculationEntry("Sports-cap");
}
function handleFifthProduct(){
    const thirdCard =handleProduct('fifth-product-money');
total = thirdCard + parseFloat(total);
document.getElementById("total").innerText = total.toFixed(2);
addToCalculationEntry("full-jersey");
}
function handleSixthProduct(){
    const thirdCard =handleProduct('sixth-product-money');
total = thirdCard + parseFloat(total);
document.getElementById("total").innerText = total.toFixed(2);
addToCalculationEntry("sports-cates");
}



function handleProduct(fieldId) {
   
 
  const product=document.getElementById(fieldId);
const productText = product.innerText;
const value = parseFloat(productText);
return value;
  
}

function addToCalculationEntry(text){
    if(parseFloat(total)>0){
        const btn =document.getElementById('btn-make-purchase');
        btn.disabled = false;
    
    }
    if(parseFloat(total)>=200){
     const btn=document.getElementById('btn-apply');
     btn.disabled =false;
    }
    

        const selectedItemContainer = document.getElementById("selected-items");
    const itemNameGet = document.getElementById(text);
    const itemName = itemNameGet.innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);
}

function buttonApply(){
    const inputValue= document.getElementById("input-coupon");
    const discountValue =document.getElementById('total');
    if(parseFloat(total)>=200 && inputValue.value === 'SELL200' ){
       
        const discountText= discountValue.innerText;
        const discount= parseFloat(discountText);
        const discountItem= discount * 0.20;
        document.getElementById("discount").innerText = discountItem.toFixed(2);
        const totalPrice= parseFloat(discount)-parseFloat(discountItem);
        document.getElementById("net-total").innerText = totalPrice.toFixed(2);

    }
else
{ alert('Please Use correct code');
const value=document.getElementById('input-coupon');
value.value=" ";

}}

function goHome() {
    document.getElementById('total').innerText="0.00";
    document.getElementById('discount').innerText="0.00";
    document.getElementById('net-total').innerText="0.00";
    document.getElementById('input-coupon').value=" ";
    document.getElementById('selected-items').innerHTML=" ";
    const btn=document.getElementById('btn-apply');
     btn.disabled = true;
     const btn2 =document.getElementById('btn-make-purchase');
        btn2.disabled = true;
    document.getElementById('btn-make-purchase').disabled =true;

}   