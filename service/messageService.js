import config from '../config.js'
import utils from '../utils.js'

const HEADER = utils.createHeader()

class Message {
    async getAll (){
        try{
            return await fetch(config.BASE_URL+'/messages', {
                method: 'GET',
                headers: HEADER
            })
        } catch(e){
            return {
                error:e
            }
        }   
    }
}

export default new Message()