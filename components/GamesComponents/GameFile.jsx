"use client";

import { CensoredBar } from "@/components";
import { varela } from "@/app/layout";

// Estilos para los elementos del expediente
const filePaperClasses = "bg-stone-100/95 shadow-2xl text-stone-800 p-8";
const sectionTitleClasses = "font-bold text-sm uppercase text-stone-500 tracking-widest mb-2";
const paragraphClasses = "text-stone-700 leading-relaxed";
const censoredBlock = "mt-2 h-4 w-3/4 bg-black";

export default function GameFile({ game }) {
    const details = game.details || {};

    return (
        // Contenedor principal del expediente
        <div className="w-full max-w-6xl mx-auto">
            {/* Grid responsivo: 1 columna en móvil, 2 en pantallas grandes (lg) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
                
                {/* --- PÁGINA IZQUIERDA --- */}
                <div className={filePaperClasses}>
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h1 className="text-3xl font-bold uppercase tracking-wider">{game.title}</h1>
                            <p className="text-sm font-mono text-stone-600">ID: {details.caseId || <CensoredBar />}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-stone-500">STATUS</p>
                            <p className="font-bold text-green-600">{details.status || "CONFIDENCIAL"}</p>
                        </div>
                    </div>
                    
                    <img src={game.cover} alt={`Cover de ${game.title}`} className="w-full mb-8 shadow-md" />

                    <div className="mb-6">
                        <h2 className={sectionTitleClasses}>Temática</h2>
                        <p className={paragraphClasses}>{details.theme || "No especificada"}</p>
                    </div>

                    <div>
                        <h2 className={sectionTitleClasses}>Historia</h2>
                        <p className={paragraphClasses}>{details.story || "Información clasificada."}</p>
                        <div className={censoredBlock}></div>
                        <div className={`${censoredBlock} w-1/2`}></div>
                    </div>
                </div>

                {/* --- PÁGINA DERECHA --- */}
                <div className={`${filePaperClasses} border-t-2 border-dashed border-stone-300 lg:border-t-0`}>
                    <div className="mb-6">
                        <h2 className={sectionTitleClasses}>Análisis de Jugabilidad</h2>
                        <p className={paragraphClasses}>{details.gameplay || "Datos no disponibles."}</p>
                    </div>

                    {details.character && (
                        <div className="mb-6">
                            <h2 className={sectionTitleClasses}>Perfil del Sujeto: {details.character.name}</h2>
                            <p className={paragraphClasses}>{details.character.profile}</p>
                            <ul className="list-disc list-inside mt-2 pl-2 text-sm text-stone-600">
                                {details.character.abilities?.map((ability, i) => <li key={i}>{ability}</li>)}
                            </ul>
                        </div>
                    )}
                    
                    {details.mapZones && (
                         <div>
                            <h2 className={sectionTitleClasses}>Análisis de Zonas</h2>
                            <div className="space-y-4">
                                {details.mapZones.map((zone, i) => (
                                    <div key={i}>
                                        <h3 className="font-bold text-stone-700">{zone.name}</h3>
                                        <p className="text-sm text-stone-600">{zone.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}