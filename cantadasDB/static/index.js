function iniciar(){
  document.getElementById("copy").addEventListener("click",copiar_texto);
}
function copiar_texto() {
    navigator.clipboard.writeText(document.getElementById("chamada").textContent+" "+document.getElementById("paquera").textContent);
    alert("Copiada a cantada: "+ document.getElementById("chamada").textContent+" "+document.getElementById("paquera").textContent);
}
