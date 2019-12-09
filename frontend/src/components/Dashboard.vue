<template>
<div>
   
  <div style="display:flex">
      <vNavbar></vNavbar>
     
      <div class="page-content" id="content">
          <nav class="navbar navbar-dark custom-nav" style="margin-bottom:0">
    <!-- Navbar content -->
    <h2>Busy Beaver</h2>
    </nav>
    <div class="dashboard-container">
        <div class="d-col">
        <div>
        
          <div class="bb-shadow-box"> 
              <h4 class="d-header">Upcoming events</h4>
            <bbEvents></bbEvents>
          </div>
        </div>
        </div>
        <div class="d-col">
         
          <div class="bb-shadow-box new_form">
             <h4>Search routes</h4>
            <form>
              <input type="text" class="form-control bb-input" placeholder="Your location">
              <input type="text" class="form-control bb-input" placeholder="Your destination">
              <button class="btn btn-primary">Find Route</button>
            </form>
          </div>
          <div >
          <!-- <h4>Easy Event Add</h4> -->
            <addEventForm></addEventForm>
            </div>
          </div>
        </div>
        <!-- <div class="d-col">
          <div class="bb-shadow-box">
            <bbEvents></bbEvents>
          </div>
        </div> -->
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

.new_form{
  margin-bottom: 10px;
}
/* 
 nav li.router-link-active,
    nav li.router-link-exact-active{
      background-color: #DC4405;
    } */

    a.nav-link.text-dark.font-italic.bg-light.router-link-exact-active.router-link-active{
      background-color: aliceblue;
    }
</style>
