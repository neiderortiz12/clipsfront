<template>
    <div>
        <div class="about-section">
            <h1>Clips</h1>
            <p>En esta pagina encontraras todo tipo de videos para entretenerte y descargarlos cuando desees
            </p>
            
            </div>

            <h2 style="text-align:center">Nuestro Equipo</h2>
            <div class="row">
            <div class="column">
                <div class="card">
                <img src="@/assets/neider.jpeg" alt="Jane" style="width:100%">
                <div class="container">
                    <h2>Neider Ortiz Luna</h2>
                    <p class="title">Diseñador & desarrollador</p>
                    <p>Estudiante y desarrollador de la Universidad de Nariño</p>
                    <p>neiderfabi12@udenar.edu.co</p>
                </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <img src="@/assets/fotoS.jpeg" alt="Mike" style="width:100%">
                <div class="container">
                    <h2>Sergio Gómez Duque</h2>
                    <p class="title">Diseñador & Desarrollador</p>
                    <p>Estudiante y desarrollador de la Universidad de Nariño</p>
                    <p>sergiogomdu@udenar.edu.co</p>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}
.row{
    max-width: 600px;
    margin: auto;
}
img{
  height: 250px;
  object-fit: cover;
}

.column {
  float: left;
  width: 33.3%;
  max-width: 400px;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>