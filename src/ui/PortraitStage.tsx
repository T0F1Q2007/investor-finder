import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import * as THREE from 'three'
import { paintPlate } from './paintPlate'

type Props = {
  initials: string
  name: string
  axis: 'x' | 'y'
  night: boolean
  reducedMotion: boolean
}

export function PortraitStage({ initials, name, axis, night, reducedMotion }: Props) {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 40)
    camera.position.z = 6.2

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    host.appendChild(renderer.domElement)

    const light = new THREE.DirectionalLight(0xfff1dc, 2.1)
    light.position.set(2, 3, 6)
    scene.add(light)
    scene.add(new THREE.AmbientLight(0x9a7048, 0.35))

    const canvas = paintPlate(initials, name, night)
    const texture = new THREE.CanvasTexture(canvas)
    texture.colorSpace = THREE.SRGBColorSpace

    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(3.2, 4.25),
      new THREE.MeshStandardMaterial({ map: texture, roughness: 0.82, metalness: 0.08 }),
    )
    scene.add(mesh)

    const fit = () => {
      const width = host.clientWidth || 320
      const height = host.clientHeight || 420
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }
    fit()

    const onResize = () => fit()
    window.addEventListener('resize', onResize)

    let frame = 0
    const loop = () => {
      frame = requestAnimationFrame(loop)
      renderer.render(scene, camera)
    }
    loop()

    const from = axis === 'x' ? { y: reducedMotion ? 0 : 0.55 } : { x: reducedMotion ? 0 : 0.45 }
    if (reducedMotion) {
      mesh.rotation.set(0, 0, 0)
    } else {
      gsap.fromTo(
        mesh.rotation,
        from,
        {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
        },
      )
    }

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
      gsap.killTweensOf(mesh.rotation)
      texture.dispose()
      mesh.geometry.dispose()
      const material = mesh.material
      if (Array.isArray(material)) material.forEach((item) => item.dispose())
      else material.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [initials, name, axis, night, reducedMotion])

  return <div ref={hostRef} className="portrait-stage" role="img" aria-label={`File plate for ${name}`} />
}
