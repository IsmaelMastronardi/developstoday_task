"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import PopulationChart from '@/app/components/PopulationChart';
import axios from 'axios';
import Link from 'next/link';

interface borderCountry {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: null | string[];
}

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
          console.log(response.data.borderCountries.length)
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

  if (loading) return <p className='loading'>Loading...</p>;
  if (error) return <p className='error'>{error}</p>;

  return (
    <div className='countryDiv'>
      <h1>{countryData.officialName}</h1>
      {countryData.flagUrl && (
        <Image 
          src={countryData.flagUrl} 
          alt={`Flag of ${countryData.commonName}`}
          width={100}
          height={100}
          className='flag'
        />
      )}
      {countryData.borderCountries &&(
        <>
          <p className='subtitle mt-6'>
            {countryData.commonName} borders {countryData.borderCountries.length} {countryData.borderCountries.length === 1 ? 'country' : 'countries'}
          </p>
          <ul className='countryListVariant mb-10'>
            {countryData.borderCountries.map((borderCountry: borderCountry) => (
              <li key={borderCountry.countryCode}  className='countryLink'>
                <Link href={`/country/${borderCountry.countryCode}`}>
                  {borderCountry.commonName}
                </Link>
              </li>
            ))}
          </ul>
        </>
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
