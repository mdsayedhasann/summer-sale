let total = parseFloat(0);
let calculateDiscount = parseFloat(0);
let finalTotal = parseFloat(0);


const getDiscount = document.getElementById('discount');
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
    

    const couponApply = document.getElementById('coupon-apply');

    if (total > 200) {
        couponApply.removeAttribute('disabled');
        couponApply.style.backgroundColor = '#e527b2';
        console.log(couponApply.classList);

    }
    printCalculation()
}


document.getElementById('coupon-apply').addEventListener('click', function () {
    const inputCoupon = document.getElementById('input-coupon');
    const inputCouponValue = inputCoupon.value;

    if (inputCouponValue === 'SELL20') {        
        calculateDiscount = total * .2;
    }
    printCalculation()
})


function printCalculation() {
    getDiscount.innerText = calculateDiscount.toFixed(2);
    getPreviousTotal.innerText = total.toFixed(2);
    finalTotal = total - calculateDiscount;
    finalTotal = finalTotal.toFixed(2);


    const final = document.getElementById('final-total');
    

    final.innerText = finalTotal;

    const makePaymentButton = document.getElementById('make-payment')
    if (finalTotal > 0) {
        makePaymentButton.removeAttribute('disabled');
        makePaymentButton.style.backgroundColor = '#E527B2'
    }else{
        makePaymentButton.setAttribute('disabled', true);
        makePaymentButton.style.backgroundColor = '#ddd';
    }

}

const closeButton = document.getElementById('goHome');
closeButton.addEventListener('click', function(){
    total = 0;
    calculateDiscount = 0;
    finalTotal = 0
    printCalculation();
})