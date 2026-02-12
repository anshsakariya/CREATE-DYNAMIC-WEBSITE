let realData = [];
let quotesData = {};
let quoteText = "Unavailable";
// Function to tweet the current quote
const openTweet = () => {
  let tweet_post = `https://wa.me/?text=${quoteText}`;
  window.open(tweet_post);
};

// Function to get a new quote
const getNewQuotes = () => {
  let r_num = Math.floor(Math.random() * 20);
  quotesData = realData[r_num];
  if (quotesData) {
    quoteText = quotesData.text ?? "Unknown";
    quotes.innerText = `${quotesData.text}`;
    author.innerText = quotesData.author || "Unknown";
  }
};

// Function to fetch quotes from the API
const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  console.log("check");
  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuotes(); // Call getNewQuotes after realData is populated
  } catch (error) {
    console.log(error);
  }
};

// Event listener for button click to get new quote
document.getElementById("Tweet").addEventListener("click", openTweet);
document.getElementById("newQuoteButton").addEventListener("click",getQuotes)

