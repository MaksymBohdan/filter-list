import React from 'react';

const Header = () => console.log('header') || <div className="app">MAIN</div>;

export default React.memo(Header);
