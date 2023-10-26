// Copyright (c) 2023 Airnub Technologies LTD. All rights reserved.
// Licensed under the MIT License. See LICENSE file in the project root for full license information.

import { AxiosInstance } from 'axios';
import { MarketHolidaysResponse, MarketTideResponse, SectorEtfsResponse, SectorType, TickersBySectorResponse, TotalOptionsVolumeResponse } from './types';

export class MarketApi {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  /**
   * Market Holidays
   * Returns the market holidays.
   */
  async getMarketHolidays(): Promise<MarketHolidaysResponse> {
    try {
      const response = await this.axiosInstance.get(`/api/market/holidays`, {
        params: {
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching getMarketHolidays:', error);
      throw error;
    }
  }

  /**
   * Market Tide
   * Returns the market tide information.
   * @param date (Optional)
   * @param otmOnly (Optional)
   */
  async getMarketTide(date?: string, otmOnly?: boolean): Promise<MarketTideResponse> {
    try {
      const response = await this.axiosInstance.get(`/api/market/market-tide`, {
        params: {
          date,
          otmOnly
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching getMarketTide:', error);
      throw error;
    }
  }

  /**
   * Sector ETFs
   * Returns the current trading days statistics for the SPDR sector etfs
   */
  async getSectorEtfs(): Promise<SectorEtfsResponse> {
    try {
      const response = await this.axiosInstance.get(`/api/market/sector-etfs`, {
        params: {
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching getSectorEtfs:', error);
      throw error;
    }
  }

  /**
   * Total Options Volume
   * Returns the total options volume and premium for all trade executions that happened on a given trading date.
   * @param limit (Optional)
   */
  async getTotalOptionsVolume(limit?: number): Promise<TotalOptionsVolumeResponse> {
    try {
      const response = await this.axiosInstance.get(`/api/market/total-options-volume`, {
        params: {
          limit
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching getTotalOptionsVolume:', error);
      throw error;
    }
  }

  /**
 * Tickers By Sector
 * Returns a list of tickers belonging to the specified sector.
 * @param sector  (Required)
 */
  async getTickersBySector(sector: SectorType): Promise<TickersBySectorResponse> {
    try {
      const response = await this.axiosInstance.get(`/api/stock/${sector}/tickers`, {
        params: {
          sector
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching getTickersBySector:', error);
      throw error;
    }
  }

}
