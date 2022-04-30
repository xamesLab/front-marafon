import config from './../config.js'
import utils from './../utils.js'

const HEADER = utils.createHeader()

class Auth {
    async register (email){
        try{
            return await fetch(config.BASE_URL, {
                method: 'POST',
                headers: HEADER,
                body: JSON.stringify({email})
            })
        } catch(e){
            return {
                error:e
            }
        }   
    }
}

export default new Auth()