import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import Layout from '../layouts/Layout';

export default function Resume() {
    return (
        <div className="flex justify-around items-center h-full w-full flex-col xl:flex-row">
            <div className='p-4 flex flex-col justify-center '>
             
            </div>

        </div>
    );
}

Resume.layout = page => <Layout children={page} />;