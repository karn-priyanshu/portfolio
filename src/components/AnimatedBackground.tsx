import React, { useRef, useEffect } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createGridLines = () => {
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineWidth = 1;

      const gridSize = 50;
      
      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const createDataStreams = (time: number) => {
      const streamCount = 5;
      
      for (let i = 0; i < streamCount; i++) {
        const x = (i * canvas.width / streamCount) + (Math.sin(time * 0.001 + i) * 100);
        const gradient = ctx.createLinearGradient(x, 0, x, canvas.height);
        
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0)');
        gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.3)');
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + Math.sin(time * 0.002) * 50, canvas.height);
        ctx.stroke();
      }
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      createGridLines();
      createDataStreams(time);
      
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate(0);

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
    />
  );
};

export default AnimatedBackground;