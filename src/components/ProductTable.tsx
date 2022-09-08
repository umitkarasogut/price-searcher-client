import React from 'react';
import { SearchResult } from '../Types';

export default function ProductTable({ results }: { results: SearchResult[] }) {
    return (
        <div className='flex items-center flex-col'>
            <div>
                {results.map((result, index) =>
                    <>
                        <div className='mb-6'><h3 className='text-4xl'>{result.provider}</h3></div>
                        <table key={`product-table-${index}`} className='w-full mb-12'>
                            <thead>
                                <th className='text-left'>Image</th>
                                <th className='text-left'>Name</th>
                                <th className='text-right'>Price</th>
                            </thead>
                            <tbody>
                                {result.products.map((product, index) =>
                                    <tr key={index} className='border-b'>
                                        <td className='w-1/6'>
                                            <img className='w-24 h-32 object-contain' src={product.image} alt={product.name} />
                                        </td>
                                        <td className='text-left w-4/6 hover:text-blue-400 duration-300 cursor-pointer'><a href={product.url} target='blank'>{product.name}</a></td>
                                        <td className='text-right w-1/6'>{product.price}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </div>
    );
}
