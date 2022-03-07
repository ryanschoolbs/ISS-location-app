const app = Vue.createApp({
   data() {
      return {
         apiURL: "https://api.wheretheiss.at/v1/satellites/25544",
         lat: "",
         lon: "",
         id: "",
         error: "false",
         results: [],
      };
   },

   methods: {
      // async getISS() {
      //    try {
      //       await fetch(this.apiURL)
      //          .then((res) => res.json())
      //          .then((data) => {
      //             this.result.value = data;

      //             const { id, latitude: lat, longitude: lon } = data;

      //             console.log(data);
      //             console.log(id);
      //             console.log(lat);
      //             console.log(lon);
      //          });
      //    } catch (error) {
      //       console.log(error);
      //    }
      // },

      autoUpdate() {},
   },

   // mounted() {
   //    fetch(this.apiURL)
   //       .then((res) => res.json())
   //       .then((data) => {
   //          this.results = data;
   //          const { id, latitude: lat, longitude: lon } = this.data;
   //       })
   //       .catch((err) => {
   //          console.log(err.message);
   //       });

   //    // const { id: id, latitude: lat, longitude: lon } = this.data;
   // },

   async mounted() {
      const response = await fetch(this.apiURL);
      const data = await response.json();
      // data.id = this.id;
      // console.log(this.id);

      let { id: id, latitude: lat, longitude: lon } = data;
      console.log(data);
      console.log(id);
      console.log(lat);
      console.log(lon);

      // this.results = data;
      this.id = id;
      this.lat = lat;
      this.lon = lon;
   },
});

app.mount("#app");
