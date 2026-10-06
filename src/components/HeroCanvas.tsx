import React, { useEffect, useRef } from 'react';

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    // Respect user's motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 450;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Subtle nodes representing architectural coordinates
    const numPoints = 14;
    const points = Array.from({ length: numPoints }, (_, i) => ({
      baseX: (width / (numPoints + 1)) * (i + 1),
      baseY: height * 0.48 + Math.sin(i * 0.7) * 35,
      x: 0,
      y: 0,
      phase: i * 0.45,
      speed: 0.008 + (i % 3) * 0.004,
    }));

    let time = 0;

    const render = () => {
      // Smooth interpolation for mouse position
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;
      time += 0.015;

      ctx.clearRect(0, 0, width, height);

      // Update points with subtle wave + subtle cursor influence
      points.forEach((pt) => {
        const wave = prefersReducedMotion ? 0 : Math.sin(time + pt.phase) * 18;
        const dx = mouseX - pt.baseX;
        const dy = mouseY - (pt.baseY + wave);
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 220;
        let pullX = 0;
        let pullY = 0;

        if (dist < maxDist && !prefersReducedMotion) {
          const force = (1 - dist / maxDist) * 35;
          pullX = (dx / dist) * force;
          pullY = (dy / dist) * force;
        }

        pt.x = pt.baseX + pullX;
        pt.y = pt.baseY + wave + pullY;
      });

      // Draw subtle connecting geometric curves
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      ctx.strokeStyle = 'rgba(255, 77, 54, 0.28)';
      ctx.lineWidth = 1.25;
      ctx.stroke();

      // Draw second subtle echo line for depth
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y + 14);
      for (let i = 1; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2 + 14;
        ctx.quadraticCurveTo(points[i].x, points[i].y + 14, xc, yc);
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw quiet anchor coordinate points
      points.forEach((pt, idx) => {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, idx % 3 === 0 ? 2.5 : 1.5, 0, Math.PI * 2);
        ctx.fillStyle = idx % 3 === 0 ? 'rgba(255, 77, 54, 0.6)' : 'rgba(255, 255, 255, 0.25)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-60">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-transparent to-transparent pointer-events-none" />
    </div>
  );
};
