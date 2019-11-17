<template>
  <div class="vertical-nav bg-white" id="sidebar">
    <div class="py-4 px-3 mb-4 bg-light">
      <div class="media d-flex align-items-center justify-content-center">
        <img
          src="https://res.cloudinary.com/mhmd/image/upload/v1556074849/avatar-1_tcnd60.png"
          alt="..."
          width="65"
          class="mr-3 rounded-circle img-thumbnail shadow-sm"
        />
      </div>
      <div class="media d-flex align-items-center justify-content-center">
        <h4 class="m-1">Jane Doe</h4>
      </div>
      <div class="media d-flex align-items-center justify-content-center">
        <button type="button" class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4">
          <i class="fa fa-bars mr-2"></i>
          <small class="text-uppercase font-weight-bold">Edit Profile</small>
        </button>
      </div>
    </div>

    <ul class="nav flex-column bg-white mb-0">
      <li class="nav-item open">
        <a href class="nav-link text-dark font-italic bg-light">
          <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
          <i class="material-icons">home </i> Home
        </a>
      </li>
      <li class="nav-item">
        <a href class="nav-link text-dark font-italic bg-light">
          <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
          <i class="material-icons">directions_bus </i> 
          Beaver Bus
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-dark font-italic bg-light">
          <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
          <i class="material-icons">directions_bus </i> 
          Corvallis Bus
        </a>
      </li>
      <li class="nav-item">
    <router-link class="nav-link text-dark font-italic bg-light" to="/map">
          <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
          <i class="material-icons">map </i> 
          Campus map
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-dark font-italic bg-light" to="/eventform">
          <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
          <i class="material-icons">favorite </i> 
          Add Events
        </router-link>
      </li>
      
    </ul>
</div>
</template>

<script>
export default {
  name: "v-navbar"
};
</script>
