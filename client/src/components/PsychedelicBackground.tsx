import { useEffect, useRef } from 'react';
import psychedelicBg from '@assets/generated_images/Psychedelic_neural_network_background_217553c2.png';

export default function PsychedelicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create flowing gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time) * 100,
        canvas.height / 2 + Math.cos(time * 0.7) * 50,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) * 0.8
      );
      
      // Psychedelic colors that shift over time
      const hue1 = (280 + Math.sin(time) * 30) % 360;
      const hue2 = (180 + Math.cos(time * 0.8) * 40) % 360;
      const hue3 = (240 + Math.sin(time * 1.2) * 20) % 360;
      
      gradient.addColorStop(0, `hsla(${hue1}, 85%, 65%, 0.8)`);
      gradient.addColorStop(0.4, `hsla(${hue2}, 70%, 55%, 0.6)`);
      gradient.addColorStop(0.7, `hsla(${hue3}, 80%, 50%, 0.4)`);
      gradient.addColorStop(1, 'hsla(220, 15%, 8%, 0.9)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add flowing shapes
      for (let i = 0; i < 8; i++) {
        const offset = (time + i * 0.5) * 0.5;
        const x = canvas.width / 2 + Math.sin(offset) * (canvas.width * 0.3);
        const y = canvas.height / 2 + Math.cos(offset * 0.7) * (canvas.height * 0.2);
        const radius = 50 + Math.sin(time + i) * 30;
        
        const circleGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        circleGradient.addColorStop(0, `hsla(${(hue1 + i * 30) % 360}, 85%, 70%, 0.3)`);
        circleGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = circleGradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Static background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${psychedelicBg})` }}
      />
      
      {/* Animated canvas overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-80"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40" />
    </div>
  );
}