// Copyright (c) 2023 Airnub Technologies LTD. All rights reserved.
// Licensed under the MIT License. See LICENSE file in the project root for full license information.

export interface StockData {
  sector: string | null;
  put_volume: number;
  next_earnings_date: string | null;
  net_put_premium: string;
  avg_30_day_put_oi: string | null;
  avg_3_day_call_volume: string;
  total_open_interest: number;
  iv30d: string;
  stock_volume: number | null;
  implied_move: string;
  bearish_premium: string;
  issue_type: string | null;
  call_volume: number;
  prev_close: string | null;
  avg_30_day_call_volume: string;
  put_open_interest: number;
  next_dividend_date: string | null;
  call_volume_bid_side: number;
  call_premium: string;
  avg_3_day_put_volume: string;
  implied_move_perc: string;
  iv30d_1w: string;
  prev_call_oi: number;
  prev_put_oi: number;
  net_call_premium: string;
  bullish_premium: string;
  marketcap: string | null;
  date: string;
  avg30_volume: string | null;
  high: string | null;
  volatility: string;
  put_volume_ask_side: number;
  close: string | null;
  week_52_high: string | null;
  avg_30_day_call_oi: string | null;
  put_premium: string;
  week_52_low: string | null;
  iv30d_1m: string;
  call_volume_ask_side: number;
  low: string | null;
  iv_rank: string;
  er_time: string | null;
  is_index: boolean;
  call_open_interest: number;
  iv30d_1d: string;
  put_call_ratio: string;
  avg_7_day_call_volume: string;
  put_volume_bid_side: number;
  avg_30_day_put_volume: string;
  ticker: string;
  avg_7_day_put_volume: string;
}

export interface StockScreenerResponse {
  data: StockData[];
}
  
export interface OptionContractData {
    ask_side_volume: number;
    avg_price: string;
    bid_side_volume: number;
    chain_prev_close: string;
    close: string;
    cross_volume: number;
    er_time: string | null;
    floor_volume: number;
    high: string;
    last_fill: string;
    low: string;
    mid_volume: number;
    multileg_volume: number;
    next_earnings_date: string | null;
    no_side_volume: number;
    open: string;
    open_interest: number;
    option_symbol: string;
    premium: string;
    sector: string | null;
    stock_multi_leg_volume: number;
    stock_price: string;
    sweep_volume: number;
    ticker_vol: number;
    total_ask_changes: number;
    total_bid_changes: number;
    trades: number;
    volume: number;
  }
  
export interface OptionsScreenerResponse {
    data: OptionContractData[];
  }
