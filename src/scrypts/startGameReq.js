import axios from 'axios';
export default async function startGameReq(count, figures) {
    return await axios.post(`https://monopoly.loc/POST/api/progress/start/${count}`, {figures})
        .then(resp => {

        })    
}