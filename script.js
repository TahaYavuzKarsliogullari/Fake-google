function searchGoogle() {
    var searchTerm = document.getElementById('search-input').value;
    window.open('https://www.google.com/search?q=' + encodeURIComponent(searchTerm), '_blank');
}
