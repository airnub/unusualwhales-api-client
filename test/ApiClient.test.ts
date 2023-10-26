import { StockApi } from '../src/StockApi';  // Adjust the import to your file structure
import MockAdapter from 'axios-mock-adapter';
import axios, { AxiosResponse } from 'axios';
import { NetPremiumTickResponse } from '../src/types';

// Create an Axios instance
const axiosInstance = axios.create();
const mock = new MockAdapter(axiosInstance);

describe('ApiClient', () => {
    it('should fetch net premium ticks successfully', async () => {
        const ticker = 'SPY';
        
        mock.onGet(`/api/stock/${ticker}/net-prem-ticks`).reply(200, {
            data: [{
                "date": "2023-09-07",
                "net_call_premium": "-2075581.0000",
                "net_call_volume": -2259,
                "net_put_premium": "-15559.0000",
                "net_put_volume": 95,
                "tape_time": "2023-09-07T09:30:00-04:00"
            },
            {
                "date": "2023-09-07",
                "net_call_premium": "670064.0000",
                "net_call_volume": 754,
                "net_put_premium": "-1480020.0000",
                "net_put_volume": -264,
                "tape_time": "2023-09-07T09:31:00-04:00"
            }]
        });
        
        // Initialize StockAPI with the Axios instance
        const stockApi = new StockApi(axiosInstance);
        const response = await stockApi.getNetPremiumTicks(ticker) as NetPremiumTickResponse;

        // Your assertions
        expect(response).toBeDefined();
        expect(response.data).toHaveLength(2);
    });

});
