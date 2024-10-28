function citiesOnly(arrofobj){
    return arrofobj.map(obj => obj.city);
}

function upperCasingStates(arr){
    return  arr.map(str1 => str1.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))
}

function fahrenheitToCelsius(degree){
    return degree.map((obj) => Math.floor(+(obj.substring(0,obj.length-2) - 32) * 5 / 9) + obj.substring(obj.length-2,obj.length-1)+"C")
}

function trimTemp(arr){
    // ******************************************************
    // return arr.map(obj => {
    //     return {
    //       ...obj,
    //       temperature: obj.temperature.replace(/\s+/g, '')
    //     };
    //   });
    // ******************************************************
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
    
        let newObj = {};
        for (let key in obj) {
            if (key === 'temperature') {
              newObj[key] = obj[key].replace(/\s+/g, '');
            } else {
              newObj[key] = obj[key];
            }
        }
        newArr.push(newObj);
    }
    return newArr;
}


function tempForecasts(arr) {
    var newArr = []
    arr.map((obj) => {
        const Celsius =  fahrenheitToCelsius([obj.temperature.replaceAll(/\s+/g,'')])
        const local = upperCasingStates([obj["city"],obj["state"]])
        newArr.push(Celsius[0].substring(0,Celsius[0].length-2)+'°Celsius in '+local[0]+', '+local[1]+'')
    })
    return newArr
    // return arr.map(obj => {
    //   let fahrenheit = parseFloat(obj.temperature.replace(/\s+/g, ''));

    //   let celsius = fahrenheitToCelsius(fahrenheit)

    //   let stateCapitalized = obj.state.charAt(0).toUpperCase() + obj.state.slice(1);
      
    //   return `${celsius}°Celsius in ${obj.city}, ${stateCapitalized}`;
    // });
}


// console.log(upperCasingStates([
//     {
//       city: 'los angeles',
//       temperature: '  101 °F   ',
//     },
//     {
//       city: 'san francisco',
//       temperature: ' 84 ° F   ',
//     },
//   ]))

//   console.log(tempForecasts([
//     {
//       city: 'Pasadena',
//       temperature: ' 101 °F',
//       state: 'california',
//       region: 'West',
//     },
//   ]))

// console.log(fahrenheitToCelsius([
//     '30°C',
//     '37°C',
//     '5°C',
//     '12°C',
//     '-13°C',
//     '21°C',
//     '-19°C',
//   ]))