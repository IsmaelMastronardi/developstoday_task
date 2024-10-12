"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

interface country {
  countryCode: string;
  name: string;
}

const CountryList = () => {
  const [countries, setCountries] = useState<country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/countries/all`);
        setCountries(response.data);
      } catch (err) {
        console.log(err);
        setError('Failed to fetch countries');
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);
  if (loading) return <p className='loading'>Loading...</p>;
  if (error) return <p className='error'>{error}</p>;

  return (
    <>
      <p className='subtitle'>Select any Country to see more information</p>
      <ul className='countryList'>
        {countries.map((country) => (
          <li key={country.countryCode} className='countryLink'>
            <Link href={`/country/${country.countryCode}`}>
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CountryList;
