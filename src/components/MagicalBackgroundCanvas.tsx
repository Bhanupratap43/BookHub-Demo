import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
  pulseSpeed: number;
  rotation: number;
  rotationSpeed: number;
  shape: 'star' | 'circle' | 'sparkle';
}

export const MagicalBackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const colors = [
      'rgba(77, 168, 255, ',   // Sky Blue
      'rgba(139, 92, 246, ',   // Purple
      'rgba(255, 159, 67, ',   // Orange
      'rgba(255, 217, 61, ',   // Yellow
      'rgba(110, 231, 183, ',  // Mint Green
      'rgba(255, 111, 181, '   // Pink
    ];

    const particles: Particle[] = [];
    const particleCount = Math.min(45, Math.floor(width / 30));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -(Math.random() * 0.5 + 0.2), // gentle upward float
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        shape: Math.random() > 0.6 ? 'star' : Math.random() > 0.3 ? 'sparkle' : 'circle'
      });
    }

    // Mouse sparkle trail
    const mouseTrail: { x: number; y: number; alpha: number; size: number; color: string }[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.4) {
        mouseTrail.push({
          x: e.clientX,
          y: e.clientY,
          alpha: 0.8,
          size: Math.random() * 5 + 3,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const drawStar = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number) => {
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        ctx.lineTo(
          x + r * Math.cos((18 + i * 72) * (Math.PI / 180)),
          y - r * Math.sin((18 + i * 72) * (Math.PI / 180))
        );
        ctx.lineTo(
          x + (r / 2) * Math.cos((54 + i * 72) * (Math.PI / 180)),
          y - (r / 2) * Math.sin((54 + i * 72) * (Math.PI / 180))
        );
      }
      ctx.closePath();
    };

    const drawSparkle = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.beginPath();
      ctx.moveTo(x, y - size);
      ctx.quadraticCurveTo(x, y, x + size, y);
      ctx.quadraticCurveTo(x, y, x, y + size);
      ctx.quadraticCurveTo(x, y, x - size, y);
      ctx.quadraticCurveTo(x, y, x, y - size);
      ctx.closePath();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render floating background particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.01;

        // Wrap around boundaries
        if (p.y < -20) p.y = height + 20;
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = `${p.color}${Math.max(0.1, Math.min(0.9, p.alpha))})`;

        if (p.shape === 'star') {
          drawStar(ctx, 0, 0, p.size);
          ctx.fill();
        } else if (p.shape === 'sparkle') {
          drawSparkle(ctx, 0, 0, p.size * 1.5);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      // Render mouse magic trail
      for (let i = mouseTrail.length - 1; i >= 0; i--) {
        const trail = mouseTrail[i];
        trail.alpha -= 0.02;
        trail.size *= 0.96;

        if (trail.alpha <= 0 || trail.size <= 0.5) {
          mouseTrail.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.fillStyle = `${trail.color}${trail.alpha})`;
        drawSparkle(ctx, trail.x, trail.y, trail.size);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
};
