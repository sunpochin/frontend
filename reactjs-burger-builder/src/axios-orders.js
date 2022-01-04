import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-myburger-pac.firebaseio.com/'
});

export default instance;