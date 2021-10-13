import React, { useContext } from 'react';
import { UserContext } from '../App';

const Home = () => {

    const { manager, name } = useContext(UserContext)
    const isManager = Boolean(manager)

    return (
        <div>
            {isManager ? 'Soy administrador' : 'No soy administrador'}
            {name ? `Hi ${name}` : 'You are not logged in'}
            
        </div>
    );
};

export default Home;