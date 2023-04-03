
fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1').then(async(result) => {
  // результат запроса
  if (result.status === 200 && result.ok) {
    // превращение в JSON
    return result.json()
  }
}).then((JSON_DATA) => {
  // вывод данных
  console.log('Список получен: ', JSON_DATA);
  // действия с данными...
}).catch((error) => {
  // обработка ошибок
  console.error('Ошибка получения списка: ', error);
})



