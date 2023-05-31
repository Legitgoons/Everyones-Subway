import React from 'react';
import StationSelect from '../components/StationSelect'

const MainPage = () => {
	return (
		<div>
			<StationSelect></StationSelect>
			<h2>출발</h2>
			<StationSelect></StationSelect>
			<h2>도착</h2>
		</div>
	);
};

export default MainPage;