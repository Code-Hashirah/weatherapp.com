// Function to fetch weather data for each city 
function showCaption(button) {
    let town = button.innerText;
    alert("Weather for: " + button.innerText);
    document.getElementById('Town').innerHTML='';
document.getElementById('Town').innerHTML=town;
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=c900f9d4689c4f91acf105519252004&q=${town}&aqi=yes`)
    .then(res => res.json())
    .then(res => {
        console.log(res);
        let forecasts = [];
        forecasts[0] = res.forecast.forecastday[0];

        let div4 = document.getElementById('div4');
        
        // Clear existing content before appending new data
        div4.innerHTML = ''; // This will remove any existing content from div4

        div4.setAttribute('class', 'w-100 row ps-4');
        
        // Loop through arrays to fetch data
        for (let i = 0; i < 24; i++) {
            let wForeCast = forecasts[0].hour[i];
            console.log(JSON.stringify(wForeCast));

            let condition = wForeCast.condition.text;
            let img = wForeCast.condition.icon;
            let city = wForeCast.city;
            let time = wForeCast.time;
            let tempC = wForeCast.temp_c;
            let humidity = wForeCast.humidity;

            let div1 = document.createElement('div');
            div1.setAttribute('class', 'col-md-4');

            // Creating elements
            let hTag = document.createElement('h3');
            let pTagTime = document.createElement('p');
            let pTagTemp = document.createElement('p');
            let pTagHum = document.createElement('p');
            let imgTag = document.createElement('img');

            // Setting values
            hTag.innerHTML = condition;
            pTagTime.innerHTML = time;
            pTagTemp.innerHTML = "Temperature is " + tempC + " Celsius";
            pTagHum.innerHTML = "Humidity is " + humidity;
            imgTag.src = img;

            // Setting the attributes
            hTag.setAttribute('class', 'card-title');
            pTagTime.setAttribute('class', 'card-text');
            pTagTemp.setAttribute('class', 'card-text');
            pTagHum.setAttribute('class', 'card-text');
            imgTag.setAttribute('class', 'img');

            // Appending the elements
            div1.append(imgTag);
            div1.append(hTag);
            div1.append(pTagTime);
            div1.append(pTagTemp);
            div1.append(pTagHum);
            div4.append(div1);
        }
    });
}

alert("Hey there you Listener, This is a real thing");