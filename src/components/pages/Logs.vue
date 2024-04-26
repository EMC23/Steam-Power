<script>
import { useJigsStore } from "../../stores/jigs";

export default {
  components: {
    name: 'Logs',
  },
  data() {
    return {
      logs: [
        {
          name: 'Log 001',
          id: 'log001',
          msg: 'Log one message'
        },
        {
          name: 'Log 002',
          id: 'log002',
          msg: 'Log two message'
        },
        {
          name: 'Log 003',
          id: 'log003',
          msg: 'Log three message'
        },
      ],
    }
  }
}
</script>

<template>
  <div class="logs">
    <div class="log__item" v-for="log in logs">
      <h2 class="log__title">{{ log.name }}</h2>
      <p class="log__msg">{{ log.msg }}</p>
    </div>
  </div>
</template>
