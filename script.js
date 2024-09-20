function openNav() {
  document.getElementById("sideMenu").style.width = "250px";
  document.getElementById("mainContent").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sideMenu").style.width = "0";
  document.getElementById("mainContent").style.marginLeft= "0";
}

window.onload = function() {
  setTimeout(function() {
    const pantallaCarga = document.getElementById("pantallaCarga");
    pantallaCarga.style.display = "none";
  }, 1500); 
};
