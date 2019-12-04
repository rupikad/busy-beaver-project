<template>
  <div>
    <navbar></navbar>
    <div class="row">
      <div class="col-sm-8">
        <div class="_content sm col-sm-12" align="center">
          <p></p>
          <p class="lead">"Missed your class because you were confused about the bus schedules"?</p>

          <p
            class="lead"
          >"Lost because you are super new to the campus and not sure where your classes are at"?</p>
          <p class="lead">"Need an app that can help you be on time every time? "</p>

          <h2 class="highlight"></h2>
          <h5 class="display-4">
            Introducing <span class="beaver">Busy Beaver</span>
           
          </h5>

          <p
            class="details"
          >The Busy Beaver application aims to integrate student class schedules with the Beaver Bus schedule. We are offering a one stop destination for students to synch up their calendars with the Beaver Bus so that they will get to class on time, move around on campus, and get the most out of this transportation service.</p>
          <!-- <p>Busy Beaver helps you get to your location faster and way lot easier. It is convenience-on-the-go! With BusyBeaver, you can keep track of your class schedules, track bus timings, and search to explore locations quick.</p> -->
          <p class="display-custom">
            <span class="dot"></span> Highlights
            <span class="dot"></span>
          </p>
          <p
            class="details"
          >Our application is an innovative take on traditional transit system applications because it adds the personalized touch of adding a student's schedule and calendar. This way the user doesn't have to go back and forth on apps in order to make sure they reach their destination on time. This application also takes care of updated events and resolves any scheduling changes in real time, and alerts the user of updated times to fit their schedule.</p>
        </div>
        <!-- <div class="sm col-sm-12" align="left">
          <h1>How is it useful to me?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod in pellentesque massa. Sed nisi lacus sed viverra tellus in. Ac turpis egestas integer eget aliquet nibh praesent.</p>
        </div>-->
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
img {
  float: left;
}
.row {
  padding: 10px;
}

.details {
  font-size: 1.1rem;
}

.display-custom {
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.2;
  margin-top:10px;
}
.line {
  width: 5px;
  height: 40px;
  background-color: #dc4405;
  display: inline-block;

}
.dot{
    height: 15px;
  width: 15px;
  background-color: #dc4405;
  border-radius: 50%;
  display: inline-block;
}

.beaver{
 color:#DC4405;
 font-weight: 400;

}
</style>