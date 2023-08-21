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