import React from 'react';
export const DndContext = ({ children }) => {
    return (React.createElement("div", { style: {
            backgroundColor: 'lightblue',
        } }, children));
};
