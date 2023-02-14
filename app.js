document.getElementById('apply').addEventListener('click', function() {
    const regularPrice = document.getElementById('price');
    const regularPriceString = regularPrice.innerText;
    const price = parseFloat(regularPriceString);


    const couponFieldValue = document.getElementById('coupon');
    const couponField = couponFieldValue.value;
    // const couponValue = parseFloat(couponField);
    couponFieldValue.value = '';

    const pay = document.getElementById('pay');

    if (couponField === 'DISC30') {
        const newPrice = price * (30 / 100);
        const discountPrice = price - newPrice;
        pay.innerText = discountPrice;

    } else {
        alert('Coupon Invalid.')
    }
})