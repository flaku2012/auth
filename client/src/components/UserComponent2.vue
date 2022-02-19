<template>
  <div>
    <h1>TEST EMIT 2</h1>
    <div>
      <button @click="submitEmit" >Wyślij emita</button>
    </div>
  </div>
</template>

<script>
export default {

  setup(props, {emit})
  {
    console.log(props)

    const submitEmit = () => {
      emit('submit2', 'Test wysyłku emita2')
      //console.log('test')
    }

    const onSubmitEmit = (val) => {
      console.log(val)
    }

    return {
      submitEmit,
      onSubmitEmit
    }
  }

}
</script>

<style>

</style>