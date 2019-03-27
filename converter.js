function FtoC (farenheit) {
    var C = (farenheit-32) * (5/9);
    return C;
}
function MtoK (miles) {
    var K = miles * 1.6;
    return K;
}
function OtoG (oz) {
    var g = oz * 28.35;
    return g;toFixed(3);
}
function isValid(val,floor) {
    if (val < floor) {
        return false;
    }
    return true;
}

