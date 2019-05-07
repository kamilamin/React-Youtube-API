import axios from 'axios';
const KEY = 'AIzaSyAPOH7OjW8hCVslHWiPWgdkLB_q65IX9zo'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})