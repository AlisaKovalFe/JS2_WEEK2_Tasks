let symbols = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', '.', ',', '—', '!'];
// Смещение
let shift = 10;
// Закодированное сообщение
let encodedSymbols = [8, 28, 36, 52, 56, 40, 23, 31, 56, 39, 38, 28, 48, 52, 58, 56, 38, 27, 32, 37, 56, 40, 23, 31, 56, 39, 38, 41, 39, 32, 57];
// Раскодированное сообщение
let decodedMessage = '';
const decode = (symbols, encodedSymbols) =>{
  for (let i = 0;  i < encodedSymbols.length; i++){
      decodedMessage += symbols[encodedSymbols[i]+shift];
        if(encodedSymbols[i] + shift > symbols.length){
            decodedMessage = symbols[encodedSymbols[i]+shift - symbols.length];
        } 
  }
    return decodedMessage;  
}
  console.log(decode(symbols, encodedSymbols));