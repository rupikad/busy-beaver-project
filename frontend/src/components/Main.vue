<template>
  <div>
    <navbar></navbar>
    <div class="row">
      <div class="col-sm-8">
        <div class="_content sm col-sm-12" >
        
          <p class="lead">"Missed your class because you were confused about the bus schedules"?</p>

          <p
            class="lead"
          >"Lost because you are super new to the campus and not sure where your classes are at"?</p>
          <p class="lead">"Need an app that can help you be on time every time? "</p>

         
          <h5 class="display-4">
            Introducing <span class="beaver">Busy Beaver</span>

          </h5>

          <p
            class="details"
          >The Busy Beaver application aims to integrate student class schedules with the Beaver Bus schedule. We are offering a one stop destination for students to synch up their calendars with the Beaver Bus so that they will get to class on time, move around on campus, and get the most out of this transportation service.</p>
          <!-- <p>Busy Beaver helps you get to your location faster and way lot easier. It is convenience-on-the-go! With BusyBeaver, you can keep track of your class schedules, track bus timings, and search to explore locations quick.</p> -->
         
           <div class="highlights" >
              <p class="display-custom">
             Highlights
            
          </p>
          <p
            class="details">
            <ul>
              <li><span class="dot"></span>Find any route faster and easier.</li>
           <li><span class="dot"></span>Personalized Notifications based on your calendar</li>
           <li><span class="dot"></span>Realtime Bus Alerts and Tracking.</li></ul></p>
        </div>
        <!-- <div class="sm col-sm-12" align="left">
          <h1>How is it useful to me?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod in pellentesque massa. Sed nisi lacus sed viverra tellus in. Ac turpis egestas integer eget aliquet nibh praesent.</p>
        </div>-->
      </div>
      </div>
      <div class="col-sm-4">
        <!--div class="container-fluid bg-1 text-left"    src="@/assets/main_pic.png"-->
        <img
          src="https://assets-ouch.icons8.com/preview/926/05e95e41-e242-4110-858c-d4a6e8511c9e.png"
          class="img-responsive img-circle margin"
          style="display:inline"
          alt="Illustration: Character Searching for location"
          width="400"
          height="400"
          align="right"
        />
        <!-- attribution https://icons8.com -->
      </div>
    </div>

    <!-- <div class="row">
      <div class="col-sm-4">
        <i class="material-icons">home </i> 
        <h3>Real-time Tracking</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod in pellentesque massa. Sed nisi lacus sed viverra tellus in.</p>
      </div>
      <div class="col-sm-4">
        <h3>Sync your Calendars</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod in pellentesque massa. Sed nisi lacus sed viverra tellus in.</p>
      </div>
      <div class="col-sm-4">
        <h3>Customized Notifications</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod in pellentesque massa. Sed nisi lacus sed viverra tellus in.</p>
      </div>
    </div>-->
    <!-- <bbfooter></bbfooter> -->
  </div>
</template>

<script>
import navbar from "./Navbar.vue";
import bbfooter from "./Footer.vue";

export default {
  name: "Main",
  components: {
    navbar,
    bbfooter
  }
};
</script>


<style scoped>
body{
  padding:20px;
}
img {
  float: left;
}
.row {
  padding: 0 20px 0 20px;
  
}

.details {
  font-size: 1.1rem;
}
.details ul{
  margin:0;
}

.display-custom {
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.2;
  padding-right: 10px;
   border-right: 8px solid #eee;
}


.line {
  width: 5px;
  height: 40px;
  background-color: #dc4405;
  display: inline-block;

}
.dot{
    height: 13px;
  width: 13px;
  margin-right: 10px;
  background-color: #dc4405;
  border-radius: 50%;
  display: inline-block;
}

.beaver{
 color:#DC4405;
 font-weight: 400;

}

.highlights{
  margin-top:30px;
  display:flex;
 
}
ul{
  list-style-type:none;
  padding-inline-start: 5px;
}

</style>
