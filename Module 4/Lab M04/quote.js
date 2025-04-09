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
 
 async function fetchQuotes(topic, count) {
    const url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        const quotesDiv = document.getElementById("quotes");
        quotesDiv.innerHTML = ""; // Clear previous quotes

        if (data.error) {
            quotesDiv.innerHTML = `<div>${data.error}</div>`;
            return;
        }

        const quoteList = document.createElement("ol");
        data.forEach(quoteObj => {
            const listItem = document.createElement("li");
            listItem.textContent = `${quoteObj.quote} - ${quoteObj.source}`;
            quoteList.appendChild(listItem);
        });

        quotesDiv.appendChild(quoteList);
    } catch (error) {
        console.error("Error fetching quotes:", error);
        document.getElementById("quotes").innerHTML = "<div>Failed to load quotes.</div>";
    }
}


    
 
    // TODO: Remove the call to showAnonymousQuotes()

 }
 