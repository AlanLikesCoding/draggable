import React, { useState, useRef, MouseEvent, ReactNode, useEffect } from 'react';
import { v4 as idv4 } from 'uuid';

export const Draggable = ({ children }: { children: ReactNode }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [id] = useState(idv4());

  const ref = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLElement | null>(null);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);

    const element = ref.current;
    parentRef.current = element?.parentElement || null; // Store parent reference here

    if (!element || !parentRef.current) return;

    const dragItem = element.getBoundingClientRect();
    const parent = parentRef.current.getBoundingClientRect();

    setDragOffset({
      x: e.clientX - dragItem.left - parent.left || 0,
      y: e.clientY - dragItem.top - parent.top || 0,
    });
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const element = ref.current;

    if (!element || !parentRef.current) return;

    const dragItem = element.getBoundingClientRect();

    const newPosition = {
      x: e.clientX - dragOffset.x - dragItem.left,
      y: e.clientY - dragOffset.y - dragItem.top,
    };

    element.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const element = ref.current;
    if (element) {
      element.style.transition = 'transform 0.2s ease';

      element.addEventListener('transitionend', () => {
        element.style.transition = 'none';
      }, { once: true });

      element.style.transform = 'translate(0, 0)';
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      key={'draggable-' + id}
      id={'draggable-' + id}
      ref={ref}
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        backgroundColor: isDragging ? 'pink' : 'lightgreen',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {children}
    </div>
  );
};
