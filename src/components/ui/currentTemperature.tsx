import { useEffect, useState } from 'react';
import useSWR from 'swr';

interface CurrentTemperatureProps {
	current: {
		temp_c: number;
	};
	location: {
		name: string;
	};
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CurrentTemperature() {
	const apiKey = import.meta.env.PUBLIC_WEATHER_API_KEY;
	// Read the pathname after mount so the server render and first client render match
	const [selectedLocation, setSelectedLocation] = useState('fernie');
	useEffect(() => {
		const pathname = window.location.pathname;
		setSelectedLocation(pathname === '/' ? 'fernie' : pathname.replace(/\//g, ''));
	}, []);

	const { data, error } = useSWR<CurrentTemperatureProps>(
		`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedLocation}`,
		fetcher
	);

	return (
		<>
    <div>
      {/* Handle loading state */}
      {!data || !data.location ? (
        <p>Loading temperature for {selectedLocation}...</p>
      ) : error ? (
        // Handle error state
        <p>Error fetching weather data: {error.message}</p>
      ) : (
        // Display the temperature
        <p>
          {data.location.name}: {data.current.temp_c}°C
        </p>
      )}
    </div>
		</>
	);
}
