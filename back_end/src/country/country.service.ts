import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CountryService {
  nagerApi = 'https://date.nager.at/api/v3';
  nowApi = 'https://countriesnow.space/api/v0.1/countries';

  async getCountries() {
    try {
      const response = await axios.get(`${this.nagerApi}/AvailableCountries`);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch coutries',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getCountryInfo(countryCode: string) {
    try {
      const borderCountriesResponse = await axios.get(
        `${this.nagerApi}/CountryInfo/${countryCode}`,
      );
      const populationResponse = await axios.get(`${this.nowApi}/population`);
      const flagResponse = await axios.get(`${this.nowApi}/flag/images`);

      const borderCountries = borderCountriesResponse.data?.borders || [];

      const countryName = borderCountriesResponse.data?.commonName;

      const populationData = populationResponse.data.data.find(
        (country) => country.country === countryName,
      );

      const flagUrl = flagResponse.data.data.find(
        (country) => country.iso2 === countryCode,
      )?.flag;

      return {
        borderCountries,
        population: populationData?.populationCounts || 0,
        flagUrl,
      };
    } catch (error) {
      throw new HttpException(
        'Failed to fetch country info',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
