// Collection Of Quote
const quotes = [{
    quote: `I'm not a great programmer; I'm just a good programmer with great habits.`,
    author: `- Kent Beck`
}, 
{
    quote: `Talk is cheap. Show me the code.`,
    author: `- Linus Torvalds`
}, 
{
    quote: `Programs must be written for people to read, and only incidentally for machines to execute.`,
    author: `- Harold Abelson`
}, 
{
    quote: `Truth can only be found in one place: the code.`,
    author: `- Robert C`
}, 
{
    quote: `Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.`,
    author: `- Muhammad Waseem`
}, 
{
    quote: `How you look at it is pretty much how you'll see it`,
    author: `- Steve Jobs`
}, 
{
    quote: `The most disastrous thing that you can ever learn is your first programming language.`,
    author: `- Alan Kay`
}, {
    quote: `The most important property of a program is whether it accomplishes the intention of its user.`,
    author: `- C.A.R. Hoare`
}, 
{
    quote: `i am committed to push my branch to the master.`,
    author: `- Halgurd Hussein`
}, 
{
    quote: `Coding is not just code, that is a live thing to serve everyone!`,
    author: `- Ming Song`
},
{
    quote: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster"
  },
  {
    quote: "Peace comes from within. Do not seek it without.",
    author: "Buddha"
  },
  {
    quote: "What you give is what you get.",
    author: "Byron Pulsifer"
  },
  {
    quote: "We can only learn to love by loving.",
    author: "Iris Murdoch"
  },
  {
    quote: "Life is change. Growth is optional. Choose wisely.",
    author: "Karen Clark"
  },
  {
    quote: "You'll see it when you believe it.",
    author: "Wayne Dyer"
  },
  {
    quote: "The undertaking of a new action brings new strength.",
    author: "Richard Evans"
  },
  {
    quote: "Courage is going from failure to failure without losing enthusiasm.",
    author: `Winston Churchill`
  },
  {
    quote: "Society develops wit, but its contemplation alone forms genius.",
    author: "Madame de Stael"
  },
  {
    quote: "To lead people walk behind them.",
    author: "Lao Tzu"
  },
  {
    quote: "Having nothing, nothing can he lose.",
    author: "William Shakespeare"
  },
  {
    quote: "Trouble is only opportunity in work clothes.",
    author: "Henry J. Kaiser"
  },
  {
    quote: "A rolling stone gathers no moss.",
    author: "Publilius Syrus"
  },
  {
    quote: "Ideas are the beginning points of all fortunes.",
    author: "Napoleon Hill"
  },
  {
    quote: "Everything in life is luck.",
    author: "Donald Trump"
  },
  {
    quote: "Doing nothing is better than being busy doing nothing.",
    "author": "Lao Tzu"
  },
  {
    quote: "Trust yourself. You know more than you think you do.",
    author: "Benjamin Spock"
  },
  {
    quote: "Study the past, if you would divine the future.",
    author: "Confucius"
  },

]

const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const authorName = document.querySelector(".name");
const speechBtn = document.querySelector(".speech");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

quoteBtn.addEventListener('click',function(){


    let author = Math.floor(Math.random() * quotes.length)
    console.log(author);
    
    
    quoteText.innerHTML = quotes[author].quote;
    authorName.innerHTML = quotes[author].author;
})


copyBtn.addEventListener('click',function(){
    navigator.clipboard.writeText(quoteText.innerHTML);
    alert('copy')
})