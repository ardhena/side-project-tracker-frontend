<template>
  <font-awesome-icon icon="plus-square" class="plus-button" @click="$emit('click')"/>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

library.add(faPlusSquare)

export default {
  name: 'PlusButton',
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/variables";

.plus-button {
  padding: 0 5px;
  cursor: pointer;
  color: $secondary;
  &:hover {
    color: $black;
  }
}
</style>
