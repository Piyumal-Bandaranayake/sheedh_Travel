"use client"

import React, { useEffect, useRef } from "react"

export function AnimatedBackground({
  className = "",
  children,
  intensity = 1.5, // Defaulting to higher intensity for visibility
  speed = 1,
}) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = container.clientWidth
    let height = container.clientHeight
    canvas.width = width
    canvas.height = height

    let animationId
    let tick = 0

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 1.5 + Math.random() * 2,
      speed: 0.2 + Math.random() * 0.5,
      opacity: 0.3 + Math.random() * 0.4,
      wobbleOffset: Math.random() * Math.PI * 2,
    }))

    const handleResize = () => {
      width = container.clientWidth
      height = container.clientHeight
      canvas.width = width
      canvas.height = height
    }

    const ro = new ResizeObserver(handleResize)
    ro.observe(container)

    const animate = () => {
      tick += 0.012 * speed
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.y -= p.speed * speed
        p.x += Math.sin(tick * 1.5 + p.wobbleOffset) * 0.5

        if (p.y < -10) {
          p.y = height + 10
          p.x = Math.random() * width
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        // More visible particles using Primary Blue and a hint of Red
        ctx.fillStyle = `rgba(11, 27, 63, ${p.opacity})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      ro.disconnect()
    }
  }, [speed])

  const duration1 = 12 / speed
  const duration2 = 18 / speed
  const duration3 = 14 / speed

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F0F4F8 100%)",
      }}
    >
      {/* Brand-themed light layers - BOOSTED VISIBILITY */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -inset-[30%] opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 50% 40% at 20% 20%, rgba(11, 27, 63, ${0.4 * intensity}), transparent 70%),
              radial-gradient(ellipse 40% 50% at 80% 30%, rgba(229, 57, 53, ${0.3 * intensity}), transparent 70%),
              radial-gradient(ellipse 60% 40% at 50% 70%, rgba(11, 27, 63, ${0.35 * intensity}), transparent 70%)
            `,
            animation: `caustic1 ${duration1}s ease-in-out infinite`,
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute -inset-[30%] opacity-25"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 75% 75%, rgba(229, 57, 53, ${0.4 * intensity}), transparent 70%),
              radial-gradient(ellipse 50% 60% at 25% 80%, rgba(11, 27, 63, ${0.3 * intensity}), transparent 70%)
            `,
            animation: `caustic2 ${duration2}s ease-in-out infinite`,
            filter: "blur(90px)",
          }}
        />
        {/* Third layer for extra color depth */}
        <div
          className="absolute -inset-[30%] opacity-20"
          style={{
            background: `
              radial-gradient(ellipse 40% 40% at 50% 50%, rgba(229, 57, 53, ${0.2 * intensity}), transparent 70%),
              radial-gradient(ellipse 35% 35% at 10% 90%, rgba(11, 27, 63, ${0.3 * intensity}), transparent 70%)
            `,
            animation: `caustic3 ${duration3}s ease-in-out infinite`,
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Light rays - Custom Primary/Secondary tints - BOOSTED VISIBILITY */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
        {[0, 1, 2, 3].map(i => (
          <div
            key={i}
            className="absolute top-0"
            style={{
              left: `${15 + i * 28}%`,
              width: "15%",
              height: "100%",
              background: i % 2 === 0 
                ? `linear-gradient(180deg, rgba(11, 27, 63, ${0.12 * intensity}) 0%, transparent 90%)`
                : `linear-gradient(180deg, rgba(229, 57, 53, ${0.08 * intensity}) 0%, transparent 90%)`,
              transform: "skewX(-15deg)",
              animation: `ray ${7 + i * 2.5}s ease-in-out infinite`,
              animationDelay: `${i * -1.8}s`,
              filter: "blur(20px)",
            }}
          />
        ))}
      </div>

      {/* Particles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none opacity-50" />

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      <style jsx>{`
        @keyframes caustic1 {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          33% { transform: translate(5%, 4%) scale(1.05); }
          66% { transform: translate(-4%, -2%) scale(0.95); }
        }
        @keyframes caustic2 {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          50% { transform: translate(-7%, 5%) scale(1.1); }
        }
        @keyframes caustic3 {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          50% { transform: translate(6%, -4%) scale(1.08); }
        }
        @keyframes ray {
          0%, 100% { opacity: 0.5; transform: skewX(-15deg) translateX(0); }
          50% { opacity: 1; transform: skewX(-20deg) translateX(25px); }
        }
      `}</style>
    </div>
  )
}
