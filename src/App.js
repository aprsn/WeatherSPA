import "./App.css";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("İl Seçiniz");
  const [temp, setTemp] = useState(" ");
  const [wind_dir, setWindDir] = useState(" ");
  const [feelsLike, setFeelsLike] = useState(" ");

  const getWeather = async (value) => {
    // Arrow function

    const request = await fetch("https://localhost:5001/api/weather/" + value);
    const response = await request.json();

    setCity(value);
    setTemp(response.temperature);
    setWindDir(response.ruzgarYonu);
    setFeelsLike(response.feelsLike);
  };

  return (
    <div className="App">
      <div id="container">
        <h3 id="city_name">{city}</h3>

        <span className="values">
          
          Sıcaklık: <b id="temp"> {temp} </b>
        </span>
        <span className="values">
          
          Rüzgar Yönü: <b id="wind_dir"> {wind_dir}</b>
        </span>
        <span className="values">
          
          Hissedilen: <b id="feelsLike"> {feelsLike} </b>
        </span>

        <select
          name="il"
          id="city"
          onChange={(c) => getWeather(c.target.value)}
        >
          <option value="">Il Seciniz</option>
          <option value="Istanbul">Istanbul</option>
          <option value="Ankara">Ankara</option>
          <option value="Izmir">Izmir</option>
          <option value="Adana">Adana</option>
          <option value="Adiyaman">Adiyaman</option>
          <option value="Afyonkarahisar">Afyonkarahisar</option>
          <option value="Agri">Agri</option>
          <option value="Aksaray">Aksaray</option>
          <option value="Amasya">Amasya</option>
          <option value="Antalya">Antalya</option>
          <option value="Ardahan">Ardahan</option>
          <option value="Artvin">Artvin</option>
          <option value="Aydin">Aydin</option>
          <option value="Balikesir">Balikesir</option>
          <option value="Bartin">Bartin</option>
          <option value="Batman">Batman</option>
          <option value="Bayburt">Bayburt</option>
          <option value="Bilecik">Bilecik</option>
          <option value="Bingol">Bingol</option>
          <option value="Bitlis">Bitlis</option>
          <option value="Bolu">Bolu</option>
          <option value="Burdur">Burdur</option>
          <option value="Bursa">Bursa</option>
          <option value="Canakkale">Canakkale</option>
          <option value="Cankiri">Cankiri</option>
          <option value="Corum">Corum</option>
          <option value="Denizli">Denizli</option>
          <option value="Diyarbakir">Diyarbakir</option>
          <option value="Duzce">Duzce</option>
          <option value="Edirne">Edirne</option>
          <option value="Elazig">Elazig</option>
          <option value="Erzincan">Erzincan</option>
          <option value="Erzurum">Erzurum</option>
          <option value="Eskisehir">Eskisehir</option>
          <option value="Gaziantep">Gaziantep</option>
          <option value="Giresun">Giresun</option>
          <option value="Gumushane">Gumushane</option>
          <option value="Hakkari">Hakkari</option>
          <option value="Hatay">Hatay</option>
          <option value="Igdir">Igdir</option>
          <option value="Isparta">Isparta</option>
          <option value="Kahramanmaras">Kahramanmaras</option>
          <option value="Karabuk">Karabuk</option>
          <option value="Karaman">Karaman</option>
          <option value="Kars">Kars</option>
          <option value="Kastamonu">Kastamonu</option>
          <option value="Kayseri">Kayseri</option>
          <option value="Kirikkale">Kirikkale</option>
          <option value="Kirklareli">Kirklareli</option>
          <option value="Kirsehir">Kirsehir</option>
          <option value="Kilis">Kilis</option>
          <option value="Kocaeli">Kocaeli</option>
          <option value="Konya">Konya</option>
          <option value="Kutahya">Kutahya</option>
          <option value="Malatya">Malatya</option>
          <option value="Manisa">Manisa</option>
          <option value="Mardin">Mardin</option>
          <option value="Mersin">Mersin</option>
          <option value="Mugla">Mugla</option>
          <option value="Mus">Mus</option>
          <option value="Nevsehir">Nevsehir</option>
          <option value="Nigde">Nigde</option>
          <option value="Ordu">Ordu</option>
          <option value="Osmaniye">Osmaniye</option>
          <option value="Rize">Rize</option>
          <option value="Sakarya">Sakarya</option>
          <option value="Samsun">Samsun</option>
          <option value="Siirt">Siirt</option>
          <option value="Sinop">Sinop</option>
          <option value="Sivas">Sivas</option>
          <option value="Sirnak">Sirnak</option>
          <option value="Tekirdag">Tekirdag</option>
          <option value="Tokat">Tokat</option>
          <option value="Trabzon">Trabzon</option>
          <option value="Tunceli">Tunceli</option>
          <option value="Sanliurfa">Sanliurfa</option>
          <option value="Usak">Usak</option>
          <option value="Van">Van</option>
          <option value="Yalova">Yalova</option>
          <option value="Yozgat">Yozgat</option>
          <option value="Zonguldak">Zonguldak</option>
        </select>
      </div>
    </div>
  );
}

export default App;
