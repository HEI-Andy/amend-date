'use client'

import React, { useEffect, useState } from 'react'
import { Data } from '../utils/types/pokemonTypes';
import HomePage from './home';
import request  from '../utils/api/pokemonApi';

function List() {
    const [pokemons, setPokemons] = useState<Data[]>([]);

    useEffect(() => {
        request.getAllPokemons(50).then((res: React.SetStateAction<Data[]>) => {
            if (Array.isArray(res)) {
                setPokemons(res);
            } else {
                console.error('Expected an array of Pokemon data, but received:', res);
            }
        }).catch(() => {
            console.error('Failed to fetch Pokemon data:');
        });
    }, []);

    return (
        <>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-white-900">Pokemons list</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {pokemons.map((pokemon) => (
                        <div key={pokemon.url} className="group relative">
                            <HomePage pokemon={pokemon} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default List;
