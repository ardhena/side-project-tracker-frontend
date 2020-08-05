<template>
  <div class="tooltip">
    <div @mouseover="hover = true" @mouseleave="hover = false">
      <slot name="content"></slot>
    </div>
    <div v-show="hover" class="tooltiptext">
      <slot name="tooltip" ></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopTooltip',
  data: function() {
    return {
      hover: false
    }
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/variables";

.tooltip {
  position: relative;
  display: inline-block;

  .tooltiptext {
    font-size: 10pt;
    width: 200px;
    background-color: $secondary-light;
    color: $secondary;
    border: $secondary 1px solid;
    text-align: center;
    padding: 5px 0;
    margin-bottom: 9px;
    border-radius: 5px;
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -100px;

    &::after {
      content: " ";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: $secondary transparent transparent transparent;
    }
  }
}
</style>
