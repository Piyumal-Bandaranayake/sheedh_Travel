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
        
        // Multi-colored particles for richer visual depth
        const colorType = Math.floor((p.x + p.y) % 3)
        if (colorType === 0) ctx.fillStyle = `rgba(11, 27, 63, ${p.opacity})` // Primary
        else if (colorType === 1) ctx.fillStyle = `rgba(229, 57, 53, ${p.opacity * 0.8})` // Secondary
        else ctx.fillStyle = `rgba(0, 172, 193, ${p.opacity * 0.6})` // Cyan accent
        
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
        background: "linear-gradient(135deg, #FFFFFF 0%, #F5F7FA 50%, #E8EDF2 100%)",
      }}
    >
      {/* Brand-themed light layers - MULTI-COLOR ENHANCED */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Layer 1: Primary Blue & Indigo */}
        <div
          className="absolute -inset-[30%] opacity-40"
          style={{
            background: `
              radial-gradient(ellipse 50% 40% at 20% 20%, rgba(11, 27, 63, ${0.45 * intensity}), transparent 70%),
              radial-gradient(ellipse 60% 40% at 50% 70%, rgba(57, 73, 171, ${0.35 * intensity}), transparent 70%)
            `,
            animation: `caustic1 ${duration1}s ease-in-out infinite`,
            filter: "blur(80px)",
          }}
        />
        
        {/* Layer 2: Secondary Red & Amber/Gold */}
        <div
          className="absolute -inset-[30%] opacity-35"
          style={{
            background: `
              radial-gradient(ellipse 45% 55% at 85% 35%, rgba(229, 57, 53, ${0.4 * intensity}), transparent 70%),
              radial-gradient(ellipse 40% 40% at 15% 85%, rgba(255, 179, 0, ${0.25 * intensity}), transparent 70%)
            `,
            animation: `caustic2 ${duration2}s ease-in-out infinite`,
            filter: "blur(100px)",
          }}
        />

        {/* Layer 3: Cyan & Depth */}
        <div
          className="absolute -inset-[30%] opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 55% 45% at 75% 85%, rgba(0, 172, 193, ${0.3 * intensity}), transparent 70%),
              radial-gradient(ellipse 40% 40% at 45% 45%, rgba(11, 27, 63, ${0.25 * intensity}), transparent 70%)
            `,
            animation: `caustic3 ${duration3}s ease-in-out infinite`,
            filter: "blur(110px)",
          }}
        />

        {/* Extra Accent Layer: Dynamic Highlights */}
        <div
          className="absolute -inset-[30%] opacity-20"
          style={{
            background: `
              radial-gradient(circle at 30% 50%, rgba(255, 255, 255, ${0.4 * intensity}), transparent 40%),
              radial-gradient(circle at 70% 50%, rgba(229, 57, 53, ${0.15 * intensity}), transparent 40%)
            `,
            animation: `caustic1 ${duration2 * 1.5}s ease-in-out infinite reverse`,
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Light rays - Multi-tinted Dynamic Rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-70">
        {[0, 1, 2, 3, 4].map(i => (
          <div
            key={i}
            className="absolute top-0"
            style={{
              left: `${10 + i * 22}%`,
              width: "12%",
              height: "140%", // Taller rays for better coverage
              background: i % 3 === 0 
                ? `linear-gradient(180deg, rgba(11, 27, 63, ${0.15 * intensity}) 0%, transparent 80%)`
                : i % 3 === 1
                  ? `linear-gradient(180deg, rgba(229, 57, 53, ${0.1 * intensity}) 0%, transparent 80%)`
                  : `linear-gradient(180deg, rgba(0, 172, 193, ${0.08 * intensity}) 0%, transparent 80%)`,
              transform: "skewX(-20deg)",
              animation: `ray ${8 + i * 3}s ease-in-out infinite`,
              animationDelay: `${i * -2.2}s`,
              filter: "blur(30px)",
            }}
          />
        ))}
      </div>

      {/* Particles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none opacity-60" />

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      <style jsx>{`
        @keyframes caustic1 {
          0%, 100% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
          33% { transform: translate(4%, 3%) rotate(2deg) scale(1.08); }
          66% { transform: translate(-3%, -2%) rotate(-1deg) scale(0.96); }
        }
        @keyframes caustic2 {
          0%, 100% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
          50% { transform: translate(-6%, 4%) rotate(-3deg) scale(1.15); }
        }
        @keyframes caustic3 {
          0%, 100% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
          50% { transform: translate(5%, -5%) rotate(4deg) scale(1.12); }
        }
        @keyframes ray {
          0%, 100% { opacity: 0.4; transform: skewX(-20deg) translateX(0) scaleY(1); }
          50% { opacity: 0.9; transform: skewX(-25deg) translateX(40px) scaleY(1.1); }
        }
      `}</style>
    </div>

  )
}
