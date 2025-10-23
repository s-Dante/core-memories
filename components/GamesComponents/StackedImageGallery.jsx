// components/GamesComponents/StackedImageGallery.jsx
"use client";
import { useState } from 'react';

const galleryContainer = "relative w-full aspect-video max-w-xl mx-auto h-64 select-none"; // Altura fija para consistencia
const imageBaseClasses = "absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg border-2 border-stone-300 transition-transform duration-500 ease-out";
const buttonBaseClasses = "absolute top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white rounded-full p-2 hover:bg-black/60 transition-colors";

export default function StackedImageGallery({ images = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) {
        return <div className={galleryContainer}>No hay imágenes disponibles.</div>;
    }

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={galleryContainer}>
            {images.map((src, index) => {
                const isActive = index === currentIndex;
                const isPrevious = index === (currentIndex - 1 + images.length) % images.length;
                const isNext = index === (currentIndex + 1) % images.length;

                let transform = 'scale(0.8) translate-x(0) rotate(0deg)'; // Posición base (detrás)
                let zIndex = 0;
                let opacity = 'opacity-0'; // Ocultas por defecto

                if (isActive) {
                    transform = 'scale(1) translate-x(0) rotate(0deg)';
                    zIndex = 10;
                    opacity = 'opacity-100';
                } else if (isPrevious) {
                    transform = 'scale(0.9) translate-x(-30%) rotate(-5deg)';
                    zIndex = 5;
                    opacity = 'opacity-70';
                } else if (isNext) {
                    transform = 'scale(0.9) translate-x(30%) rotate(5deg)';
                    zIndex = 5;
                    opacity = 'opacity-70';
                }

                return (
                    <img
                        key={index}
                        src={src}
                        alt={`Galería de imagen ${index + 1}`}
                        className={`${imageBaseClasses} ${opacity}`}
                        style={{ transform, zIndex, transition: 'transform 0.5s ease-out, opacity 0.5s ease-out' }}
                        loading="lazy"
                    />
                );
            })}

            {/* Botones de Navegación */}
            {images.length > 1 && (
                <>
                    <button onClick={goToPrevious} className={`${buttonBaseClasses} left-2 sm:left-4`}>
                        {/* Ícono de flecha izquierda */}
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={goToNext} className={`${buttonBaseClasses} right-2 sm:right-4`}>
                        {/* Ícono de flecha derecha */}
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </>
            )}
        </div>
    );
}