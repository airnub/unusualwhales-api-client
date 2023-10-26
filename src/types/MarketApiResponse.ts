// Copyright (c) 2023 Airnub Technologies LTD. All rights reserved.
// Licensed under the MIT License. See LICENSE file in the project root for full license information.

export interface MarketHolidaysData{
    data: string[]; // An array of dates
    event: string;
    early_close?: boolean;
}

export interface MarketHolidaysResponse {
    data: MarketHolidaysData[];
}

export interface MarketTideData {
    date: string;
    net_call_premium: string;
    net_put_premium: string;
    net_volume: number;
    timestamp: string;
}

export interface MarketTideResponse {
    data: MarketTideData[];
    date: string;
}

export interface SectorEtfData {
    avg30_call_volume: string;
    avg30_put_volume: string;
    avg30_stock_volume: string;
    avg_30_day_call_volume: string;
    avg_30_day_put_volume: string;
    avg_7_day_call_volume: string;
    avg_7_day_put_volume: string;
    bearish_premium: string;
    bullish_premium: string;
    call_premium: string;
    call_volume: number;
    full_name: string;
    high: string;
    last: string;
    low: string;
    marketcap: string;
    open: string;
    prev_close: string;
    prev_date: string;
    put_premium: string;
    put_volume: number;
    ticker: string;
    volume: number;
    week52_high: string;
    week52_low: string;
}

export interface SectorEtfsResponse {
    data: SectorEtfData[];
}

export interface TotalOptionsVolumeData {
    call_premium: string;
    call_volume: number;
    date: string;
    put_premium: string;
    put_volume: number;
}

export interface TotalOptionsVolumeResponse {
    data: TotalOptionsVolumeData[];
}

export interface TickersBySectorResponse {
    data: string[];
}

