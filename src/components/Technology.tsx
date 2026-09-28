import { useRef, useEffect } from 'react';
import type { FC } from 'react';
import { Network, Activity, Cpu, Database, Binary, Radio } from 'lucide-react';
import { COMPANY_INFO } from '../constants/company';

export const Technology: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const nodeCount = 38;
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulse: number;
    }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.5 + 1.5,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connecting lines between close nodes
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = 1 - dist / 110;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 102, 255, ${alpha * 0.35})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw and update nodes
      for (let i = 0; i < nodeCount; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.03;

        // Bounce from boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw node center
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#00d2ff';
        ctx.shadowColor = '#0066ff';
        ctx.shadowBlur = 8;
        ctx.fill();

        // Subtle pulsing halo
        if (i % 3 === 0) {
          const pulseRadius = node.radius + Math.sin(node.pulse) * 4 + 3;
          ctx.beginPath();
          ctx.arc(node.x, node.y, Math.max(1, pulseRadius), 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 210, 255, ${0.25 + Math.sin(node.pulse) * 0.15})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="tecnologia" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/20 text-cyan-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            Visión Digital
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Tecnología para avanzar
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            {COMPANY_INFO.techDescription}
          </p>
        </div>

        {/* Technological Abstract Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Abstract Canvas & Network Diagram */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="text-xs font-mono text-slate-400 ml-2">topologia-digital.svg</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/40">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                Interconexión Dinámica
              </div>
            </div>

            {/* Canvas Container */}
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden bg-slate-950/80 mt-4 border border-slate-800/60">
              <canvas ref={canvasRef} className="w-full h-full block" />

              {/* Data Overlays */}
              <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-700/60 text-xs space-y-1">
                <div className="text-slate-400 flex items-center gap-1.5 font-medium">
                  <Activity className="w-3 h-3 text-cyan-400" />
                  Malla de Nodos
                </div>
                <div className="text-white font-mono font-semibold">Flujo de Datos Activo</div>
              </div>

              <div className="absolute bottom-4 right-4 bg-slate-900/85 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-700/60 text-xs text-right space-y-1">
                <div className="text-slate-400 font-medium">Arquitectura</div>
                <div className="text-cyan-300 font-mono font-semibold">Escalable y Resiliente</div>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Interface Elements */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                  <Network className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Nodos y Redes de Información</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Estructuras integradas para articular procesos, facilitar la comunicación y optimizar flujos operativos.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-600/20 text-cyan-300 flex items-center justify-center shrink-0 border border-cyan-500/30">
                  <Binary className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Procesamiento y Continuidad</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Mecanismos orientados a respaldar la estabilidad y la disponibilidad continua en entornos de trabajo modernos.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-300 flex items-center justify-center shrink-0 border border-indigo-500/30">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Integración y Adaptabilidad</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Concepción modular que permite evolucionar y acoplar herramientas a medida que la organización crece.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400 italic">
              * Representación conceptual de infraestructura y modelos de conectividad digital corporativa.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
