var app = new Vue({
  el: '#vue-element',
  data: {
    ptList: []
  },
  created() {
    fetch("https://randomuser.me/api")
    .then( response => response.json() )
    .then( json => {
      this.ptList = json;

      console.log(json)}
    );
  }
})
