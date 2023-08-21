document.getElementById('coupon-apply').addEventListener('click', function () {
    const inputCoupon = document.getElementById('input-coupon');
    const inputCouponValue = inputCoupon.value;

    if (inputCouponValue === 'SELL20') {        
        calculateDiscount = total * .2;
    }
    printCalculation()
})