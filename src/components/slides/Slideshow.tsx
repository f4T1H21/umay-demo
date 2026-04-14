import { useState, useEffect, useCallback, ReactNode } from 'react';

interface Props {
  children: ReactNode[];
  onExitPresentation?: () => void;
}

export default function Slideshow({ children, onExitPresentation }: Props) {
  const [current, setCurrent] = useState(0);
  const total = children.length;

  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, total - 1)), [total]);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), [total]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        next();
      }
      if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault();
        prev();
      }
      if (e.key === 'F5') {
        e.preventDefault();
        toggleFullscreen();
      }
      if (e.key === 'Escape' && onExitPresentation) {
        if (!document.fullscreenElement) {
          onExitPresentation();
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev, onExitPresentation, toggleFullscreen]);

  return (
    <div className="w-full h-screen bg-[hsl(30,20%,4%)] relative overflow-hidden select-none">
      {/* Slide content */}
      <div key={current} className="w-full h-full">
        {children[current]}
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-3 bg-gradient-to-t from-black/60 to-transparent">
        {/* Progress dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-[hsl(var(--slide-sage))] w-6'
                  : i < current
                  ? 'bg-[hsl(var(--slide-sage)/0.4)]'
                  : 'bg-[hsl(var(--muted-foreground)/0.3)]'
              }`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <p className="font-mono text-[10px] text-[hsl(var(--muted-foreground))]">
          {current + 1} / {total}
        </p>

        {/* Nav arrows & fullscreen */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={current === 0}
            className="px-3 py-1 rounded text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--slide-cream))] disabled:opacity-20 transition-colors"
          >
            ←
          </button>
          <button
            onClick={next}
            disabled={current === total - 1}
            className="px-3 py-1 rounded text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--slide-cream))] disabled:opacity-20 transition-colors"
          >
            →
          </button>
          <button
            onClick={toggleFullscreen}
            className="px-3 py-1 rounded text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--slide-cream))] transition-colors ml-2"
            title="Fullscreen (F5)"
          >
            ⛶
          </button>
        </div>
      </div>
    </div>
  );
}
