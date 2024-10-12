import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CountryService {
  nagerApi = 'https://date.nager.at/api/v3';

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
}
