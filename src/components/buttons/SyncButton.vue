<template>
  <font-awesome-icon icon="sync" class="button" @click="$emit('click')" @mouseover="$emit('mouseover')" @mouseleave="$emit('mouseleave')"/>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

library.add(faSync)

export default {
  name: 'SyncButton',
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/variables";

.button {
  padding: 0 5px;
  cursor: pointer;
  color: $secondary;
  &:hover {
    color: $black;
  }
}
</style>
