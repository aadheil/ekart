const prompt = require('prompt-sync')();
const productA_price=20
const productB_price=40
const productC_price=50
var discount_type=""
var choose_productA=prompt("Enter the quanitiy of product A: ")
var choose_productB=prompt("Enter the quanitiy of product B: ")
var choose_productC=prompt("Enter the quanitiy of product C: ")
// var total_priceafter
var total_product_price=(Number(choose_productA)*20)+(Number(choose_productB)*40)+(Number(choose_productC)*50)

var total_price=(Number(choose_productA)*20)+(Number(choose_productB)*40)+(Number(choose_productC)*50)
var total_quantity=(Number(choose_productA))+(Number(choose_productB))+(Number(choose_productC))
// console.log(total_price);
// console.log(total_quantity);


const discount=(choose_productA,choose_productB,choose_productC,total_price,total_quantity)=>{
    // console.log(choose_productA,choose_productB,choose_productC,total_price,total_quantity);
    if(total_quantity>30){
        if(choose_productA>15||choose_productB>15||choose_productC>15){
            discount_type="FLAT_50"
            // console.log(total_price);
        } 
    }
    else if(total_quantity>20){
        discount_type="FLAT_10"
        // console.log(total_price);
    }
    else if(total_price>200){
        discount_type="FLAT_10"
        // console.log(total_price);
    }
    else if(total_quantity>10){
        discount_type="FLAT_5 "
        // console.log(total_price);
    }
    else{
        discount_type="NO DISCOUNT APPLIED"
    }

}
discount(choose_productA,choose_productB,choose_productC,total_price,total_quantity)


var wrap=prompt("Do you want to wrap the gift? . Enter 'YES' for wrapping . else Enter 'NO' ")
var wrap_price
if(wrap=="YES"){
    wrap_price=1
}
else{
    wrap_price=0
}

var shipping_fees=(total_quantity/10)*5
console.log(shipping_fees);

console.log("Selected Products:",'Product A:',choose_productA,'Product B:',choose_productB,'Product C:',choose_productC );
console.log("Total amount of the product: ",total_product_price);
console.log("Discount Applied: ",discount_type);
if(discount_type=="FLAT_50"){
    var total_product_price=(50/100)*total_product_price
    console.log("Sub Total: ",total_product_price);
}
else if(discount_type=="FLAT_10"){
    var total_product_price=(90/100)*total_product_price
    console.log("Sub Total: ",total_product_price);
}

if(discount_type=="FLAT_5"){
    var total_product_price=(95/100)*total_product_price
    console.log("Sub Total: ",total_product_price);
}

console.log("Shiping fee: ",shipping_fees);
console.log("Gift wrap fee: ",wrap_price);
var total=total_product_price+Number(shipping_fees)+Number(wrap_price)
console.log("Total: ",total);
