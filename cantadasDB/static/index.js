function iniciar(){
  document.getElementById("copy").addEventListener("click",copiar_texto);
  document.getElementById("copyRow").addEventListener("click", copiar_linha);
}
function copiar_texto() {
    navigator.clipboard.writeText(document.getElementById("chamada").textContent+" "+document.getElementById("paquera").textContent);
    alert("Copiada a cantada: "+ document.getElementById("chamada").textContent+" "+document.getElementById("paquera").textContent);
}

function copiar_linha() {
  let tmpElement = $('<textarea style="opacity:0;"></textarea>');
  let parent = $(this).closest('td').siblings().each(function(){
    tmpElement.text(tmpElement.text() + $(this).text() + '\t');
  }); 
  tmpElement.appendTo($('body')).focus().select();
  document.execCommand("copy");
  tmpElement.remove();
}
