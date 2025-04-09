window.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {
 
       // Get values from drop-downs
       const topicDropdown = document.querySelector("#topicSelection");
       const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
       const countDropdown = document.querySelector("#countSelection");
       const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
    
       // Get and display quotes
       fetchQuotes(selectedTopic, selectedCount);	   
    });
 });
 
 function showAnonymousQuotes(count) {
    let html = "<ol>";
    for (let c = 1; c <= count; c++) {
       html += `<li>Quote ${c} - Anonymous</li>`;
    }
    html += "</ol>";
 
    document.querySelector("#quotes").innerHTML = html
 }
 
 async function fetchQuotes(topic, count) {   
    // TODO: Modify to use Fetch API
    const url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;
    try {
       const response = await fetch(url);
       const data = await response.json();
       let html;
       if (data.error) {
          html = `Topic '${topic}' not found`;
       } else {
          // use ol li tags for quotes
          html = "<ol>";
          data.forEach((quote, index) => {
             html += `<li>${quote.quote} - ${quote.source}</li>`;
          });
          html += '</ol>';
       }
       document.getElementById('quotes').innerHTML = html;
    } catch (error) {
       document.getElementById('quotes').innerHTML = `Error fetching quotes: ${error.message}`;
    }
 }
 
    // TODO: Remove the call to showAnonymousQuotes()
 
 
 