import './index.scss';

const BasketballHoop = ({ height = 150 }) => {
    return (
        <div className="hoop-scene-wrap" style={{ height }}>
            <svg className="hoop-scene" viewBox="0 0 300 170" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <radialGradient id="ballGradient" cx="35%" cy="30%">
                        <stop offset="0%" stopColor="#ffb066" />
                        <stop offset="100%" stopColor="#ff7a1a" />
                    </radialGradient>
                </defs>

                <line x1="272" y1="8" x2="272" y2="155" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />
                <rect x="246" y="8" width="46" height="34" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
                <ellipse cx="250" cy="45" rx="21" ry="5" fill="none" stroke="#ff8a3d" strokeWidth="3" />

                <g className="hoop-net">
                    <path
                        d="M231 46 L235 73 M236.5 46 L239 76 M242.5 46 L244 78 M250 46 L250 79 M257.5 46 L256 78 M263.5 46 L261 76 M269 46 L265 73"
                        stroke="rgba(255,255,255,0.55)"
                        strokeWidth="1.2"
                        fill="none"
                    />
                </g>

                <g className="hoop-ball">
                    <circle r="11" fill="url(#ballGradient)" />
                    <path d="M-11 0 A11 11 0 0 0 11 0" stroke="#1a0a05" strokeWidth="1" fill="none" />
                    <path d="M0 -11 L0 11" stroke="#1a0a05" strokeWidth="1" />
                    <path d="M-7.5 -7.5 Q0 0 -7.5 7.5" stroke="#1a0a05" strokeWidth="1" fill="none" />
                    <path d="M7.5 -7.5 Q0 0 7.5 7.5" stroke="#1a0a05" strokeWidth="1" fill="none" />
                </g>
            </svg>
        </div>
    );
};

export default BasketballHoop;
