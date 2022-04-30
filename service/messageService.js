import config from '../config.js'
import utils from '../utils.js'
import storage from '../storage.js'

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

    async sendMessage (text){
        storage.state.unshift({
            author: '',
            content: text,
            date: "",
            status: "SENDED",
        });
    }
}

export default new Message()