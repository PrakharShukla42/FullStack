const container = document.querySelector(".container");

// Create search bar for college name or country search
const searchBar = document.createElement('input');
searchBar.setAttribute('type', 'text');
searchBar.setAttribute('placeholder', 'Enter a college name or a country to search...');
searchBar.classList.add('search-bar');
document.body.insertBefore(searchBar, container);

searchBar.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const query = event.target.value.trim();
        fetchColleges(query);
    }
});

function fetchColleges(query) {
    let URL = 'http://universities.hipolabs.com/search';
    
    // Modify URL based on query
    if (query) {
        if (isCountryName(query)) {
            URL += `?country=${query}`;
        } else {
            URL += `?name=${query}`;
        }
    }

    container.innerHTML = ''; // Clear previous results

    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            if (data.length === 0) {
                container.innerHTML = `<p>No colleges found${query ? ` for "${query}"` : ''}. Please try again or leave blank for all colleges.</p>`;
                return;
            }

            data.forEach(e => {
                const collegeDiv = document.createElement('div');
                collegeDiv.classList.add('college-item');

                const name = document.createElement('p');
                name.innerText = `Name: ${e.name}`;

                const countryName = document.createElement('p');
                countryName.innerText = `Country: ${e.country}`;

                const state = document.createElement('p');
                state.innerText = `State/Province: ${e["state-province"] || 'N/A'}`;

                const webpage = document.createElement('a');
                webpage.href = e.web_pages[0];
                webpage.innerText = 'Visit Website';
                webpage.target = '_blank';

                collegeDiv.appendChild(name);
                collegeDiv.appendChild(countryName);
                collegeDiv.appendChild(state);
                collegeDiv.appendChild(webpage);

                container.appendChild(collegeDiv);
            });
        })
        .catch(err => {
            console.error('Error fetching data:', err);
            container.innerHTML = `<p>An error occurred. Please try again later.</p>`;
        });
}

// Helper function to determine if input is a country name
function isCountryName(input) {
    // Basic check: if input contains spaces and seems like a name, treat it as a college name
    return !input.includes(' ') || input.length < 4;
}
