// Select Country

var con = {
    url: 'https://api.countrystatecity.in/v1/countries',
    api_key: 'ZElYTzBsQzZvQm9UT0dYMmVQd2JGNU12WDA0R3EzRExJNHdTYzR0SA=='
}

var countryS = document.querySelector('.country')
var stateS = document.querySelector('.state') 
var cityS = document.querySelector('.city')


function loadCountry() {

    let api = con.url

    fetch(api, { headers: { "X-CSCAPI-KEY": con.api_key } })
        .then(Response => Response.json())
        .then(data => {
            console.log(data);

            data.forEach(country => {
                const option = document.createElement('option')
                option.value = country.iso2
                option.textContent = country.name
                countryS.appendChild(option)
            })
        })
        .catch(error => console.error('Error loading countries:', error))

    stateS.disabled = true
    cityS.disabled = true
}


function loadState() {
    stateS.disabled = false
    cityS.disabled = true

    const selectCountry = countryS.value
    console.log(selectCountry);
    stateS.innerHTML = '<option value="">Select State</option>'
    cityS.innerHTML = '<option value="">Select City</option>' 

    fetch(`${con.url}/${selectCountry}/states`, { headers: { "X-CSCAPI-KEY": con.api_key } })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            data.forEach(state => {
                const option = document.createElement('option')
                option.value = state.iso2
                option.textContent = state.name
                stateS.appendChild(option)
            })
        })
        .catch(error => console.error('Error loading countries:', error))
}


function loadCity() {
    cityS.disabled = false

    const selectCountry = countryS.value
    const selectState = stateS.value
    console.log(selectCountry, selectState);

    cityS.innerHTML = '<option value="">Select City</option>' 

    fetch(`${con.url}/${selectCountry}/states/${selectState}/cities`, { headers: { "X-CSCAPI-KEY": con.api_key } })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            data.forEach(city => {
                const option = document.createElement('option')
                option.value = city.name
                option.textContent = city.name
                cityS.appendChild(option)
            })
        })
}

//Weather

var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var onlytemp = document.querySelector('#onlytemp')
var humi = document.querySelector("#hum")
var feels_like = document.querySelector("#fl")


apik = "ee4281e9ba7dc1b673a2da6358a99ac3"
function convertion(val) {
  return (val - 273).toFixed(2)
}

