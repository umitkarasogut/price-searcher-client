import React, { useState } from 'react';
import { SearchResult } from '../Types';
import ProductGrid from './ProductGrid';
import ProductTable from './ProductTable';
import GridIcon from './icons/GridIcon';
import TableIcon from './icons/TableIcon';

export default function ProductList({ results }: { results: SearchResult[] }) {
    const [listingType, setListingType] = useState<'grid' | 'table'>('grid');

    return (
        <>
            <div className='py-12 w-full flex justify-center gap-4'>
                <button onClick={() => setListingType('table')}
                    className={`px-6 py-2 flex items-center gap-2 text-2xl border rounded-xl hover:bg-gray-100 duration-300 ${listingType === 'table' && 'bg-gray-100'}`}>
                    <TableIcon />Table View
                </button>
                <button onClick={() => setListingType('grid')}
                    className={`px-6 py-2 flex items-center gap-2 text-2xl border rounded-xl hover:bg-gray-100 duration-300 ${listingType === 'grid' && 'bg-gray-100'}`}>
                    <GridIcon />Grid View
                </button>
            </div>
            {listingType === 'grid' ? <ProductGrid results={results} /> : <ProductTable results={results} />}
        </>
    );
}
