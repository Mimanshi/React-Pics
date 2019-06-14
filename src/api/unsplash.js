import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 0d348f8c3d8a8cf1e1046c72892dfcbe1d3b1adb3e69b92ea0d6503d3a4689b5'
    }
});
