import axios from 'axios';

export default axios.create({
    baseURL: 'https://opendata.resas-portal.go.jp/api/v1/',
    timeout: 1000,
    headers: {
      'X-API-KEY': 'OYP1sFW9qWX43MkUKVf05rQXuDpO8iFAdB3dI6xQ'
    }
});