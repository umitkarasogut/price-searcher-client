import React from 'react';
import { SearchResult } from '../Types';

export default function ProductGrid({ results }: { results: SearchResult[] }) {
    return (
        <div className='w-full flex justify-center'>
            <div className="flex flex-col gap-12 mb-12">
                {results.map((result, resultIndex) =>
                    <div key={`result-${resultIndex}`}>
                        <h4 className='text-3xl font-thin mb-4'>
                            {result.provider}
                        </h4>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                            {result.products.map((product, productIndex) =>
                                <a target="_blank" rel="noopener noreferrer"
                                    href={product.url}
                                    key={`result-${resultIndex}-product-${productIndex}`}
                                    className='border w-64 rounded-xl shadow'>
                                    <img src={product.image} className='w-full h-64 object-cover border-b' alt={product.name} />
                                    <div className='px-2 mt-2 text-center text-sm'>
                                        {product.name}
                                    </div>
                                    <div className='px-2 mb-2 text-center'>
                                        {product.price}
                                    </div>
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
