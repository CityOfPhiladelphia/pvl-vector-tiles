<template>
  <div class="legend-overlay">
    <div
      v-show="hundredBlock"
      class="legend"
    >
      <ul class="legend-list">
        <li class="legend-listitem">
          {{ hundredBlock }}
        </li>
        <li class="legend-listitem">
          {{ status }}
        </li>
      </ul>
    </div>
  </div>

</template>

<script>

export default {
  name: 'MapToolTip',
  props: [
    'position',
    'options',
    'items',
  ],
  computed: {
    hundredBlock() {
      let data = this.$store.state.map.vectorLayerMouseover;
      let value;
      if (data) {
        value = data.L_HUNDRED + ' ' + data.STNAME;
      }
      return value;
    },
    status() {
      let data = this.$store.state.map.vectorLayerMouseover;
      let value;
      if (data) {
        value = 'Status: ' + data.Status;
      }
      return value;
    },
  },
  // mounted() {
  //   // console.log('LegendControlNoTopic, this.$props.options:', this.$props.options);
  // },
};
</script>

<style>


.legend {
  display: inline-block;
  padding: 6px 8px;
  font: 14px/16px Arial, Helvetica, sans-serif;
  background: white;
  background: rgba(255,255,255,1);
  -webkit-box-shadow: 0 0 15px rgba(0,0,0,0.2);
          box-shadow: 0 0 15px rgba(0,0,0,0.2);
  border-radius: 5px;
  line-height: 18px;
  color: #555;
}
.legend-box {
  display: inline-block;
  width: 18px;
  height: 18px;
  opacity: 1;
  vertical-align: middle;
  margin-right: 4px;
}
.legend-circle {
  display: inline-block;
  width: 18px;
  height: 18px;
  opacity: 1;
  vertical-align: middle;
  margin-right: 4px;
  border-radius: 50%;
}
.list-text {
  display: inline-block;
  vertical-align: middle;
}
.legend-list {
  list-style: none;
  padding-top: 2px;
  padding-left: 2px;
  margin-left: 0px;
  /*override standards*/
  margin-bottom: 0;
}

.legend-overlay {
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
  position: absolute;
  width: 25%;
  min-width: 200px;
  /* bottom: 0; */
  left: 0;
  padding: 10px;
  /* margin-bottom: 24px; */
}

.legend-overlay .legend-overlay-inner {
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
}

.legend-overlay h2 {
  line-height: 24px;
  display: block;
  margin: 0 0 10px;
}

.legend-overlay .legend .bar {
  height: 10px;
  width: 100%;
  background: linear-gradient(to right, #fca107, #7f3121);
}

.legend-overlay input {
  background-color: transparent;
  display: inline-block;
  width: 100%;
  position: relative;
  margin: 0;
  cursor: ew-resize;
}

</style>
