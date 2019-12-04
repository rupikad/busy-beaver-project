<template>
<div>
    <vNavbar></vNavbar>
    <h1>Your Events</h1>
    <bbEvents></bbEvents>
</div>
</template>

<script>
import bbEvents from './Events.vue'
import vNavbar from './VNavbar.vue';

export default {
  name: 'app',
  components: {
      bbEvents,
      vNavbar
  }
}
</script>