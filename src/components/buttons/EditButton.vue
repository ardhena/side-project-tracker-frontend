<template>
  <font-awesome-icon icon="edit" class="button" @click="$emit('click')"/>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit)

export default {
  name: 'EditButton',
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/variables";

.button {
  padding: 4px 0;
  cursor: pointer;
  color: $secondary;
  &:hover {
    color: $black;
  }
}
</style>
