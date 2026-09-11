import { useEffect, useState } from 'react';
import './index.scss';

const COLORS = [
    'radial-gradient(circle, rgba(0,217,255,0.25), rgba(0,217,255,0.02))',
    'radial-gradient(circle, rgba(123,97,255,0.25), rgba(123,97,255,0.02))',
    'radial-gradient(circle, rgba(255,61,113,0.2), rgba(255,61,113,0.02))',
];

const FloatingShapes = () => {
    const [shapes, setShapes] = useState([]);

    useEffect(() => {
        const newShapes = Array.from({ length: 8 }, (_, i) => ({
            id: i,
            round: Math.random() > 0.3,
            size: Math.random() * 100 + 60,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: Math.random() * 5,
            duration: Math.random() * 10 + 15,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
        }));

        setShapes(newShapes);
    }, []);

    return (
        <div className="floating-shapes">
            {shapes.map((shape) => (
                <div
                    key={shape.id}
                    className="floating-shape"
                    style={{
                        width: shape.size,
                        height: shape.size,
                        left: shape.left,
                        top: shape.top,
                        background: shape.color,
                        borderRadius: shape.round ? '50%' : '20%',
                        animationDelay: `${shape.delay}s`,
                        animationDuration: `${shape.duration}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingShapes;
