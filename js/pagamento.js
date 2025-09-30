document.addEventListener('DOMContentLoaded', function() {
  const nomeFilme = localStorage.getItem('filmeSelecionado');

  if (nomeFilme && document.getElementById('filme')) {
    document.getElementById('filme').value = nomeFilme;
  }


  const button = document.getElementById('pagamento');
  const alerta = document.getElementById('alerta');

  if (button && alerta) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      alerta.style.display = 'block';
      setTimeout(() => {
        alerta.style.display = 'none';
        window.location.href = "index.html";
      }, 3000);
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const total = localStorage.getItem('totalIngressos');
    if (total) {
        document.getElementById('valorTotal').textContent = total;
    } else {
        document.getElementById('valorTotal').textContent = '0.00';
    }
});