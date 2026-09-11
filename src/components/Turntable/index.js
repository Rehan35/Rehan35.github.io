import './index.scss';

const Turntable = ({ image, alt, spinning = true, progress = 0 }) => {
    const armAngle = -8 - progress * 22;

    return (
        <div className="turntable">
            <div className="turntable-body glass-card">
                <div className={`turntable-platter ${spinning ? 'spin' : 'paused'}`}>
                    <div className="platter-grooves" />
                    <div className="platter-label" key={image}>
                        <img src={image} alt={alt} />
                    </div>
                    <div className="platter-spindle" />
                </div>

                <div className="turntable-arm" style={{ '--arm-angle': `${armAngle}deg` }}>
                    <div className="arm-base" />
                    <div className="arm-rod">
                        <span className="arm-head" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Turntable;
