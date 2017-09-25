const home = { template: 
  `
    <div class="center-content-frame red-layer">
      <div class="home-title">
        <span class="small-text-title">Welcome to</span>
        <h1 class="main-title">New York</h1>
      </div>
    </div>
  `
}

const attractions = { template: 
  `
    <div class="center-content-frame blue-layer">
      <div class="home-title">
        <span class="small-text-title">Lorem ipsum</span>
        <h1 class="main-title">Attractions</h1>
      </div>
    </div>
  `
}

const tours = { template: 
  `
    <div class="center-content-frame green-layer">
      <div class="home-title">
        <span class="small-text-title">Lorem ipsum</span>
        <h1 class="main-title">Tours</h1>
      </div>
    </div>
  `
}

const touristMap = { template: 
  `
    <div class="center-content-frame grey-layer">
      <div class="home-title">
        <span class="small-text-title">Lorem ipsum</span>
        <h1 class="main-title">Tourist Map</h1>
      </div>
    </div>
  `
}

const help = { template: 
  `
    <div class="center-content-frame brown-layer">
      <div class="home-title">
        <span class="small-text-title">Lorem ipsum</span>
        <h1 class="main-title">Help</h1>
      </div>
    </div>
  `
}

const routes = [
  { path: '/', component: home },
  { path: '/attractions', component: attractions },
  { path: '/tours', component: tours },
  { path: '/tourist-map', component: touristMap },
  { path: '/help', component: help }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  data: {
    showMenu: false,
  },
  methods: {
    toggleMenu: function() {
      this.showMenu = !this.showMenu
    }
  }
}).$mount('#app')