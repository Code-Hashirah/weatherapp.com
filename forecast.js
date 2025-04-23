// Damaturu
fetch('http://api.weatherapi.com/v1/forecast.json?key=c900f9d4689c4f91acf105519252004&q=Damaturu&aqi=yes')
.then(res=> res.json())
.then(res =>{
    // console.log(res.forecast)
    console.log(res.forecast.forecastday[0].hour[3])
    let forecasts=[];
    forecasts[0]=res.forecast.forecastday[0];
    console.log(forecasts[0].hour[0].condition)
    for(let i=0; i<24; i++){
        console.log("here = "+ JSON.stringify(forecasts[0].hour[i].condition));
    }
    let condition=res;
    let img=res.current.condition.icon;
    let city=res;
    let country=res.location.country;
    let tempC=res.current.feelslike_c;
    let tempF=res.current.feelslike_f;
    document.getElementById('condition').innerHTML=condition;
    document.getElementById('city').innerHTML=city;
    document.getElementById('img').src=img;
    document.getElementById('tempC').innerHTML=tempC;
    document.getElementById('tempF').innerHTML=tempF;
})

// Abuja
// fetch('http://api.weatherapi.com/v1/forecast.json?key=c900f9d4689c4f91acf105519252004&q=Abuja&aqi=no')
// .then(res=> res.json())
// .then(res =>{
//     console.log(res);
//     let condition1=res.current.condition.text;
//     let img1=res.current.condition.icon;
//     let city1=res.location.name;
//     let country1=res.location.country;
//     let tempC1=res.current.feelslike_c;
//     let tempF1=res.current.feelslike_f;
//     document.getElementById('condition1').innerHTML=condition1;
//     document.getElementById('city1').innerHTML=city1;
//     document.getElementById('img1').src=img1;
//     document.getElementById('tempC1').innerHTML=tempC1;
//     document.getElementById('tempF1').innerHTML=tempF1;
// })

// Lagos 
// fetch('http://api.weatherapi.com/v1/forecast.json?key=c900f9d4689c4f91acf105519252004&q=Lagos&aqi=no')
// .then(res=> res.json())
// .then(res =>{
//     console.log(res)
//     let condition2=res.current.condition.text;
//     let img2=res.current.condition.icon;
//     let city2=res.location.name;
//     let country2=res.location.country;
//     let tempC2=res.current.feelslike_c;
//     let tempF2=res.current.feelslike_f;
//     document.getElementById('condition2').innerHTML=condition2;
//     document.getElementById('city2').innerHTML=city2;
//     document.getElementById('img2').src=img2;
//     document.getElementById('tempC2').innerHTML=tempC2;
//     document.getElementById('tempF2').innerHTML=tempF2;
// })

// Lagos 
// fetch('http://api.weatherapi.com/v1/forecast.json?key=c900f9d4689c4f91acf105519252004&q=Oshogbo&aqi=yes')
// .then(res=> res.json())
// .then(res =>{
//     console.log(res)
//     let condition3=res.current.condition.text;
//     let img3=res.current.condition.icon;
//     let city3=res.location.name;
//     // let country2=res.location.country;
//     let tempC3=res.current.feelslike_c;
//     let tempF3=res.current.feelslike_f;
//     document.getElementById('condition3').innerHTML=condition3;
//     document.getElementById('city3').innerHTML=city3;
//     document.getElementById('img3').src=img3;
//     document.getElementById('tempC3').innerHTML=tempC3;
//     document.getElementById('tempF3').innerHTML=tempF3;
// })

// Kano 
// fetch('http://api.weatherapi.com/v1/forecast.json?key=c900f9d4689c4f91acf105519252004&q=Yola&aqi=yes')
// .then(res=> res.json())
// .then(res =>{
//     console.log(res)
//     let condition4=res.current.condition.text;
//     let img4=res.current.condition.icon;
//     let city4=res.location.name;
//     // let country2=res.location.country;
//     let tempC4=res.current.feelslike_c;
//     let tempF4=res.current.feelslike_f;
//     document.getElementById('condition4').innerHTML=condition4;
//     document.getElementById('city4').innerHTML=city4;
//     document.getElementById('img4').src=img4;
//     document.getElementById('tempC4').innerHTML=tempC4;
//     document.getElementById('tempF4').innerHTML=tempF4;
// })

// Portharcourt 
// fetch('http://api.weatherapi.com/v1/forecast.json?key=c900f9d4689c4f91acf105519252004&q=Port Harcourt&aqi=yes')
// .then(res=> res.json())
// .then(res =>{
//     console.log(res)
//     let condition5=res.current.condition.text;
//     let img5=res.current.condition.icon;
//     let city5=res.location.name;
//     let tempC5=res.current.feelslike_c;
//     let tempF5=res.current.feelslike_f;
//     document.getElementById('condition5').innerHTML=condition5;
//     document.getElementById('city5').innerHTML=city5;
//     document.getElementById('img5').src=img5;
//     document.getElementById('tempC5').innerHTML=tempC5;
//     document.getElementById('tempF5').innerHTML=tempF5;
// })