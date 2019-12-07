<template>
  <div class="vertical-nav bg-white" id="sidebar">
    <div class="py-4 px-3 mb-1 bg-light">
      <div class="media d-flex align-items-center justify-content-center">
        <img
          src="@/assets/benny beaver.jpg"
          alt="..."
          width="65"
          class="mr-3 rounded-circle img-thumbnail shadow-sm"
        />
      </div>
      <div class="media d-flex align-items-center justify-content-center">
        <h4 class="m-1">Benny Beaver</h4>
      </div>
      <div class="media d-flex align-items-center justify-content-center">
        <button type="button" class="btn btn-primary shadow-sm px-4 mb-4">
          <i class="fa fa-bars mr-2"></i>
          <small class="text-uppercase font-weight-bold">Edit Profile</small>
        </button>
      </div>
    </div>

    <div class="dropdown-divider"></div>

    <ul class="nav flex-column bg-white mb-0 py-4">
      <li class="nav-item open d-inline-block">
        <router-link to="/dashboard" class="nav-link text-dark font-italic bg-light">
          <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
          <i class="material-icons">home</i> Home
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-dark font-italic bg-light" to="/eta">
          <img src="@/assets/Beaver-icon.png" alt="..." class="beaverlogo ml-3" />
          Beaver Bus
        </router-link>
        <!-- </a> -->
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-dark font-italic bg-light" to="/newfeature">
        <!-- <a href="#" class="nav-link text-dark font-italic bg-light"> -->
          <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
          <i class="material-icons">directions_bus</i>
          Corvallis Bus
        </router-link>
        <!-- </a> -->
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-dark font-italic bg-light" to="/map">
          <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
          <i class="material-icons">map</i>
          Campus map
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-dark font-italic bg-light" to="/eventform">
          <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
          <i class="material-icons">favorite</i>
          Add Events
        </router-link>
      </li>
    </ul>

    <div class="dropdown-divider pt-5"></div>

    <div class="d-flex justify-content-around">
      <button type="button" class="btn btn-primary">FAQs</button>
      <button type="button" class="btn btn-primary">Logout</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "v-navbar"
};
</script>

<style scoped>
.beaverlogo {
  height: 1.25rem;
  width: 1.85rem;
}

</style>

<style>
.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
background-color: #dc4405;
border:none;

  }

  .btn-primary{
    background-color:#dc4405;
    border-color:#DC4405;
  }

  .btn-primary:hover{
    background-color:white;
    color:#dc4405;
    border:1px solid #dc4405;
    }
</style>