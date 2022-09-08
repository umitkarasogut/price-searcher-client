import React, { useState } from 'react';
import SearchIcon from './components/icons/SearchIcon';
import Input from './components/Input';
import Spinner from './components/Spinner';
import ProductList from './components/ProductList';
import { SearchResult } from './Types';

export default function App() {

    const API_URL = 'http://localhost:8080/';
    const [searchString, setSearchString] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [results, setResults] = useState<SearchResult[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    const search = async () => {
        setIsLoading(true);
        setResults(null);
        setError(null);

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                search: searchString
            })
        });

        if (response.ok) {
            const results = await response.json();
            setResults(results);
        } else {
            setError(await response.text());
        }

        setIsLoading(false);
    };

    return (
        <div className='w-full mt-24 flex flex-col justify-center gap-4'>
            <div className='w-full text-center'>
                <h4 className='text-4xl font-thin'>Price Searcher</h4>
            </div>
            <div className='w-full flex justify-center'>
                <Input handleChange={setSearchString} />
            </div>
            <div className='w-full flex justify-center'>
                <button disabled={isLoading} onClick={search} className='flex text-xl font-thin items-center gap-2 border focus:outline-none rounded-xl px-4 py-2 bg-blue-400 hover:bg-blue-500 duration-300 text-white'>
                    {isLoading ? <> <Spinner />Searching</> : <><SearchIcon />Search Product</>}
                </button>
            </div>
            {results && <ProductList results={results} />}
            {error && <p className='text-red-500 text-xl font-bold'>{error}</p>}
        </div>
    );
}
