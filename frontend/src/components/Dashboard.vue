<template>
<div>
    <nav class="navbar navbar-dark custom-nav" style="margin-bottom:0">
    <!-- Navbar content -->
    <h2>Busy Beaver</h2>
    </nav>
  <div style="display:flex">
      <vNavbar></vNavbar>
      <div class="page-content dashboard-container">
        <div class="d-col">
        <div>
          <h2 class="d-header">Upcoming events</h2>
          <div class="bb-shadow-box"> 
            <bbEvents></bbEvents>
          </div>
        </div>
        </div>
        <div class="d-col">
          <h2>Search routes</h2>
          <div class="bb-shadow-box">
            <form>
              <input type="text" class="form-control bb-input" placeholder="Your location"></input>
              <input type="text" class="form-control bb-input" placeholder="Your destination"></input>
              <button class="btn btn-primary">Find Route</button>
            </form>
          </div>
          <h2>Easy Event Add</h2>
            <addEventForm></addEventForm>
          </div>
        </div>
        <div class="d-col">
          <div class="bb-shadow-box">
            <bbEvents></bbEvents>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import bbEvents from './Events.vue'
import vNavbar from './VNavbar.vue';
import addEventForm from './AddEventForm.vue';

export default {
  name: 'app',
  components: {
      bbEvents,
      vNavbar,
      addEventForm,
  }
}
</script>

<style scoped>
.dashboard-container{
  display: flex;
}

.d-col{
  flex-grow: 1;
  padding: 10px;
}

.bb-input{
  margin: 10px;
}
</style>