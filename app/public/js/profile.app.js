var app = new Vue({
  el: '#user',
  data: {
    userName: "",
    userLocation: "",
    userDob: "",
    userAge: "",
    userEmail: "",
    userImgLarge: "",
    userImgThumb: ""
  },
created() {
  this.fetchUser();
},

methods: {
  fetchUser: function() {
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => {
      var userData = data.results[0];
      console.log(userData);
      this.userName= userData.name.first + " " + userData.name.last;
      this.userLocation= userData.location.country;
      this.userDob= userData.dob.date;
      this.userAge= userData.dob.age;
      this.userEmail = userData.email;
      this.userImgLarge = userData.picture.large;
      this.userImgThumb = userData.picture.thumbnail;
      });
    },
  handleNewUser(){
    this.fetchUser();
  },
  formatDate(d) {
    return moment(d).format("dddd, MMMM, Do YYYY, h:mm:ss a");
    }
  }
})
