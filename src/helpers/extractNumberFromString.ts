export function extractNumberFromString(str: string) {
    str = str.trim();
    str = str.replace('%', '');
    const number = parseFloat(str);
    return number;
}