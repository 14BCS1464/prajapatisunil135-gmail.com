import React from 'react';
import { Provider} from 'react-redux'

import configureStore from "./Src/Store/ConfigureStore";
import AppContainer from './Src/AppContainer'

const store = configureStore();
 export  default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        )
    }
}



