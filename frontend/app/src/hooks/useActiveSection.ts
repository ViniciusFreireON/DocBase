import { useEffect, useState, useRef } from 'react';

export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const visibleRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (ids.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visibleRef.current.add(id);
          } else {
            visibleRef.current.delete(id);
          }
        }
        const visible = Array.from(visibleRef.current);
        const topId = ids.find((id) => visible.includes(id)) ?? visible[0] ?? null;
        setActiveId(topId);
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      visibleRef.current.clear();
    };
  }, [ids.join(',')]);

  return activeId;
}
