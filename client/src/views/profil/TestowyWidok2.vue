<template>
  <div>
    <div v-for="product in userPigeonHawks" :key="product.id">
      I: {{ product }}
    </div>
    TEST: ||  ||
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  
  setup()
  {
    const store = useStore()

    const userPigeonHawks = computed( ()=> store.state.pigeonHawk.userPigeonHawks )

 
    onMounted( ()=> {
        //console.log(store.state.pigeonHawk.userPigeonHawks)
        store.dispatch('pigeonHawk/getUserPigeonHawks')
    })

    return {
     userPigeonHawks
    }
  }

}
</script>

<style>

</style>