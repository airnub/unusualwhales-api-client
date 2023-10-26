// Copyright (c) 2023 Airnub Technologies LTD. All rights reserved.
// Licensed under the MIT License. See LICENSE file in the project root for full license information.

import { AxiosInstance } from 'axios';
import {
    AnalystRatingResponse,
    GreekExposureResponse,
    IvTermStructureResponse,
    NetPremiumTickResponse,
    OhlcResponse,
    OptionsVolumeResponse,
    StockPriceLevelResponse,
    StockVolumePriceLevelResponse,
    TickerInfoResponse,
    VolumeOiExpiryResponse,
    CandleSizeType,
    OptionChainsResponse
} from './types';

export class StockApi {
    private axiosInstance: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this.axiosInstance = axiosInstance;
    }

    /**
       * Analyst Rating
       * Returns the latest analyst rating for the given ticker. 
       * @param ticker  (Required)
       */
    async getAnalystsRating(ticker: string): Promise<AnalystRatingResponse> {
        try {
        const response = await this.axiosInstance.get(`/api/stock/${ticker}/analysts`, {
            params: {
            },
        });
        return response.data;
        } catch (error) {
            console.error('Error fetching getAnalysts:', error);
            throw error;
        }
    }

    /**
     * Greek Exposure
     * The daily sum of the option greeks based on open contracts. Popular greek exposure values include gamma (GEX) and delta (DEX). 
     * @param ticker  (Required)
     * @param date  (Optional) Default last trading date
     * @param timeframe (Optional) The timeframe of the data to return. Default 1Y
        Can be one of the following formats:
        - YTD
        - 1D, 2D, etc.
        - 1W, 2W, etc.
        - 1M, 2M, etc.
        - 1Y, 2Y, etc.
     */
    async getGreekExposure(ticker: string, date?: string, timeframe?: string): Promise<GreekExposureResponse> {
        try {
            const response = await this.axiosInstance.get(`/api/stock/${ticker}/greek-exposure`, {
                params: {
                    date,
                    timeframe,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching getGreekExposure:', error);
            throw error;
        }
    }

    /**
     * Information
     * Returns a information about the given ticker. 
     * @param ticker  (Required)
     */
    async getInfo(ticker: string): Promise<TickerInfoResponse> {
        try {
            const response = await this.axiosInstance.get(`/api/stock/${ticker}/info`, {
                params: {
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching getInfo:', error);
            throw error;
        }
    }

    /**
     * Net Premium Ticks
     * Returns the net premium ticks for a given ticker. Each tick is resembling the data for a single minute tick.
     * @param ticker  (Required)
     * @param date  (Optional)
     */
    async getNetPremiumTicks(ticker: string, date?: string): Promise<NetPremiumTickResponse> {
        try {
            const response = await this.axiosInstance.get(`/api/stock/${ticker}/net-prem-ticks`, {
                params: {
                    date,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching getNetPremTicks:', error);
            throw error;
        }
    }

    /**
     * OHLC
     * Returns the Open High Low Close (OHLC) candle data for a given ticker.  Results are limitted to 2,500 elements even if there are more available. 
     * @param ticker  (Required)
     * @param candle_size The duration of the candle. (Required)
     * @param timeframe The timeframe of the data to return. (Optional) Default 1Y
  Can be one of the following formats:
  - YTD
  - 1D, 2D, etc.
  - 1W, 2W, etc.
  - 1M, 2M, etc.
  - 1Y, 2Y, etc.
     */
    async getOHLC(ticker: string, candle_size: CandleSizeType, timeframe?: string): Promise<OhlcResponse> {
        try {
            const response = await this.axiosInstance.get(`/api/stock/${ticker}/ohlc/${candle_size}`, {
                params: {
                    timeframe,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching get{candle_size}:', error);
            throw error;
        }
    }

    /**
     * Option Chains
     * Returns all option symbols for the given ticker.  
     * You can use the following regex to extract underlying ticker, option type, expiry & strike: 
     * `^(?<symbol>[\w]*)(?<expiry>(\d{2})(\d{2})(\d{2}))(?<type>[PC])(?<strike>\d{8})$`  
     * Keep in mind that the strike needs to be divided by 1,000. 
     * @param ticker  (Required)
     */
    async getOptionChains(ticker: string): Promise<OptionChainsResponse> {
        try {
            const response = await this.axiosInstance.get(`/api/stock/${ticker}/option-chains`, {
                params: {
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching getOptionChains:', error);
            throw error;
        }
    }

    /**
     * Option Price Levels
     * Returns the call and put volume per price level for the given ticker.  ---- Can be used to build a chart such as following: ![Option Price Level chart](https://i.imgur.com/y6BZ4sG.png) 
     * @param ticker  (Required)
     * @param date  (Optional)
     */
    async getStockPriceLevels(ticker: string, date?: string): Promise<StockPriceLevelResponse> {
        try {
            const response = await this.axiosInstance.get(`/api/stock/${ticker}/option/stock-price-levels`, {
                params: {
                    date,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching getStockPriceLevels:', error);
            throw error;
        }
    }

    /**
     * Volume & OI per Expiry
     * Returns the total volume and open interest per expiry for the given ticker. 
     * @param ticker  (Required)
     * @param date  (Optional)
     */
    async getVolumeOiExpiry(ticker: string, date?: string): Promise<VolumeOiExpiryResponse> {
        try {
            const response = await this.axiosInstance.get(`/api/stock/${ticker}/option/volume-oi-expiry`, {
                params: {
                    date,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching getVolumeOiEpxiry:', error);
            throw error;
        }
    }

    /**
     * Options Volume
     * Returns the options volume & premium for all trade executions that happened on a given trading date for the given ticker.  
     * @param ticker (Required)
     * @param limit (Optional) Number of items to return. Default: 1. Max: 500.
     */
    async getOptionsVolume(ticker: string, limit?: number): Promise<OptionsVolumeResponse> {
        try {
            const response = await this.axiosInstance.get(`/api/stock/${ticker}/options-volume`, {
                params: {
                    limit,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching getOptionsVolume:', error);
            throw error;
        }
    }

    /**
     * Off/Lit Price Levels
     * Returns the lit & off lit stock volume per price level for the given ticker.  
     * Important: The volume does **NOT** represent the full market dialy volume. 
     * It only represents the volume of executed trades on exchanges operated by Nasdaq and FINRA off lit exchanges. 
     * @param ticker  (Required)
     * @param date  (Optional)
     */
    async getStockVolumePriceLevels(ticker: string, date?: string): Promise<StockVolumePriceLevelResponse> {
        try {
            const response = await this.axiosInstance.get(`/api/stock/${ticker}/stock-volume-price-levels`, {
                params: {
                    date,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching getStockVolumePriceLevels:', error);
            throw error;
        }
    }

    /**
     * Implied Volatility Term Structure
     * The average of the latest volatilities for the at the money call and put contracts for every expiry date. 
     * @param ticker  (Required)
     * @param date  (Optional)
     */
    async getTermStructure(ticker: string, date?: string): Promise<IvTermStructureResponse> {
        try {
            const response = await this.axiosInstance.get(`/api/stock/${ticker}/volatility/term-structure`, {
                params: {
                    date,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching getTermStructure:', error);
            throw error;
        }
    }

}
