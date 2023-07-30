import React from 'react';

const layout = ({
    children
}: {
    children: React.ReactNode
}
) => {
    return (
        <div className='grid place-content-center h-screen'>
            {children}
        </div>
    );
};

export default layout;