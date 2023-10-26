// Copyright (c) 2023 Airnub Technologies LTD. All rights reserved.
// Licensed under the MIT License. See LICENSE file in the project root for full license information.

import { AnnouncementTimeType, IssueType, MarketTimeType, SectorType } from ".";

export interface AnalystRatingData {
    action: string | null;
    analyst_name: string;
    firm: string;
    recommendation: string;
    target: string | null;
    timestamp: string;
    title: string;
}

export interface AnalystRatingResponse {
    data: AnalystRatingData[];
}

export interface GreekExposureData {
    call_charm: string;
    call_delta: string;
    call_gamma: string;
    call_vanna: string;
    date: string;
    put_charm: string;
    put_delta: string;
    put_gamma: string;
    put_vanna: string;
}

export interface GreekExposureResponse {
    data: GreekExposureData[];
}


export interface TickerInfoData {
    announce_time: AnnouncementTimeType;
    avg30_volume: string;
    full_name: string;
    has_dividend: boolean;
    has_earnings_history: boolean;
    has_investment_arm: boolean;
    has_options: boolean;
    issue_type: IssueType;
    marketcap: string;
    marketcap_size: string;
    next_earnings_date: string;
    sector: SectorType;
    short_description: string;
    symbol: string;
    uw_tags: string[];
}

export interface TickerInfoResponse {
    data: TickerInfoData
}

export interface NetPremiumTickData {
    date: string;
    net_call_premium: string;
    net_call_volume: number;
    net_put_premium: string;
    net_put_volume: number;
    tape_time: string;
}

export interface NetPremiumTickResponse {
    data: NetPremiumTickData[];
}

export interface OhlcData {
    close: number;
    end_time: string;
    high: string;
    low: string;
    market_time: MarketTimeType;
    open: number;
    start_time: string;
    total_volume?: number,
    volume?: number
}

export interface OhlcResponse {
    data: OhlcData[];
}

export interface OptionChainsResponse {
    data: string[];
}

export interface StockPriceLevelData {
    call_volume: number;
    price: number;
    put_volume: number;
}

export interface StockPriceLevelResponse {
    data: StockPriceLevelData;
}

export interface VolumeOiExpiryData {
    expires: string;
    oi: number;
    volume: number;
}

export interface VolumeOiExpiryResponse {
    data: VolumeOiExpiryData;
}

export interface OptionsVolumeData {
    avg_30_day_call_volume: string;
    avg_30_day_put_volume: string;
    avg_3_day_call_volume: string;
    avg_3_day_put_volume: string;
    avg_7_day_call_volume: string;
    avg_7_day_put_volume: string;
    bearish_premium: string;
    bullish_premium: string;
    call_open_interest: number;
    call_premium: string;
    call_volume: number;
    call_volume_ask_side: number | null;
    call_volume_bid_side: number | null;
    date: string;
    net_call_premium: number | null;
    net_put_premium: number | null;
    put_open_interest: number;
    put_premium: string;
    put_volume: number;
    put_volume_ask_side: number | null;
    put_volume_bid_side: number | null;
}

export interface OptionsVolumeResponse {
    data: OptionsVolumeData;
}

export interface StockVolumePriceLevelData {
    lit_vol: number;
    off_vol: number;
    price: number;
}

export interface StockVolumePriceLevelResponse {
    data: StockVolumePriceLevelData;
}

export interface IvTermStructureData {
    date: string;
    dte: number;
    expiry: string;
    implied_move: string;
    implied_move_perc: string;
    ticker: string;
    volatility: string;
}

export interface IvTermStructureResponse {
    data: IvTermStructureData;
}
