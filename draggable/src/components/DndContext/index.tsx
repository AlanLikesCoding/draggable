import React, { ReactNode } from 'react';

export const DndContext = ({ children }: { children: ReactNode }) => {
    return (
        <div
            style={{
                backgroundColor: 'lightblue',
            }}>
            { children }
        </div>
    )
}
