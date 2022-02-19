<template>
  <div>
    <UserComponent2
    @submit2="onSubmitEmit"
    ></UserComponent2>
    || {{czas}} ||
  </div>
</template>

<script>
import { Zegar } from '@/composables/testcomposable'
import UserComponent2 from '@/components/UserComponent2.vue'
export default {
  components: {
    UserComponent2
  },

  setup()
  {
    const { czas } = Zegar(10)


    function onSubmitEmit(val){
      console.log(val)
    }

    return {
      czas,
      onSubmitEmit
    }
  }

}
</script>

<style>

</style>