//  phone 1219

document.getElementById('btn-phone-plus').addEventListener("click", function () {
    const phonePlus = document.getElementById('phone-number-field');
    const phoneUpdatePlus = phonePlus.value;
    const update = parseInt(phoneUpdatePlus) + 1;
    // console.log(update);
    phonePlus.value = update;


    const PhonePrice = document.getElementById('phone-total');
    const totalPhonePrice = update * 1219;
    const updatePonePrice = PhonePrice.innerText;
    PhonePrice.innerText = totalPhonePrice;

    const newPrice = getElementByIdcal();



})

document.getElementById('btn-phone-minus').addEventListener('click', function () {

    const phoneMinus = document.getElementById('phone-number-field');
    const phoneUpdateMinus = phoneMinus.value;
    const finalUpdate = parseFloat(phoneUpdateMinus) - 1;
    phoneMinus.value = finalUpdate;


    const PhonePrice = document.getElementById('phone-total');
    const totalPhonePrice = finalUpdate * 1219;
    const updatePonePrice = PhonePrice.innerText;
    PhonePrice.innerText = totalPhonePrice;

    const newPrice = getElementByIdcal();

})



// phoneCase 59

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const casePlus = document.getElementById('case-number-field');
    const casePlusValue = casePlus.value;
    // console.log(casePlusValue);
    const casePlusValueUpdate = parseFloat(casePlusValue) - 1;
    casePlus.value = casePlusValueUpdate;


    const casePrice = document.getElementById('case-total');
    const caseAmount = casePlusValueUpdate * 59;
    const casePriceTotalValue = casePrice.innerText;
    // const casePriceTotal = 
    casePrice.innerText = caseAmount;



    const newPrice = getElementByIdcal();


})





document.getElementById('btn-case-plus').addEventListener('click', function () {
    const casePlus = document.getElementById('case-number-field');
    const casePlusValue = casePlus.value;
    // console.log(casePlusValue);
    const casePlusValueUpdate = parseFloat(casePlusValue) + 1;
    casePlus.value = casePlusValueUpdate;

    const casePrice = document.getElementById('case-total');
    const caseAmount = casePlusValueUpdate * 59;
    const casePriceTotalValue = casePrice.innerText;
    // const casePriceTotal = 
    casePrice.innerText = caseAmount;

    const newPrice = getElementByIdcal();


})


function getElementByIdcal() {

    const casePrice2 = document.getElementById('case-total');
    const casePlusValueString = casePrice2.innerText;
    const casePlusValue2 = parseFloat(casePlusValueString)

    const PhonePrice2 = document.getElementById('phone-total');
    const phonePlusValueString = PhonePrice2.innerText;
    const phonePlusValue = parseFloat(phonePlusValueString)

    const finalPrice = phonePlusValue + casePlusValue2;

    const subTotal = document.getElementById('sub-total');
    const subTotalVAlue = subTotal.innerText;
    subTotal.innerText = finalPrice;




    const taxAmount = document.getElementById('tax-amount');
    const taxAmountValue = taxAmount.innerText;
    // console.log(taxAmountValue);

    const currenttaxTotal = (finalPrice * 0.1).toFixed(2);
    const mainCurrentTotal = parseFloat(currenttaxTotal)
    console.log(mainCurrentTotal);
    taxAmount.innerText = mainCurrentTotal;

    const finalTotal = document.getElementById('final-total');
    const finalTotalValue = finalTotal.innerText;
    // const finalTotalString = parseFloat(finalTotalValue);
    const totalResult = mainCurrentTotal + finalPrice;
    finalTotal.innerText = totalResult;

}
