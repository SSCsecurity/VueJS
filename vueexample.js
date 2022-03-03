new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
})


axios
  .get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => (this.info = response.data.bpi))
  
  created() {
  // Simple GET request using fetch
  fetch("https://api.npms.io/v2/search?q=vue")
    .then(response => response.json())
    .then(data => (this.totalVuePackages = data.total));
}

async created() {
  // GET request using fetch with async/await
  const response = await fetch("https://api.npms.io/v2/search?q=vue");
  const data = await response.json();
  this.totalVuePackages = data.total;
}

created() {
  // GET request using fetch with set headers
  const headers = { "Content-Type": "application/json" };
  fetch("https://api.npms.io/v2/search?q=vue", { headers })
    .then(response => response.json())
    .then(data => (this.totalVuePackages = data.total));
}

created() {
  // Simple POST request with a JSON body using axios
  const article = { title: "Vue POST Request Example" };
  axios.post("https://reqres.in/api/articles", article)
    .then(response => this.articleId = response.data.id);
}

created() {
  // POST request using axios with set headers
  const article = { title: "Vue POST Request Example" };
  const headers = { 
    "Authorization": "Bearer my-token",
    "My-Custom-Header": "foobar"
  };
  axios.post("https://reqres.in/api/articles", article, { headers })
    .then(response => this.articleId = response.data.id);
}

