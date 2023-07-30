import { UserButton } from '@clerk/nextjs';
import React from 'react';

const page = () => {
    return (
        <div className='flex justify-end p-4'>
            <UserButton afterSignOutUrl="/" />
        </div>
    );
};

export default page;