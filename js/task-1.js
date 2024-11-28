function isEnoughCapacity(products, containerSize) {
    // Підсумовуємо всі товари в об'єкті
    let totalItems = 0;
    
    // Перебираємо всі ключі об'єкта і додаємо значення до totalItems
    for (let key in products) {
      totalItems += products[key];
    }
  
    // Порівнюємо загальну кількість товарів з контейнером
    return totalItems <= containerSize; // Якщо всі товари поміщаються, повертаємо true, інакше false
  }
  
  // Тестування функції
  
  console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
  ); // false
  
  console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
  ); // false
  
