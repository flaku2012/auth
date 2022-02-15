<template>
  <div class="position-relative">
      <li class="list-group-item" :class="className()"><slot></slot></li>
      <small class="bagde position-absolute bottom-0 end-0" :class="classBadge()">You</small>
  </div>
</template>

<script>
export default {
    name: 'CzatMessage',
    props: {
        color:{
            type: String
        }
    },

    setup(props)
    {

        function className(){
            return 'list-group-item-'+props.color
        }

        function classBadge()
        {
            return 'bg-'+props.color
        }


        return {
            className,
            classBadge
        }
    }

}
</script>

<style>

</style>