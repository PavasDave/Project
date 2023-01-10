const cityName = document.getElementById('cityName');
const submitBtn =  document.getElementById('submitBtn');
const city_name =  document.getElementById('city_name');
const temp_real_value =  document.getElementById('temp_real_value');
const datahide = document.querySelector(".mid_layer");
const temp_status =  document.getElementById('temp_status');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `Please Enter Some City Name To Search`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=5bec0f5e85b54e6686a06e4bf6a903ec`;
        const resp = await fetch(url);
        const data = await resp.json();
        const arrData = [data];
        city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
        datahide.classList.remove('data_hide');
        temp_real_value.innerText = arrData[0].main.temp;
        const tempMood = arrData[0].weather[0].main;
        if( tempMood == "Clear"){
            temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
        }else if( tempMood == "Clouds"){
            temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
        }
        else if( tempMood == "Rain"){
            temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
        }else{
            temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
        }
        }
        catch{
            city_name.innerText = `Please Enter Some Valid City Name To Search`;
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);