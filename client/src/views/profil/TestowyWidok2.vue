<template>
  <div>
    <UserComponent2
    @submit2="onSubmitEmit"
    ></UserComponent2>
  </div>
</template>

<script>
import UserComponent2 from '@/components/UserComponent2.vue'
export default {
  components: {
    UserComponent2
  },

  setup()
  {

    const onSubmitEmit = (val) => {
      console.log(val)
    }

    return {
 
      onSubmitEmit
    }
  }

}
</script>

<style>

</style>