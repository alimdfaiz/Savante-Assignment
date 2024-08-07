const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');

const examplePrompts = [
  "Fitness influencers in NYC",
  "Tech gadget reviewers",
  "Vegan recipe creators",
  "Fashion bloggers in LA",
  "Travel vloggers",
  "DIY home projects"
];

// Function to get random prompt
function getRandomPrompt() {
  const randomIndex = Math.floor(Math.random() * examplePrompts.length);
  return examplePrompts[randomIndex];
}

// Function to update search results
function updateSearchResults(prompt) {
  // Simulate a search result update
  const results = [
    `${prompt} - Result 1`,
    `${prompt} - Result 2`,
    `${prompt} - Result 3`,
    `${prompt} - Result 4`
  ];

  // Clear previous results
  searchResults.innerHTML = '';

  // Append new results
  results.forEach(result => {
    const div = document.createElement('div');
    div.className = 'search-item';
    div.textContent = result;
    searchResults.appendChild(div);
  });
}

// Event listener for search bar input
searchBar.addEventListener('input', (e) => {
  const query = e.target.value;
  if (query.length > 0) {
    updateSearchResults(query);
  } else {
    updateSearchResults(getRandomPrompt());
  }
});

// Initial random prompt
searchBar.placeholder = getRandomPrompt();
updateSearchResults(searchBar.placeholder);

// Change placeholder every 5 seconds
setInterval(() => {
  if (!searchBar.value) {
    searchBar.placeholder = getRandomPrompt();
    updateSearchResults(searchBar.placeholder);
  }
}, 5000);
