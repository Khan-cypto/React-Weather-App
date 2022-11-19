import React,{useState,useEffect} from 'react';         
import '../css/style.css';

const Tempapp = () => {

	const [city, setCity] = useState(null);
	const [search, setSearch] = useState("Karachi");

	useEffect( () => {
		const fetchAPI = async () => {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a7525a482368d1c943dde09668506778`;
			const response = await fetch(url);
			const respJson = await response.json();
			// console.log(response);
			setCity(respJson.main);
			// https://api.openweathermap.org/data/2.5/weather?q=karachi&units=metric&appid=a7525a482368d1c943dde09668506778
		};

		fetchAPI();
	}, [search] )

	return(
		<div className="container">
		<div className="box">
		<div className="inputData"> 
			<input type="search" className="inputField" placeholder="Enter City Name"
			 onChange={ (event) => { setSearch(event.target.value) } } />
		</div>

		{
			!city ? (
				<p className="errorMsg"> No Data Found </p>				
				) : (
		<div>		
		<div className="info">
			<h2 className="location"><i className="fas fa-cloud"></i>{search}</h2>        
			<h1 className="temp">{city.temp}°Cel</h1>
			<h3 className="temp-range">Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
		</div>

		<div className="wave1"></div>
		<div className="wave2"></div>
		<div className="wave3"></div>
		</div>
				)
		}

		</div>
		</div>
		)
};

export default Tempapp;