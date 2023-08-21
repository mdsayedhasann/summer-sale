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