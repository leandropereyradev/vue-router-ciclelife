<template>
  <h1>About Page</h1>
  <hr>
  <h2>{{ name }}</h2>
  <button @click="onChangeName">Cambiar nombre</button>
</template>

<script>

export default {
  data() {
    return {
      name: 'Leandro'
    }
  },

  methods: {
    onChangeName() {
      this.name = 'Gastón'
    }
  },

  beforeCreate() { console.log("beforeCreate"); },
  created() {
    this.name = 'Leandro Pereyra'
    console.log("created");
    //Aquí se hacen las peticiones HTTP
  },
  beforeMount() { console.log("beforeMount"); },
  mounted() { console.log("mounted"); },
  beforeUpdate() { console.log("beforeUpdate"); },
  updated() { console.log("updated"); },
  activated() { console.log("activated"); },
  deactivated() { console.log("deactivated"); },
  beforeUnmount() { console.log("beforeUnmount"); },
  unmounted() {
    console.log("unmounted");
    // Aquí se hacen las limpiezas
  },
  errorCaptured() { console.log("errorCaptured"); },
  renderTracked() { console.log("renderTracked"); },
  renderTriggered() { console.log("renderTriggered"); },
}
</script>