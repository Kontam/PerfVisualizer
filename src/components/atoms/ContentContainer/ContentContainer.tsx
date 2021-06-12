import React from 'react';

const ContentContainer: React.FC = (props) => {
  return (
    <div className="w-full min-h-screen flex justify-center">
      {props.children}
    </div>
  );
};

export default ContentContainer;
