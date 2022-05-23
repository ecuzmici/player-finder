<template>
  <nav>
    <router-link class="disabled-router-link" to="/" exact>Name Search</router-link> 
    >
    <router-link class="disabled-router-link" to="/positions">Position Search</router-link>
    >
    <router-link class="disabled-router-link" to="/results">Results</router-link>
  </nav>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sen&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

#app {
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 25px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 18px;
  text-decoration: none;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: #4AAE9B;
  text-decoration-line: underline;
  text-underline-offset: 5px;
}

ul {
  padding: 0;
  list-style-type: none;
}

.disabled-router-link {
  pointer-events: none;
}

.footer {
    position: absolute;
    bottom: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.component-container {
    display: grid;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    margin: 20px;
    gap: 15px 10px;
    top: -20px;
    position: relative;
  }
</style>
