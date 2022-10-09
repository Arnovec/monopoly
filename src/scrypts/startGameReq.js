import axios from 'axios';
export default async function startGameReq(count) {
    return await axios.get(`https://monopoly.loc/POST/api/progress/start/${count}`)    
}