import { useEffect, useRef } from 'react';

export function DotRingCursor({ ease = 0.14, grow = 1.9 }) {
  const dot = useRef(null), ring = useRef(null);

  useEffect(() => {
    if (!matchMedia('(pointer: fine)').matches) return;
    let mx = innerWidth / 2, my = innerHeight / 2;
    let rx = mx, ry = my, scale = 1, want = 1, id = 0;

    const move = (e) => { mx = e.clientX; my = e.clientY; };
    const over = (e) => { want = e.target.closest?.('a, button, [data-cursor-hover]') ? grow : 1; };
    addEventListener('pointermove', move, { passive: true });
    addEventListener('pointerover', over);

    const loop = () => {
      rx += (mx - rx) * ease; ry += (my - ry) * ease;
      scale += (want - scale) * 0.12;
      if (dot.current)  dot.current.style.transform  = `translate3d(${mx}px,${my}px,0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px,${ry}px,0) scale(${scale})`;
      id = requestAnimationFrame(loop);
    };
    id = requestAnimationFrame(loop);
    return () => {
      removeEventListener('pointermove', move);
      removeEventListener('pointerover', over);
      cancelAnimationFrame(id);
    };
  }, [ease, grow]);

  return (<>
    <div ref={ring} className="cursor-ring" aria-hidden />
    <div ref={dot} className="cursor-dot" aria-hidden />
  </>);
}