import {MODAL} from './view.js'

const getToken = ()=>{
    const cookie = document.cookie
    return cookie.split(';').reduce((t,v)=>{
        const cookie = v.trim()
        if(cookie.slice(0,6)==='token='){
            return cookie.split('=')[1]
        } 
        return t
    },'')
}

const createHeader = ()=>{
    return {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': getToken()?`Bearer ${getToken()}`:''
    }
}

const removeModal = ()=>{
    MODAL.modal.style.display = "none";
    MODAL.title.innerText = ''
    MODAL.content.innerHTML = ''
}

export default {
    getToken, createHeader, removeModal
}