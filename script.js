const quotes = [
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts."
  // Add more quotes as needed
];

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteDisplay = document.getElementById('quoteDisplay');
  quoteDisplay.textContent = quotes[randomIndex];
}
