import axios from 'axios';
export default async function checkSession() {
    let uuid = JSON.parse(window.localStorage.getItem('uuid'));
    let result = await axios.post(`http://localhost:8081/api/v1/progress/check/${uuid}`)
    return result.data.status
}