import axios from 'axios'

export default{
    namespaced: true, 
    state: {
        userPigeonHawks: []
    },

    getters: {
        
    },

    mutations: {
        SET_USER_PIGEON_HAWKS( state, userPigeonHawks ){
            state.userPigeonHawks = userPigeonHawks
        }
    },

    actions: {
        getUserPigeonHawks( {commit} ){
            //let response = await axios.get('pigeonhawks/get_user_pigeon_hawks');
            axios.get('pigeonhawks/get_user_pigeon_hawks')
            .then( response => {
                commit('SET_USER_PIGEON_HAWKS', response.data)
                //console.log(response.data)
            })
            //return dispatch('attempt', response.data.token)
        },
    }
}
