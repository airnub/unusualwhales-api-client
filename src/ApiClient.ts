// Copyright (c) 2023 Airnub Technologies LTD. All rights reserved.
// Licensed under the MIT License. See LICENSE file in the project root for full license information.

import axios, { AxiosInstance } from 'axios';
import { StockApi } from './StockApi';
import { MarketApi } from './MarketApi';
import { ScreenerApi } from './ScreenerApi';
import { ApiClientConfig } from './types';

export class ApiClient {
  public stock: StockApi;
  public market: MarketApi;
  public screener: ScreenerApi;
  private axiosInstance: AxiosInstance;

  constructor(config: ApiClientConfig) {
    if (!config.token) {
      throw new Error('Authentication token is required to initialize ApiClient.');
    }

    const defaultHeaders = {
      'Authority': 'api.unusualwhales.com',
      'Accept': 'application/json',
      'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
      'Authorization': `Bearer ${config.token}`,
      'Sec-Fetch-Mode': 'cors',
      'Accept-Encoding': 'gzip, deflate, br',
    };

    const headers = { ...defaultHeaders, ...config.headers };

    this.axiosInstance = axios.create({
      baseURL: config.baseUrl || 'https://api.unusualwhales.com',
      headers,
    });

    this.stock = new StockApi(this.axiosInstance);
    this.market = new MarketApi(this.axiosInstance);
    this.screener = new ScreenerApi(this.axiosInstance);
  }

}
