<template>
  <div>
      <h1 class="text-center">CZAT</h1>
      <hr>
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <ul class="list-group">
                    <CzatMessage 
                    v-for="value in messages" 
                    :key="value.index"
                    :color="'danger'"
                    >
                        {{value}}
                    </CzatMessage>
                    <input type="text" class="form-control" placeholder="Treść wiadomości..." v-model="formValue.message" @keyup.enter="send">

                    ===================================================================
                    KURS P3
                    ===================================================================
                    <button @click="fetchMessages()">TEST BTN</button>
                    <div class="position-relative">
                        <li class="list-group-item" v-for="(message, index) in messagesCourse" :key="index" >
                            {{message['message']}}
                        <!-- <small class="bagde position-absolute bottom-0 end-0" >{{message.user.name}}</small> -->
                        </li>
                    </div>
                    <input type="text" v-model="newMessageCourse" @keyup.enter="sendMessageCourse()" class="form-control" placeholder="Treść wiadomości...">


                </ul>
            </div>
            <div class="col-4">
                || {{messagesCourse}} || TEST  ||
            </div>
        </div>
       

  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import CzatMessage from "@/components/CzatMessage"
import { onMounted } from '@vue/runtime-core'
import axios from 'axios'
import { useStore } from 'vuex'
//import Echo from "laravel-echo"
export default {
    name: 'czat',
    components: {
        CzatMessage,
    },

    setup()
    {
        const store = useStore();
        const logged_user = ref(store.getters['auth/user']);

        const formValue = reactive({
            message: ''
        })

        const messages = ref([])
        const messangeSocket = ref([])

        //zmienne z  kursu p3
        const messagesCourse = ref([])
        const newMessageCourse = ref('')

        //funkcja z kursu p3
        function fetchMessages(){
            axios.get('messages').then(response =>{
                messagesCourse.value = response.data
            })
        }
        
        

        function sendMessageCourse()
        {
            messagesCourse.value.push({
                user: logged_user.value,
                message: newMessageCourse.value
            })

            axios.post('messages', { 
                message: newMessageCourse.value 
            })

            newMessageCourse.value = ''
            //fetchMessages()

        }

        // koniec funkcje z kursu p3

        function send()
        {
            if( formValue.message != 0 )
            {
                messages.value.push(formValue.message)

                axios.post('/send', {
                    message: formValue.message
                })
                .then( response => {
                    console.log("sss"+response);
                    formValue.message = ''
                }) 
                .catch( error => {
                    console.log(error);
                })

            }
        }

        onMounted(() => {

            fetchMessages()
            // window.Echo.channel('chat')
            // .listen('ChatEvent', (e) => {
            //     console.log(e);
            //     messages.value.push(e.message)
            // });

            // console.log(window.Echo.private('chatcourse'))

            window.Echo.private('chatcourse')
                .listen('MessageSent', (event) => {
                    messagesCourse.value.push(event.message)
                    console.log("Event: "+event.message);
            })

            // window.Echo.channel('channel')
            // .listen('Hello', (e) => {
            //     console.log(e)
            // })

            // window.Echo.join('chat')
            // .listen('ChatEvent', (event) =>{
            //     messangeSocket.value.push(event.message);
            // });

            //messangeSocket.value = 'TIKOo';
     
        });


        return {
            store,
            formValue,
            messages,
            messangeSocket,
            messagesCourse,
            newMessageCourse,
            logged_user,
            send,
            fetchMessages,
            sendMessageCourse
        }
    }

}
</script>

<style>

</style>