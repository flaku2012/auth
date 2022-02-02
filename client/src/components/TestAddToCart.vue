<template>
  <div>
      <button @click="addItem">Add to cart</button>
  </div>
</template>

<script>
export default {
    name: 'BaseButon',
    setup( props, {emit} ){
        function addItem(){
           emit('add-item-to-cart') 
        }

        return{addItem}
    }

}
</script>

<style>

</style>