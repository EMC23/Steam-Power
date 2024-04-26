<script>
import Character  from './tabs/Character.vue';

export default {
  components: {
    Character
  },
  props: {
    msg: String
  }
}
</script>

<template>
<div class="tab-panels">
  -----------------------
  <component :is=msg />
</div>
</template>


