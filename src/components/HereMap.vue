<template>
  <div id="map">
    <!--In the following div the HERE Map will render-->
    <div id="mapContainer" style="height:600px;width:100%" ref="hereMap"></div>
  </div>
</template>

<script>
export default {
  name: "HereMap",
  props: {
    center: Object,
    veterinarias: Array,
    veterinariaProfile: String,
    // center object { lat: 40.730610, lng: -73.935242 }
  },
  data() {
    return {
      platform: null,
      apikey: "wPs9VRprxBAhJDtE9XjAqvAcrBJsHU2D9YwZfi8SRAM",
      // You can get the API KEY from developer.here.com
    };
  },
  async mounted() {
    const platform = new window.H.service.Platform({
      apikey: this.apikey,
    });
    this.platform = platform;
    this.initializeHereMap();
  },
  methods: {
    initializeHereMap() {
      // rendering map

      const mapContainer = this.$refs.hereMap;
      const H = window.H;
      // Obtain the default map types from the platform object
      var maptypes = this.platform.createDefaultLayers();
      var service = this.platform.getSearchService();
      var map;
      if (this.center) {
        // Instantiate (and display) a map object:
        map = new H.Map(mapContainer, maptypes.vector.normal.map, {
          zoom: 15,
          center: this.center,
          // center object { lat: 40.730610, lng: -73.935242 }
        });
      } else {
        map = new H.Map(mapContainer, maptypes.vector.normal.map, {
          zoom: 8,
          center: { lat: 4.711, lng: -74.0721 },
          // center object { lat: 40.730610, lng: -73.935242 }
        });
      }

      if (this.veterinarias.length > 0) {
        this.veterinarias.forEach((veterinaria) => {
          service.geocode(
            {
              q: veterinaria.direccionVeterinaria,
            },
            (result) => {
              // Add a marker for each location found
              result.items.forEach((item) => {
                map.addObject(new H.map.Marker(item.position));
              });
            },
            alert
          );
        });
      } else if (this.veterinariaProfile !== null) {
        service.geocode(
          {
            q: this.veterinariaProfile,
          },
          (result) => {
            // Add a marker for each location found
            result.items.forEach((item) => {
              map.addObject(new H.map.Marker(item.position));
            });
          },
          alert
        );
      }

      //addEventListener("resize", () => map.getViewPort().resize());

      // add UI
      H.ui.UI.createDefault(map, maptypes);
      // End rendering the initial map

      // add behavior control
      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    },
  },
};
</script>

<style scoped>
#map {
  width: 60vw;
  min-width: 360px;
  text-align: center;
  margin: 5% auto;
  background-color: #ccc;
}
</style>
