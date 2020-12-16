import React from "react";
import './Loading.scss';

const Loading: React.FC = () => {
  return (
        <div className="loader-wrapper">
            <span className="loader"><span className="loader-inner"></span></span>
        </div>
        
  );
};

export default Loading;