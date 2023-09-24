import React, { useState } from 'react';
export const DropZone = ({ children, dnd_id }) => {
    const [dropPosition, setDropPosition] = useState({ x: 0, y: 0 });
    const handleDrop = (e) => {
        e.preventDefault();
        setDropPosition({ x: e.clientX, y: e.clientY });
    };
    return (React.createElement("div", { style: {
            position: 'relative',
            width: '100%',
            height: '100vh',
            backgroundColor: 'lightgray',
        }, onDrop: handleDrop, onDragOver: (e) => e.preventDefault() },
        React.createElement("div", { style: { position: 'absolute', top: dropPosition.y, left: dropPosition.x } })));
};
