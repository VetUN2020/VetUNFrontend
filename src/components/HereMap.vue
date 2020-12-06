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

      // add behavior control
      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      // add UI
      const ui = H.ui.UI.createDefault(map, maptypes);

      if (this.veterinarias.length > 0) {
        this.veterinarias.forEach((veterinaria) => {
          service.geocode(
            {
              q: veterinaria.direccionVeterinaria,
            },
            (result) => {
              // Add a marker for each location found
              result.items.forEach((item) => {
                const marker1 = new H.map.Marker(item.position);
                marker1.setData(this.infoVet(veterinaria));
                marker1.addEventListener(
                  "tap",
                  (event) => {
                    const bubble = new H.ui.InfoBubble(
                      event.target.getGeometry(),
                      {
                        content: event.target.getData(),
                      }
                    );
                    ui.addBubble(bubble);
                  },
                  false
                );
                map.addObject(marker1);
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

      addEventListener("resize", () => map.getViewPort().resize());

      // End rendering the initial map
    },
    infoVet(veterinaria) {
      let titulo = "<h6><b>" + veterinaria.nombreVeterinaria + "</b></h6>";
      let separacion = "<br />";
      let telefono =
        "<p> Telefono: " + veterinaria.telefonoVeterinaria + "</p>";
      let link =
        '<p> <a href="http://localhost:8080/veterinariaProfile?idVeterinaria=' +
        veterinaria.idVeterinaria +
        '" target="_blank"> Link </a> </p>';

      return titulo + separacion + telefono + link;
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
