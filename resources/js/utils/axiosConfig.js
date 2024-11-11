import axios from 'axios';

import { mainPath } from './helper';

const api = axios.create({
    baseURL: `${mainPath}/api`,
});

export default api;
