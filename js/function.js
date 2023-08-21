let total = parseFloat(0);
let calculateDiscount = parseFloat(0);
let finalTotal = 0;
const getPreviousTotal = document.getElementById('previous-total');

function addToCart(target) {

    const productName = target.childNodes[3].childNodes[7].innerText;
    const selectedProductList = document.getElementById('selected-product-list');

    const count = selectedProductList.childElementCount;
    const h3 = document.createElement('h3');
    h3.classList.add('font-semibold', 'text-xl', 'py-2')
    h3.innerHTML = `${count + 1}. ${productName}`

    selectedProductList.appendChild(h3)



    
    const previousTotalString = getPreviousTotal.innerText;
    const previousPtotal = parseFloat(previousTotalString);


    const productPrice = parseFloat(target.childNodes[3].childNodes[9].childNodes[0].innerText);
    total = previousPtotal + productPrice;
    

    // const inputCoupon = document.getElementById('input-coupon');
    const couponApply = document.getElementById('coupon-apply');

    if (total > 200) {
        couponApply.removeAttribute('disabled');
        couponApply.style.backgroundColor = '#e527b2';
        console.log(couponApply.classList);

    }



    printTotal()



    // Final Total Count

    const finalTotal = document.getElementById('final-total');
    const finalTotalString = finalTotal.innerText;
    // const finalTotalAmount = parseFloat(finalTotalString);
    // finalTotal.innerText = total - calculateDiscount.toFixed(2);
    // const calculateFinalTotal = total - calculateDiscount;
    // const calculateFinalTotalAmount = parseFloat(calculateFinalTotal)
    // console.log(calculateFinalTotalAmount);
}


// Coupon & Discount 

document.getElementById('coupon-apply').addEventListener('click', function () {
    const inputCoupon = document.getElementById('input-coupon');
    const inputCouponValue = inputCoupon.value;
    // console.log();



    if (inputCouponValue === 'SELL20') {
        // Discount Calculation
        const getDiscount = document.getElementById('discount');
        calculateDiscount = total * .2;
        getDiscount.innerText = calculateDiscount.toFixed(2);
    }

    printTotal()


})


function printTotal() {
    getPreviousTotal.innerText = total.toFixed(2);
    finalTotal = total - calculateDiscount;
    console.log(finalTotal);

    const final = document.getElementById('final-total');
    // const finalString = final.innerText;
    // const finalAmount = parseFloat(finalString)

    final.innerText = finalTotal;

    if (finalTotal > 0) {
        const makePaymentButton = document.getElementById('make-payment')
        makePaymentButton.removeAttribute('disabled');
        makePaymentButton.style.backgroundColor = '#E527B2'
    }

}

// const closeButton = document.getElementById('goHome');
// closeButton.addEventListener('click', goHome

// )

// function goHome() {
//     total = 0;
//     calculateDiscount = 0;
//     printTotal();
// }

const closeButton = document.getElementById('goHome');
closeButton.addEventListener('click', function(){
    total = 0;
    calculateDiscount = 0;
    finalTotal = 0
    printTotal();
})

// function goHome() {
//     total = 0;
//     calculateDiscount = 0;
//     printTotal();
// }