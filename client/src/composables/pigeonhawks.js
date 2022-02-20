import { ref } from 'vue'
import axios from 'axios'

export default function usePigeonHawks(){
    
    const pigeonHawks = ref([])

    const getPigeonHawks = async () => {
        const {data} = axios.get('pigeonhawks/get_user_pigeon_hawks')
        console.log(data)
        pigeonHawks.value = data
    }


    return{
        pigeonHawks,
        getPigeonHawks
    }
}