// opdracht hello kiddo 

const checkAge = function (age) {
    return (age >= 18);
}

const greeting = function (age) {

    var adult = checkAge(age);
    let response;

    if (adult) {
        response = 'Hello There';
    } else { 
        response = 'Hello Kiddo';
    }
    return response;  
};

console.log(greeting(12));

// opdracht exercise 1A VAT calculations Goods 21%

const calcVatGoods = function (price) {
    var vat = price * 0.21;
    return vat;
}

const calcPrice = function (price) {
    var priceIncludingVat = calcVatGoods(price) + price;
    return priceIncludingVat;   
}

console.log(calcPrice(140));


// opdracht exercise 1B VAT calculation Food 9%

const calcVatfood = function (price) {
    var vat = price * 0.09;
    return vat;
}

const calcPrice2 = function (price) {
    var priceIncludingVat = calcVatfood(price) + price;
    return priceIncludingVat;    
}

console.log(calcPrice2(140));

// opdracht exercise 2A Reverse Calculation
const calcBasePriceGoods = function (price) {
    return (price / 1.21)
}

const calcVatGoods2 = function (price) {
    var basePrice = calcBasePriceGoods(price);
    var vat = price - basePrice; 
    return [basePrice, vat];
}

console.log(calcVatGoods2(100));

// opdracht exercise 2A Reverse Calculation
const calcBasePriceFood = function (price) {
    return (price / 1.09)
}

const calcVatFood = function (price) {
    var basePrice = calcBasePriceFood(price);
    var vat = price - basePrice; 
    return [basePrice, vat];
}

console.log(calcVatFood(4));
