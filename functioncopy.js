function addToCart(target) {

    const productName = target.childNodes[3].childNodes[7].innerText;
    const selectedProductList = document.getElementById('selected-product-list');

    const count = selectedProductList.childElementCount;
    const h3 = document.createElement('h3');
    h3.classList.add('font-semibold', 'text-xl', 'py-2')
    h3.innerHTML = `${count + 1}. ${productName}`

    selectedProductList.appendChild(h3)


    let total = parseFloat(0);
    const getPreviousTotal = document.getElementById('previous-total');
    const previousTotalString = getPreviousTotal.innerText;
    const previousPtotal = parseFloat(previousTotalString);


    const productPrice = parseFloat(target.childNodes[3].childNodes[9].childNodes[0].innerText);
    total = previousPtotal + productPrice;
    getPreviousTotal.innerText = total.toFixed(2);



    // Coupon & Discount 

    const inputCoupon = document.getElementById('input-coupon');
    const inputCouponValue = inputCoupon.value;
    if (total > 200) {
        // Discount Calculation
        const getDiscount = document.getElementById('discount');
        const calculateDiscount = total * .2;
        getDiscount.innerText = calculateDiscount.toFixed(2);
    }


    // Final Total Count

    const finalTotal = document.getElementById('final-total');
    const finalTotalString = finalTotal.innerText;
    // const finalTotalAmount = parseFloat(finalTotalString);
    // finalTotal.innerText = total - calculateDiscount.toFixed(2);
    // const calculateFinalTotal = total - calculateDiscount;
    // const calculateFinalTotalAmount = parseFloat(calculateFinalTotal)
    // console.log(calculateFinalTotalAmount);
}