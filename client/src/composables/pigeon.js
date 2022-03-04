import { ref } from 'vue'
import axios from 'axios'

export function usePigeons() {

    const pigeons = ref([])
    const pigeon = ref([])

    const getPigeons = async (id) => {
        axios.get('pigeon/get_user_pigeons/'+id)
            .then(response => {
                pigeons.value = response.data
                //return response
            })
            .catch(error => {
                console.log('getPigeons error', error)
                return error
            })
    }
    
    
    const getPigeon = async (id) => {
        axios.get('pigeon/get_user_pigeon/' + id)
            .then(response => {
                pigeon.value = response.data
            })
            .catch(error => {
                console.log('getPigeon error', error)
                return error
            })
    }


    return {
        pigeons,
        pigeon,
        getPigeons,
        getPigeon
    }
}