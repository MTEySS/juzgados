function numberFormat(value, n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return parseFloat(value).toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

function mesNombre(n) {
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];

    return meses[n - 1];
}