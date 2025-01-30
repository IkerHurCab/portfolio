import React from 'react';
import { Link } from '@inertiajs/react';
import Layout from '../layouts/Layout';

export default function About() {
    return (
        <div className="flex justify-around items-center h-full w-full flex-col xl:flex-row">
            <div className='p-4 flex flex-col justify-center '>
                <h1 className="text-6xl font-bold">Sobre Mí</h1>
                <h2 className='font-bold text-2xl'>IKER HURTADO</h2>
                <p className="mt-6 text-justify max-w-96 text-xl">Soy un desarrollador web apasionado por la tecnología y la programación. Tengo experiencia en diversos lenguajes y frameworks, y siempre estoy buscando aprender más y mejorar mis habilidades.</p>
                <p className="text-justify max-w-96 text-xl">Mi objetivo es crecer profesionalmente y contribuir a proyectos innovadores que tengan un impacto positivo en el mundo.</p>
                <p>
                    <Link href="/projects">
                        <button className="mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
                            ¡Mira mis proyectos!
                        </button>
                    </Link>
                </p>
            </div>
            <div className="p-4 flex justify-center items-center">
                <img src={`${import.meta.env.VITE_BASE_URL}/storage/profile.png`} alt="Iker Hurtado" className="h-auto w-100 xl:w-240 sm:max-w-240 rounded-full shadow-lg" />
            </div>
        </div>
    );
}

About.layout = page => <Layout children={page} />;
