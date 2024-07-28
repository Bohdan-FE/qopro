export function shortenAddress(str: string | null): string | null {
    if (!str) return null
    
    if (str.length <= 9) {
        return str;
    }
    const start = str.substring(0, 5);
    const end = str.substring(str.length - 4);
   
    return `${start}...${end}`;
}

export function formatNumber(input: string | null) {
    if (!input) return null
    
    let [integerPart, decimalPart] = input.split('.');

    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    if (decimalPart) {
        decimalPart = (parseFloat('0.' + decimalPart).toFixed(2)).split('.')[1];
    } else {
        decimalPart = '00';
    }

    return integerPart + '.' + decimalPart;
}