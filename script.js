// Get the element with the ID 'time' to display the last update time
let Htime = document.getElementById('time');

// Function to fetch Bitcoin data from the API and update the DOM
async function GetAllMovies() {
    // Fetch Bitcoin data from the API
    const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    
    // Convert the response to JSON format
    const data = await response.json();

    // Parse and display the last update time
    let datetime = new Date(data.time.updated);
    let datatimearry = datetime.toString().split(" ");
    datatimearry.slice(0, 4).forEach(element => {
        Htime.innerHTML += " " + element;
    });
    Htime.innerHTML += " "+datatimearry.slice(4,5)
    Htime.style.fontSize = "100%";
    console.log(datetime)
    // Extract Bitcoin price information
    let bpi = await data.bpi;
    let co = document.querySelector("#coins");

    // Get the keys of the Bitcoin price information
    let keys = Object.keys(bpi);

    // Loop through each key and display the Bitcoin details
    keys.forEach(element => {
        let symboll = bpi[element]['symbol'];
        let code = bpi[element]['code'];
        let rate = bpi[element]['rate'];
        let description = bpi[element]['description'];

        

        // Append Bitcoin details to the 'coins' element
        co.innerHTML += `<li class="list-group-item">${code} (${symboll}) <p>${description}</p> <h5>${rate}</li>`;
    });
}

// Call the function to fetch and display Bitcoin data
GetAllMovies();
// to refresh the page each minit
setTimeout(function(){
    location.reload();
}, 60000); 