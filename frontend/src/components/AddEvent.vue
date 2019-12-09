<!--html here -->
<template>

<div>
  
    <div style="display:flex">
        
        <v-navbar></v-navbar>
        <div class="page-content" id="content">
          <nav class="navbar navbar-dark custom-nav" style="margin-bottom:0">
    <!-- Navbar content -->
    <h2>Busy Beaver</h2>
    </nav>

        <addEventForm class="page-content bb-add-event-form" id="content"></addEventForm>
    </div>
    </div>
</div>
</template>

<script>
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';
import VNavbar from './VNavbar.vue';
import addEventForm from './AddEventForm.vue';

export default {
    components: {
        DatePick,
        VNavbar,
        addEventForm
        },
}

</script>

<style scoped>
.bb-add-event-form{
    margin: 30px;
}
.event_add{
    background-color: #dc4405 !important;
}
</style>