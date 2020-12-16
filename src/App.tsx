import React, { Fragment, FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ShowContainer from './components/ShowContainer';

const store = configureStore();

const App: FunctionComponent = props => {

    return (
        <Provider store={store}>
            <Fragment>
                <div className="content">
                    <ShowContainer />
                </div>
            </Fragment>
        </Provider>
    );
}

export default App;
