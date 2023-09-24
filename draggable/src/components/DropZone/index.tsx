import React, { ReactNode, useState } from 'react';

export const DropZone = ({ children, dnd_id }: { children: ReactNode, dnd_id: string | number }) => {
    const [dropPosition, setDropPosition] = useState({ x: 0, y: 0 });

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setDropPosition({ x: e.clientX, y: e.clientY });
    };
  
    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          backgroundColor: 'lightgray',
        }}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div style={{ position: 'absolute', top: dropPosition.y, left: dropPosition.x }}>
        </div>
      </div>
    );
}