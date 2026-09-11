import './index.scss';

const Avatar = ({ src, alt = 'Rehan Parwani', size = 160, badge }) => {
    return (
        <div className="avatar" style={{ '--avatar-size': `${size}px` }}>
            <div className="avatar-ring">
                <div className="avatar-inner">
                    {src ? (
                        <img src={src} alt={alt} />
                    ) : (
                        <svg className="avatar-placeholder-icon" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="8.5" r="4" stroke="currentColor" strokeWidth="1.4" />
                            <path
                                d="M4.5 20c1.2-3.6 4.2-5.6 7.5-5.6s6.3 2 7.5 5.6"
                                stroke="currentColor"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                            />
                        </svg>
                    )}
                </div>
            </div>
            {badge && <span className="avatar-badge">{badge}</span>}
        </div>
    );
};

export default Avatar;
