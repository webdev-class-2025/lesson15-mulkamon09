/**
 * Модуль карточки товара для интернет-магазина
 * Демонстрация работы с переменными, операторами и выражениями
 */

// === ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ ===
const productName = "Беспроводные наушники"; // Название товара
let price = 150.0; // Базовая цена товара в долларах
const discountPercentage = 10; // Процент скидки
const rating = 4.5; // Рейтинг товара
const maxRating = 5; // Максимальный возможный рейтинг
let isAvailable = true; // Наличие товара на складе

// === ВЫЧИСЛЕНИЯ И ОПЕРАЦИИ ===
// Арифметические операции
const discountAmount = price * (discountPercentage / 100);
const finalPrice = price - discountAmount;

// Логические операции
const hasDiscount = discountPercentage > 0;
const isHighRated = rating >= 4.0;
const canPurchase = isAvailable && finalPrice > 0;

// Тернарный оператор для статуса наличия
const availabilityStatus = isAvailable ? "В наличии" : "Нет в наличии";

// === ВЫВОД ИНФОРМАЦИИ В КОНСОЛЬ ===
console.log("=== Карточка товара ===");
console.log(`Название: ${productName}`);
console.log(`Цена: ${price.toFixed(2)}$`);
console.log(`Скидка: ${discountPercentage}%`);
console.log(`Цена со скидкой: ${finalPrice.toFixed(2)}$`);
console.log(`Рейтинг: ${rating} из ${maxRating}`);
console.log(`Наличие: ${availabilityStatus}`);
console.log("");

// === ИНФОРМАЦИЯ О ТИПАХ ПЕРЕМЕННЫХ ===
console.log("=== Типы переменных ===");
console.log(`Тип переменной productName: ${typeof productName}`);
console.log(`Тип переменной price: ${typeof price}`);
console.log(`Тип переменной discountPercentage: ${typeof discountPercentage}`);
console.log(`Тип переменной isAvailable: ${typeof isAvailable}`);
console.log(`Тип переменной rating: ${typeof rating}`);
console.log("");

// === ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ ===
console.log("=== Дополнительные данные ===");
console.log(`Есть скидка: ${hasDiscount}`);
console.log(`Высокий рейтинг: ${isHighRated}`);
console.log(`Можно приобрести: ${canPurchase}`);
console.log(`Сумма скидки: ${discountAmount.toFixed(2)}$`);
