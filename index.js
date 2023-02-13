const searchQueryElement = document.querySelector('#search-query');
const searchResultElements = document.querySelector('#search-results')

searchQueryElement.addEventListener('keyup', function() {
    searchResultElements.innerHTML = ''
    fetch('data.json')
    .then((response) => {return response.json()})
    .then((json) => {
        const searchQueryElementValue = searchQueryElement.value.toLowerCase() 
        for(let i=0;i<json['results'].length;i++){
            const artistName = json['results'][i]['artistName'] 
            const trackName = json['results'][i]['trackName']
            if(searchQueryElementValue.toLowerCase() === artistName.toLowerCase() || searchQueryElementValue.toLowerCase() == trackName.toLowerCase()){
                const searchResult = document.createElement('div')
                searchResult.innerHTML = `Artist name: ${artistName}, track name: ${trackName}`
                searchResult.classList.add('search-result')
                searchResultElements.appendChild(searchResult)
            }

        if((i === json['results'].length - 1) && (searchResultElements.innerHTML === '')) searchResultElements.innerHTML = 'No results'
        }
    })
})