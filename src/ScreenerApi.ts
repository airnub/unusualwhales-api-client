// Copyright (c) 2023 Airnub Technologies LTD. All rights reserved.
// Licensed under the MIT License. See LICENSE file in the project root for full license information.

import { AxiosInstance } from 'axios';
import { OptionsScreenerResponse, OptionsScreenerQueryParams, StockScreenerResponse, StockScreenerQueryParams } from './types';

export class ScreenerApi {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  /**
   * Hottest Chains
   * A contract screener endpoint to screen the market for contracts by a variety of filter options.
   * @param params OptionContractsQueryParams
   */
  async getOptionContracts(params?: OptionsScreenerQueryParams): Promise<OptionsScreenerResponse> {
    try {
      const response = await this.axiosInstance.get('/api/screener/option-contracts', {
        params,
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching option contracts:', error);
      throw error;
    }
  }

  /**
   * Stock Screener
   * A stock screener endpoint to screen the market for stocks by a variety of filter options.
   * @param params StocksQueryParams
   */
  async getStocks(params?: StockScreenerQueryParams): Promise<StockScreenerResponse> {
    try {
      const response = await this.axiosInstance.get('/api/screener/stocks', {
        params,
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching stocks:', error);
      throw error;
    }
  }

}
