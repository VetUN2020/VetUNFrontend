<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <router-link to="/"
        ><b-navbar-brand>
          <img
            src="../assets/Icono.png"
            class="d-inline-block align-top"
            height="50px" /></b-navbar-brand
      ></router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        
          <b-navbar-nav class="ml-auto">
            <template>
            <b-nav-form>
              <router-link to="/registro"
                ><b-button
                  variant="success"
                  size="sm"
                  class="my-2 mr-2 my-sm-3"
                  type="submit"
                  >Registrarse</b-button
                ></router-link
              >
            </b-nav-form>
            <b-nav-form>
              <router-link to="/login">
                <b-button
                  variant="success"
                  size="sm"
                  class="my-2 my-sm-0"
                  type="submit"
                  >Iniciar sesión</b-button
                >
              </router-link>
            </b-nav-form>
            </template>
            
            <template>
              <b-nav-form>
              <b-dropdown id="dropdown-1" text="Dropdown Button" size="sm" variant="success" class="my-2 mr-2 my-sm-3">
                <b-dropdown-item>Perfil</b-dropdown-item>
                <b-dropdown-item>Cerrar sesion</b-dropdown-item>
              </b-dropdown>
              </b-nav-form>
            </template>
          </b-navbar-nav>
  
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {},
};
</script>