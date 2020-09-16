var app = new Vue({
  el: '#vue-element',
  data: {
    onePt: {
      "patientGuid": "SOME-REALLY-LONG-1234",
      "firstName": "Sylvia",
      "lastName": "Hernandez",
      "dob": "2012-09-01",
      "sexAtBirth": "F",
      "priority": "critical"
    },
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
