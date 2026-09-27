export function paintPlate(initials: string, name: string, night: boolean): HTMLCanvasElement {
  const canvas = document.createElement('canvas')
  canvas.width = 768
  canvas.height = 1024
  const ctx = canvas.getContext('2d')
  if (!ctx) return canvas

  const paper = night ? '#1A1410' : '#E4D3B8'
  const ink = night ? '#F2E6D4' : '#1A1410'
  const brass = '#9A7048'

  ctx.fillStyle = paper
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.strokeStyle = brass
  ctx.lineWidth = 6
  ctx.strokeRect(28, 28, canvas.width - 56, canvas.height - 56)

  ctx.beginPath()
  ctx.moveTo(28, 28)
  ctx.lineTo(120, 28)
  ctx.moveTo(28, 28)
  ctx.lineTo(28, 120)
  ctx.stroke()

  ctx.fillStyle = ink
  ctx.font = '700 220px Fraunces, Georgia, serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(initials, canvas.width / 2, canvas.height / 2 - 40)

  ctx.font = '500 36px Figtree, sans-serif'
  ctx.fillText(name, canvas.width / 2, canvas.height - 160)

  ctx.font = '400 22px Figtree, sans-serif'
  ctx.fillStyle = brass
  ctx.fillText('No licensed photo on file', canvas.width / 2, canvas.height - 110)

  return canvas
}
