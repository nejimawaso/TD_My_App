import axios from "axios";
import React, { useState,useEffect } from 'react';

const WeatherCheck = () => {

  const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=Tokyo,JP&appid=APIキー";
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  const { weather, main } = post;
  
  return (
    <div className="h3">
      <h3 className="mb-6">現在の東京の気象情報</h3>
      <p className="mb-4">天気 : {weather[0].description}</p>
      <p>気温 : {main.temp}</p>
    </div>
  );

}
export default WeatherCheck;
