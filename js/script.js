
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); // ctx = context





render = () => {
  ctx.fillStyle = '#000'
  ctx.fillRect(0,0, canvas.width, canvas.height)
}

render();