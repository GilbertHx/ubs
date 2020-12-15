import React, { Fragment, FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './App.scss';
import ShowContainer from './components/Show/ShowContainer';

const store = configureStore();

const App: FunctionComponent = props => {

    return (
        <Provider store={store}>
            <Fragment>
                <div className="bg-color">
                    <ShowContainer />
                </div>
            </Fragment>
        </Provider>
    );
}

export default App;
