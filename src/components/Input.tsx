import React from 'react';

export default function Input({ handleChange }: { handleChange: (string: string) => void }) {
    return (
        <input
            onChange={e => handleChange(e.target.value)}
            type="text"
            className='border font-thin px-5 py-2 text-3xl focus:outline-none focus:shadow rounded-xl'
        />
    );
}
