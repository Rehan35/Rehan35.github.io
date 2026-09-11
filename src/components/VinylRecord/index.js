import './index.scss';

const VinylRecord = ({ size = 120, spinning = true, label = 'RP', speed = 4 }) => {
    return (
        <div
            className={`vinyl ${spinning ? 'vinyl-spin' : ''}`}
            style={{ '--vinyl-size': `${size}px`, '--vinyl-speed': `${speed}s` }}
        >
            <svg viewBox="0 0 100 100" width="100%" height="100%">
                <defs>
                    <radialGradient id="vinylLabelGradient" cx="35%" cy="30%">
                        <stop offset="0%" stopColor="#7b61ff" />
                        <stop offset="100%" stopColor="#00d9ff" />
                    </radialGradient>
                </defs>
                <circle cx="50" cy="50" r="48" fill="#0c0c16" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
                <circle cx="50" cy="50" r="32" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
                <circle cx="50" cy="50" r="24" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
                <circle cx="50" cy="50" r="16" fill="url(#vinylLabelGradient)" />
                <text
                    x="50"
                    y="53"
                    textAnchor="middle"
                    fontSize="7"
                    fontFamily="monospace"
                    fill="#05050a"
                    fontWeight="700"
                >
                    {label}
                </text>
                <circle cx="50" cy="50" r="2.2" fill="#05050a" />
            </svg>
        </div>
    );
};

export default VinylRecord;