btn.addEventListener('click', function () {
  fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputval.value + '&cnt=5&appid=' + apik)
    .then(res => res.json())

    .then(data => {
      var nameval = data['city']['name']
      var descrip = data['list']['0']['weather']['0']['description']
      var tempature = data['list']['0']['main']['temp']
      var wndspd = data['list']['3']['wind']['speed']
      var tempature_only = data['list']['0']['main']['temp']
      var humidity = data['list']['0']['main']['humidity']
      var feels = data['list']['0']['main']['feels_like']


      city.innerHTML = `Weather of <span>${nameval}<span>`
      temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`
      onlytemp.innerHTML = `<span>${convertion(tempature_only)}<sup>o</sup></span>`
      feels_like.innerHTML = `<span><b>${convertion(feels)}</b> <sup> o</sup></span>`
      humi.innerHTML = `<span><b>${humidity} %</b></span>`
      description.innerHTML = `<span style="text-transform:uppercase;"><b>${descrip}</b><span>`
      wind.innerHTML = `<span><b>${wndspd} km/h</b><span>`

    })

    .catch(err => alert('You entered Wrong city name'))
})


// 7-day Forcast

var max_1 = document.querySelector("#maxwea1")
var min_1 = document.querySelector("#minwea1")
var max_2 = document.querySelector("#maxwea2")
var min_2 = document.querySelector("#minwea2")
var max_3 = document.querySelector("#maxwea3")
var min_3 = document.querySelector("#minwea3")
var max_4 = document.querySelector("#maxwea4")
var min_4 = document.querySelector("#minwea4")
var max_5 = document.querySelector("#maxwea5")
var min_5 = document.querySelector("#minwea5")
var max_6 = document.querySelector("#maxwea6")
var min_6 = document.querySelector("#minwea6")
var max_7 = document.querySelector("#maxwea7")
var min_7 = document.querySelector("#minwea7")
var descrip_1 = document.querySelector('#description1')
var descrip_2 = document.querySelector('#description2')
var descrip_3 = document.querySelector('#description3')
var descrip_4 = document.querySelector('#description4')
var descrip_5 = document.querySelector('#description5')
var descrip_6 = document.querySelector('#description6')
var descrip_7 = document.querySelector('#description7')


btn.addEventListener('click', function () {
  fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputval.value + '&cnt=16&appid=' + apik)
    .then(res => res.json())

    .then(data => {

      var max1 = data['list']['0']['main']['temp_max']
      var min1 = data['list']['0']['main']['temp_min']
      var max2 = data['list']['1']['main']['temp_max']
      var min2 = data['list']['1']['main']['temp_min']
      var max3 = data['list']['2']['main']['temp_max']
      var min3 = data['list']['2']['main']['temp_min']
      var max4 = data['list']['3']['main']['temp_max']
      var min4 = data['list']['3']['main']['temp_min']
      var max5 = data['list']['4']['main']['temp_max']
      var min5 = data['list']['4']['main']['temp_min']
      var max6 = data['list']['5']['main']['temp_max']
      var min6 = data['list']['5']['main']['temp_min']
      var max7 = data['list']['6']['main']['temp_max']
      var min7 = data['list']['6']['main']['temp_min']
      var descrip1 = data['list']['0']['weather']['0']['description']
      var descrip2 = data['list']['1']['weather']['0']['description']
      var descrip3 = data['list']['2']['weather']['0']['description']
      var descrip4 = data['list']['3']['weather']['0']['description']
      var descrip5 = data['list']['4']['weather']['0']['description']
      var descrip6 = data['list']['5']['weather']['0']['description']
      var descrip7 = data['list']['6']['weather']['0']['description']

      max_1.innerHTML = `<span>${convertion(max1)}</span>`
      min_1.innerHTML = `<span>/${convertion(min1)}</span>`
      max_2.innerHTML = `<span>${convertion(max2)}</span>`
      min_2.innerHTML = `<span>/${convertion(min2)}</span>`
      max_3.innerHTML = `<span>${convertion(max3)}</span>`
      min_3.innerHTML = `<span>/${convertion(min3)}</span>`
      max_4.innerHTML = `<span>${convertion(max4)}</span>`
      min_4.innerHTML = `<span>/${convertion(min4)}</span>`
      max_5.innerHTML = `<span>${convertion(max5)}</span>`
      min_5.innerHTML = `<span>/${convertion(min5)}</span>`
      max_6.innerHTML = `<span>${convertion(max6)}</span>`
      min_6.innerHTML = `<span>/${convertion(min6)}</span>`
      max_7.innerHTML = `<span>${convertion(max7)}</span>`
      min_7.innerHTML = `<span>/${convertion(min7)}</span>`
      descrip_1.innerHTML = `<span style="text-transform:uppercase; margin-left:10px">${descrip1}<span>`
      descrip_2.innerHTML = `<span style="text-transform:uppercase; margin-left:10px">${descrip2}<span>`
      descrip_3.innerHTML = `<span style="text-transform:uppercase; margin-left:10px">${descrip3}<span>`
      descrip_4.innerHTML = `<span style="text-transform:uppercase; margin-left:10px">${descrip4}<span>`
      descrip_5.innerHTML = `<span style="text-transform:uppercase; margin-left:10px">${descrip5}<span>`
      descrip_6.innerHTML = `<span style="text-transform:uppercase; margin-left:10px">${descrip6}<span>`
      descrip_7.innerHTML = `<span style="text-transform:uppercase; margin-left:10px">${descrip7}<span>`
    })

    .catch(err => alert('You entered Wrong city name'))
})

// Today's Forcast

var temp_1 = document.querySelector('#temp1')
var temp_2 = document.querySelector('#temp2')
var temp_3 = document.querySelector('#temp3')
var temp_4 = document.querySelector('#temp4')
var temp_5 = document.querySelector('#temp5')
var temp_6 = document.querySelector('#temp6')

btn.addEventListener('click', function () {
  fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputval.value + '&cnt=16&appid=' + apik)
    .then(res => res.json())

    .then(data => {

      var temp1 = data['list']['0']['main']['temp']
      var temp2 = data['list']['1']['main']['temp']
      var temp3 = data['list']['2']['main']['temp']
      var temp4 = data['list']['3']['main']['temp']
      var temp5 = data['list']['4']['main']['temp']
      var temp6 = data['list']['5']['main']['temp']

      temp_1.innerHTML = `<span>${convertion(temp1)}<sup>o</sup></span>`
      temp_2.innerHTML = `<span>${convertion(temp2)}<sup>o</sup></span>`
      temp_3.innerHTML = `<span>${convertion(temp3)}<sup>o</sup></span>`
      temp_4.innerHTML = `<span>${convertion(temp4)}<sup>o</sup></span>`
      temp_5.innerHTML = `<span>${convertion(temp5)}<sup>o</sup></span>`
      temp_6.innerHTML = `<span>${convertion(temp6)}<sup>o</sup></span>`

    })

    .catch(err => alert('You entered Wrong city name'))
})




window.onload = loadCountry



// Another Way to do it




// var countryS = document.querySelector('#countryId')
// var stateS = document.querySelector('#stateId')
// var cityS = document.querySelector('#cityId')

// let urlC = fetch("http://65.1.214.43:3042/api/v1/countries")

// function loadCountry() {

//     urlC.then((value1) => {
//         return value1.json()
//     }).then((data) => {
//         console.log('Country', data)
//         data.forEach(country => {
//             const option = document.createElement('option')
//             option.value = country.idCountry
//             option.textContent = country.Name
//             countryS.appendChild(option)
//         });
//     })
//     .catch(err => alert('Error'))
// }

// function loadState() {
//     const selectCountry = countryS.value
//     console.log(selectCountry);
//     stateS.innerHTML = '<option value="">Select State</option>'
//     fetch(`http://65.1.214.43:3042/api/v1/states?idCountry=${selectCountry}`)
//     .then((value1) => {
//         return value1.json()
//     }).then((data) => {
//         console.log('State',data)
//         data.data.forEach(state => {
//             const option = document.createElement('option')
//             option.value = state.idState
//             option.textContent = state.Name
//             stateS.appendChild(option)
//         });
//     })
//     .catch(err => alert('Error'))
// }

// function loadCity() {
//     const selectCountry = countryS.value
//     const selectState = stateS.value
//     console.log(selectCountry)
//     console.log(selectState)

//     fetch(`http://65.1.214.43:3042/api/v1/cities?pagination=no&page=1&limit=10&idCountry=${selectCountry}&idState=${selectState}`)
//     .then((value1) => {
//         return value1.json()
//     }).then((data) => {
//         console.log('City',data)
//         data.data.forEach(city => {
//             const option = document.createElement('option')
//             option.value = city.idCity
//             option.textContent = city.Name
//             cityS.appendChild(option)
//         });
//     })
//     .catch(err => alert('Error'))
// }

// window.onload = loadCountry

// var inputval = document.querySelector('#cityinput')
// var btn = document.querySelector('#add');
// var city = document.querySelector('#cityoutput')
// var descrip = document.querySelector('#description')
// var temp = document.querySelector('#temp')
// var wind = document.querySelector('#wind')
// var onlytemp = document.querySelector('#onlytemp')
// var humi = document.querySelector("#hum")
// var feels_like = document.querySelector("#fl")


// apik = "ee4281e9ba7dc1b673a2da6358a99ac3"
// function convertion(val) {
//   return (val - 273).toFixed(2)
// }

// btn.addEventListener('click', function () {
//   fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityS.value + '&cnt=5&appid=' + apik)
//     .then(res => res.json())

//     .then(data => {
//       var nameval = data['city']['name']
//       var descrip = data['list']['0']['weather']['0']['description']
//       var tempature = data['list']['0']['main']['temp']
//       var wndspd = data['list']['3']['wind']['speed']
//       var tempature_only = data['list']['0']['main']['temp']
//       var humidity = data['list']['0']['main']['humidity']
//       var feels = data['list']['0']['main']['feels_like']


//       city.innerHTML = `Weather of <span>${nameval}<span>`
//       temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`
//       onlytemp.innerHTML = `<span>${convertion(tempature_only)}<sup>o</sup></span>`
//       feels_like.innerHTML = `<span><b>${convertion(feels)}</b> <sup> o</sup></span>`
//       humi.innerHTML = `<span><b>${humidity} %</b></span>`
//       description.innerHTML = `<span style="text-transform:uppercase;"><b>${descrip}</b><span>`
//       wind.innerHTML = `<span><b>${wndspd} km/h</b><span>`

//     })

//     .catch(err => alert('You entered Wrong city name'))
// })


// // 7-day Forcast

// var max_1 = document.querySelector("#maxwea1")
// var min_1 = document.querySelector("#minwea1")
// var max_2 = document.querySelector("#maxwea2")
// var min_2 = document.querySelector("#minwea2")
// var max_3 = document.querySelector("#maxwea3")
// var min_3 = document.querySelector("#minwea3")
// var max_4 = document.querySelector("#maxwea4")
// var min_4 = document.querySelector("#minwea4")
// var max_5 = document.querySelector("#maxwea5")
// var min_5 = document.querySelector("#minwea5")
// var max_6 = document.querySelector("#maxwea6")
// var min_6 = document.querySelector("#minwea6")
// var max_7 = document.querySelector("#maxwea7")
// var min_7 = document.querySelector("#minwea7")
// var descrip_1 = document.querySelector('#description1')
// var descrip_2 = document.querySelector('#description2')
// var descrip_3 = document.querySelector('#description3')
// var descrip_4 = document.querySelector('#description4')
// var descrip_5 = document.querySelector('#description5')
// var descrip_6 = document.querySelector('#description6')
// var descrip_7 = document.querySelector('#description7')


// btn.addEventListener('click', function () {
//   fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityS.value + '&cnt=16&appid=' + apik)
//     .then(res => res.json())

//     .then(data => {

//       var max1 = data['list']['0']['main']['temp_max']
//       var min1 = data['list']['0']['main']['temp_min']
//       var max2 = data['list']['1']['main']['temp_max']
//       var min2 = data['list']['1']['main']['temp_min']
//       var max3 = data['list']['2']['main']['temp_max']
//       var min3 = data['list']['2']['main']['temp_min']
//       var max4 = data['list']['3']['main']['temp_max']
//       var min4 = data['list']['3']['main']['temp_min']
//       var max5 = data['list']['4']['main']['temp_max']
//       var min5 = data['list']['4']['main']['temp_min']
//       var max6 = data['list']['5']['main']['temp_max']
//       var min6 = data['list']['5']['main']['temp_min']
//       var max7 = data['list']['6']['main']['temp_max']
//       var min7 = data['list']['6']['main']['temp_min']
//       var descrip1 = data['list']['0']['weather']['0']['description']
//       var descrip2 = data['list']['1']['weather']['0']['description']
//       var descrip3 = data['list']['2']['weather']['0']['description']
//       var descrip4 = data['list']['3']['weather']['0']['description']
//       var descrip5 = data['list']['4']['weather']['0']['description']
//       var descrip6 = data['list']['5']['weather']['0']['description']
//       var descrip7 = data['list']['6']['weather']['0']['description']

//       max_1.innerHTML = `<span>${convertion(max1)}</span>`
//       min_1.innerHTML = `<span>/${convertion(min1)}</span>`
//       max_2.innerHTML = `<span>${convertion(max2)}</span>`
//       min_2.innerHTML = `<span>/${convertion(min2)}</span>`
//       max_3.innerHTML = `<span>${convertion(max3)}</span>`
//       min_3.innerHTML = `<span>/${convertion(min3)}</span>`
//       max_4.innerHTML = `<span>${convertion(max4)}</span>`
//       min_4.innerHTML = `<span>/${convertion(min4)}</span>`
//       max_5.innerHTML = `<span>${convertion(max5)}</span>`
//       min_5.innerHTML = `<span>/${convertion(min5)}</span>`
//       max_6.innerHTML = `<span>${convertion(max6)}</span>`
//       min_6.innerHTML = `<span>/${convertion(min6)}</span>`
//       max_7.innerHTML = `<span>${convertion(max7)}</span>`
//       min_7.innerHTML = `<span>/${convertion(min7)}</span>`
//       descrip_1.innerHTML = `<span style="text-transform:uppercase; margin-left:10px">${descrip1}<span>`
//       descrip_2.innerHTML = `<span style="text-transform:uppercase; margin-left:10px">${descrip2}<span>`
//       descrip_3.innerHTML = `<span style="text-transform:uppercase; margin-left:10px">${descrip3}<span>`
//       descrip_4.innerHTML = `<span style="text-transform:uppercase; margin-left:10px">${descrip4}<span>`
//       descrip_5.innerHTML = `<span style="text-transform:uppercase; margin-left:10px">${descrip5}<span>`
//       descrip_6.innerHTML = `<span style="text-transform:uppercase; margin-left:10px">${descrip6}<span>`
//       descrip_7.innerHTML = `<span style="text-transform:uppercase; margin-left:10px">${descrip7}<span>`
//     })

//     .catch(err => alert('You entered Wrong city name'))
// })

// // Today's Forcast

// var temp_1 = document.querySelector('#temp1')
// var temp_2 = document.querySelector('#temp2')
// var temp_3 = document.querySelector('#temp3')
// var temp_4 = document.querySelector('#temp4')
// var temp_5 = document.querySelector('#temp5')
// var temp_6 = document.querySelector('#temp6')

// btn.addEventListener('click', function () {
//   fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityS.value + '&cnt=16&appid=' + apik)
//     .then(res => res.json())

//     .then(data => {

//       var temp1 = data['list']['0']['main']['temp']
//       var temp2 = data['list']['1']['main']['temp']
//       var temp3 = data['list']['2']['main']['temp']
//       var temp4 = data['list']['3']['main']['temp']
//       var temp5 = data['list']['4']['main']['temp']
//       var temp6 = data['list']['5']['main']['temp']

//       temp_1.innerHTML = `<span>${convertion(temp1)}<sup>o</sup></span>`
//       temp_2.innerHTML = `<span>${convertion(temp2)}<sup>o</sup></span>`
//       temp_3.innerHTML = `<span>${convertion(temp3)}<sup>o</sup></span>`
//       temp_4.innerHTML = `<span>${convertion(temp4)}<sup>o</sup></span>`
//       temp_5.innerHTML = `<span>${convertion(temp5)}<sup>o</sup></span>`
//       temp_6.innerHTML = `<span>${convertion(temp6)}<sup>o</sup></span>`

//     })

//     .catch(err => alert('You entered Wrong city name'))
// })




