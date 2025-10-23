// app/games/[id]/GameFile.jsx
"use client";

import { useState } from 'react';
import { CensoredBar, StackedImageGallery } from "@/components"; // Importamos la galería
import { varela } from "@/app/layout";

// --- Estilos Base ---
const filePaperClasses = "bg-stone-100/95 shadow-lg text-stone-800 p-8 min-h-[80vh] flex flex-col"; // Flex col para layout interno
const sectionTitleClasses = "font-bold text-sm uppercase text-stone-500 tracking-widest mb-2 mt-6 first:mt-0";
const paragraphClasses = "text-stone-700 leading-relaxed";
const listClasses = "list-disc list-inside space-y-1 mt-2 pl-2 text-sm text-stone-600";
const buttonNavClasses = "mt-8 text-center text-sm font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-800 transition-colors";

// --- Componente de Página Individual ---
// Recibe una porción de los detalles del juego y los renderiza
const GameFilePage = ({ game, pageDetails, pageNumber }) => {
    return (
        <div className='my-25'>
            <div className={`${filePaperClasses} page-${pageNumber}`}>
                {/* Contenido específico de cada página */}
                {pageDetails.map((detailKey, index) => (
                    <div key={index}>
                        {detailKey === 'header' && (
                            <>
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h1 className="text-3xl font-bold uppercase tracking-wider">{game.title}</h1>
                                        <p className="text-sm font-mono text-stone-600">ID: {game.details.caseId || <CensoredBar />}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-stone-500">STATUS</p>
                                        <p className="font-bold text-green-600">{game.details.status || "CONFIDENCIAL"}</p>
                                    </div>
                                </div>
                                <img src={game.cover} alt={`Cover de ${game.title}`} className="w-50 mb-8 shadow-md" loading="lazy" />
                            </>
                        )}
                        {detailKey === 'theme' && game.details.theme && (
                            <div><h2 className={sectionTitleClasses}>Temática</h2><p className={paragraphClasses}>{game.details.theme}</p></div>
                        )}
                        {detailKey === 'tagline' && game.tagline && (
                            <div><h2 className={sectionTitleClasses}>Lema</h2><p className={`${paragraphClasses} italic`}>{game.tagline}</p></div>
                        )}
                        {detailKey === 'story' && game.details.story && (
                            <div><h2 className={sectionTitleClasses}>Historia</h2><p className={paragraphClasses}>{game.details.story}</p><CensoredBar /></div>
                        )}
                        {detailKey === 'gallery' && game.gallery && game.gallery.length > 0 && (
                            <div><h2 className={sectionTitleClasses}>Galería de Campo</h2><StackedImageGallery images={game.gallery} /></div>
                        )}
                        {detailKey === 'gameplay' && game.details.gameplay && (
                            <div><h2 className={sectionTitleClasses}>Análisis de Jugabilidad</h2><p className={paragraphClasses}>{game.details.gameplay}</p></div>
                        )}
                        {detailKey === 'coreLoop' && game.details.coreLoop && game.details.coreLoop.length > 0 && (
                            <div><h2 className={sectionTitleClasses}>Ciclo de Juego Principal</h2><ul className={listClasses}>{game.details.coreLoop.map((item, i) => <li key={i}>{item}</li>)}</ul></div>
                        )}
                        {detailKey === 'character' && game.details.character && (
                            <div>
                                <h2 className={sectionTitleClasses}>Perfil del Sujeto: {game.details.character.name}</h2>
                                <p className={paragraphClasses}>{game.details.character.profile}</p>
                                <h3 className="font-semibold text-stone-600 mt-2">Habilidades:</h3>
                                <ul className={listClasses}>{game.details.character.abilities?.map((ability, i) => <li key={i}>{ability}</li>)}</ul>
                                <h3 className="font-semibold text-stone-600 mt-2">Progresión:</h3>
                                <p className="text-sm text-stone-600">{game.details.character.progression}</p>
                            </div>
                        )}
                        {detailKey === 'mapZones' && game.details.mapZones && game.details.mapZones.length > 0 && (
                            <div>
                                <h2 className={sectionTitleClasses}>Análisis de Zonas</h2>
                                <div className="space-y-4">
                                    {game.details.mapZones.map((zone, i) => (
                                        <div key={i}>
                                            <h3 className="font-bold text-stone-700">{zone.name}</h3>
                                            <p className="text-sm text-stone-600">{zone.description}</p>
                                            <ul className="text-xs text-stone-500 list-disc list-inside pl-2">
                                                {zone.landmarks && <li>Puntos Clave: {zone.landmarks.join(', ')}</li>}
                                                {zone.mechanics && <li>Mecánicas: {zone.mechanics.join(', ')}</li>}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {/* Añade más casos para renderizar otras claves de 'details' según necesites */}
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Componente Principal que Maneja la Paginación ---
export default function GameFile({ game }) {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    // --- Lógica de Paginación ---
    // Define qué secciones van en cada par de páginas (o en cada página en móvil)
    // Puedes ajustar esto según cuánto contenido quieras por página
    const pageContentStructure = [
        ['header', 'tagline', 'theme', 'story'],           // Página 1
        ['gallery', 'gameplay'],                            // Página 2
        ['coreLoop', 'character'],                          // Página 3
        ['mapZones'],                                      // Página 4
        // Añade más arrays para más páginas si es necesario
    ];

    const totalPages = pageContentStructure.length;

    // Calculamos el índice del par de páginas actual para escritorio
    const currentSpreadIndex = Math.floor(currentPageIndex / 2);

    const goToNextPage = () => {
        setCurrentPageIndex(prev => Math.min(prev + 1, totalPages - 1));
    };
    const goToPrevPage = () => {
        setCurrentPageIndex(prev => Math.max(prev - 1, 0));
    };
    const goToNextSpread = () => {
        setCurrentPageIndex(prev => Math.min(prev + 2, totalPages - 1));
    };
    const goToPrevSpread = () => {
        setCurrentPageIndex(prev => Math.max(prev - 2, 0));
    };


    return (
        <div className={`w-full max-w-6xl mx-auto ${varela.className}`}>
            {/* --- Vista Móvil (Scroll Vertical) --- */}
            <div className="lg:hidden flex flex-col gap-2">
                {pageContentStructure.map((pageDetails, index) => (
                    <GameFilePage key={index} game={game} pageDetails={pageDetails} pageNumber={index + 1} />
                ))}
            </div>

            {/* --- Vista Escritorio (Paginación Doble) --- */}
            <div className="hidden lg:grid grid-cols-2 gap-2 relative">
                {/* Página Izquierda */}
                {pageContentStructure[currentSpreadIndex * 2] && (
                    <GameFilePage game={game} pageDetails={pageContentStructure[currentSpreadIndex * 2]} pageNumber={currentSpreadIndex * 2 + 1} />
                )}
                {/* Página Derecha (o placeholder si no hay) */}
                {pageContentStructure[currentSpreadIndex * 2 + 1] ? (
                    <GameFilePage game={game} pageDetails={pageContentStructure[currentSpreadIndex * 2 + 1]} pageNumber={currentSpreadIndex * 2 + 2} />
                ) : (
                    <div className={`${filePaperClasses} bg-stone-200/50`}> {/* Página en blanco */} </div>
                )}

                {/* Botones de Navegación Escritorio */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-8 z-20">
                    {currentSpreadIndex > 0 && (
                        <button onClick={goToPrevSpread} className={buttonNavClasses}>&larr; Anterior</button>
                    )}
                    {currentSpreadIndex * 2 + 2 < totalPages && (
                        <button onClick={goToNextSpread} className={buttonNavClasses}>Siguiente &rarr;</button>
                    )}
                </div>
            </div>
        </div>
    );
}