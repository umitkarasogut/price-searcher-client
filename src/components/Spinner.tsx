import React from 'react';

export default function Spinner() {
    return (
        <div className="flex items-center justify-center ">
            <div className="w-4 h-4 border-b-2 border-white rounded-full animate-spin"></div>
        </div>
    );
}
