import { Hello } from './Hello';
import * as React from 'react';

const App = () => {
    return (
        <div>
            <Hello compiler="TypeScript" framework="React" />
        </div>
    )
};

export default App;