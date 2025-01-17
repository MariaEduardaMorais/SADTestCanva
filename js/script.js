function circulo(x, y, cor) {
    const c = document.getElementById('canvas');
    const ctx = c.getContext('2d');
    const radius = 10;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = cor;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.restore();
  }
  
  function triangulo(x, y, cor) {
    const c = document.getElementById('canvas');
    const ctx = c.getContext('2d');
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y - 25);
    ctx.lineTo(x - 25, y + 25);
    ctx.lineTo(x + 25, y + 25);
    ctx.closePath();
    ctx.fillStyle = cor;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.restore();
  }
  
  function retangulo(x, y, cor) {
    const c = document.getElementById('canvas');
    const ctx = c.getContext('2d');
    ctx.save();
    ctx.beginPath();
    ctx.rect(x - 25, y - 25, 50, 50);
    ctx.fillStyle = cor;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.restore();
  }
  
  function drawShape(x, y, shape, color) {
    if (shape === 'circulo') {
      circulo(x, y, color);
    } else if (shape === 'triangulo') {
      triangulo(x, y, color);
    } else if (shape === 'retangulo') {
      retangulo(x, y, color);
    }
  }
  
  function getMousePosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const shape = document.getElementById('shape').value;
    const color = document.getElementById('color').value;
    drawShape(x, y, shape, color);
  }
  
  function startAnimation() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const shape = document.getElementById('shape').value;
    const color = document.getElementById('color').value;
  
    function drawRandomPoint() {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      drawShape(x, y, shape, color);
    }
  
    const interval = setInterval(drawRandomPoint, 500);
    setTimeout(() => clearInterval(interval), 5000); // Para a animação após 5 segundos
  }
  
  function resetCanvas() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  
  document.getElementById('canvas').addEventListener('mousedown', function (e) {
    getMousePosition(this, e);
  });
  
  document.getElementById('animate').addEventListener('click', startAnimation);
  document.getElementById('reset').addEventListener('click', resetCanvas);
  