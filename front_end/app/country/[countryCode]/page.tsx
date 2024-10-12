"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import PopulationChart from '@/app/components/PopulationChart';
import axios from 'axios';


const CountryPage = () => {
  const { countryCode } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [countryData, setCountryData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (countryCode) {
      const fetchCountryData = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/countries/${countryCode}`);
          setCountryData(response.data);
        } catch (err) {
          console.error(err);
          setError('Failed to fetch country data');
        } finally {
          setLoading(false);
        }
      };

      fetchCountryData();
    }
  }, [countryCode]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{countryData.officialName}</h1>
      <h2>{countryData.commonName}</h2>
      {countryData.flagUrl && (
        <Image 
          src={countryData.flagUrl} 
          alt={`Flag of ${countryData.commonName}`} 
          width={200}
          height={100}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}
      {countryData.population ? (
        <PopulationChart population={countryData.population} />
      ) : (
        <p>No population data available.</p>
      )}
    </div>
  );
};

export default CountryPage;
