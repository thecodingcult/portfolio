'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function NeuralFabric({ isHovered }: { isHovered: boolean }) {
  const ref = useRef<THREE.Points>(null)

  const { gridPositions, spherePositions } = useMemo(() => {
    const count = 500
    const grid = new Float32Array(count * 3)
    const points = new Float32Array(count * 3)
    const radius = 4
    let gridIndex = 0

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi
      points[i * 3] = radius * Math.cos(theta) * Math.sin(phi)
      points[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi)
      points[i * 3 + 2] = radius * Math.cos(phi)
    }

    const side = Math.ceil(Math.cbrt(count))
    for (let x = 0; x < side; x++) {
      for (let y = 0; y < side; y++) {
        for (let z = 0; z < side; z++) {
          if (gridIndex < count * 3) {
            grid[gridIndex] = (x - side / 2) * 0.8
            grid[gridIndex + 1] = (y - side / 2) * 0.8
            grid[gridIndex + 2] = (z - side / 2) * 0.8
            gridIndex += 3
          }
        }
      }
    }
    return { gridPositions: grid, spherePositions: points }
  }, [])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += 0.0005
      const positions = ref.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i++) {
        const target = isHovered ? spherePositions[i] : gridPositions[i]
        positions[i] = THREE.MathUtils.lerp(positions[i], target, delta * 2.0)
      }
      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={ref} positions={gridPositions.slice()} stride={3} frustumCulled>
      <PointMaterial transparent color="#fff" size={0.015} sizeAttenuation depthWrite={false} />
    </Points>
  )
}

export default function BrainToChipAnimation({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <NeuralFabric isHovered={isHovered} />
      </Canvas>
    </div>
  )
}
