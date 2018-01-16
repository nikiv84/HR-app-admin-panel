export function dateFormatter(dateData) {
    var date = new Date(dateData);

    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    return dd + '.' + mm + '.' + yyyy + '.';
}

export function ucFirst(string) {
    if (typeof string !== "string") return "";
    return string.charAt(0).toUpperCase() + string.substr(1);
}