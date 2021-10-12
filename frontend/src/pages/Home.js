import React from 'react';

const Home = ({name}) => {
console.log(name)
    return (
        <div>
            {name ? `Hi ${name}` : 'You are not logged in'}
        </div>
    );
};

export default Home;