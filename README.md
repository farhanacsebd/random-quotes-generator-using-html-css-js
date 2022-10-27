### Random Quotes Generator
#### main function
```javascript
quoteBtn.addEventListener('click',function(){

    let author = Math.floor(Math.random() * quotes.length)
    console.log(author);
    
    
    quoteText.innerHTML = quotes[author].quote;
    authorName.innerHTML = quotes[author].author;
})
```
#### copy option code:
```javascript
copyBtn.addEventListener('click',function(){
    navigator.clipboard.writeText(quoteText.innerHTML);
    alert('copied')
});
```
#### twitter linkup code:
```javascript
twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});
```
