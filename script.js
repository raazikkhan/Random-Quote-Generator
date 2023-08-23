const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
    "The best way to predict the future is to create it. - Peter Drucker",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The journey of a thousand miles begins with one step. - Lao Tzu"
  ];
  
  const quoteElement = document.getElementById("quote");
  const newQuoteButton = document.getElementById("new-quote");
  
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote;
  }
  
  newQuoteButton.addEventListener("click", generateRandomQuote);
  
  // Generate a random quote when the page loads
  generateRandomQuote();
  