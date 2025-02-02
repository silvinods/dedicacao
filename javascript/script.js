function toggleQuote() {
    const quote = document.getElementById('quote');
    if (quote.style.display === "none") {
        quote.style.display = "block";
    } else {
        quote.style.display = "none";
    }
}