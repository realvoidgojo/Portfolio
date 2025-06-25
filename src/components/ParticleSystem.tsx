import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  shape: 'circle' | 'triangle' | 'square';
}

const ParticleSystem = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const isActiveRef = useRef(true);

  const createParticle = useCallback((id: number): Particle => {
    const colors = [
      'rgba(59, 130, 246, 0.3)',
      'rgba(147, 51, 234, 0.3)',
      'rgba(236, 72, 153, 0.3)',
      'rgba(16, 185, 129, 0.3)',
      'rgba(245, 158, 11, 0.3)',
    ];
    
    const shapes = ['circle', 'triangle', 'square'] as const;
    
    return {
      id,
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    };
  }, []);

  const renderParticles = useCallback(() => {
    if (!containerRef.current || !isActiveRef.current) return;

    try {
      containerRef.current.innerHTML = '';
      particlesRef.current.forEach(particle => {
        const element = document.createElement('div');
        element.style.position = 'absolute';
        element.style.left = `${particle.x}px`;
        element.style.top = `${particle.y}px`;
        element.style.width = `${particle.size}px`;
        element.style.height = `${particle.size}px`;
        element.style.backgroundColor = particle.color;
        element.style.opacity = particle.opacity.toString();
        element.style.pointerEvents = 'none';
        element.style.willChange = 'transform';

        switch (particle.shape) {
          case 'circle':
            element.style.borderRadius = '50%';
            break;
          case 'triangle':
            element.style.backgroundColor = 'transparent';
            element.style.width = '0';
            element.style.height = '0';
            element.style.borderLeft = `${particle.size / 2}px solid transparent`;
            element.style.borderRight = `${particle.size / 2}px solid transparent`;
            element.style.borderBottom = `${particle.size}px solid ${particle.color}`;
            break;
          case 'square':
            element.style.transform = 'rotate(45deg)';
            break;
        }

        containerRef.current?.appendChild(element);
      });
    } catch (error) {
      console.warn('ParticleSystem render error:', error);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize particles
    particlesRef.current = Array.from({ length: 30 }, (_, i) => createParticle(i));

    const animate = () => {
      if (!isActiveRef.current) return;

      particlesRef.current = particlesRef.current.map(particle => {
        let newX = particle.x + particle.vx;
        let newY = particle.y + particle.vy;
        let newVx = particle.vx;
        let newVy = particle.vy;

        // Bounce off edges with safe bounds checking
        const maxWidth = window.innerWidth || 1200;
        const maxHeight = window.innerHeight || 800;

        if (newX <= 0 || newX >= maxWidth) {
          newVx *= -1;
          newX = Math.max(0, Math.min(maxWidth, newX));
        }
        if (newY <= 0 || newY >= maxHeight) {
          newVy *= -1;
          newY = Math.max(0, Math.min(maxHeight, newY));
        }

        return {
          ...particle,
          x: newX,
          y: newY,
          vx: newVx,
          vy: newVy,
        };
      });

      renderParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!isActiveRef.current) return;
      
      const maxWidth = window.innerWidth || 1200;
      const maxHeight = window.innerHeight || 800;
      
      particlesRef.current = particlesRef.current.map(particle => ({
        ...particle,
        x: Math.min(particle.x, maxWidth),
        y: Math.min(particle.y, maxHeight),
      }));
    };

    const handleVisibilityChange = () => {
      isActiveRef.current = !document.hidden;
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      isActiveRef.current = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [createParticle, renderParticles]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ overflow: 'hidden' }}
    />
  );
};

export default ParticleSystem; 