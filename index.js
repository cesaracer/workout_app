import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux'
import reducer from './reducer/reducer'
import { createStore } from 'redux';

const store = createStore(reducer)

const storeProvider = () => {
    <Provider store={store}>
        <App/>
    </Provider>
}

AppRegistry.registerComponent(appName, () => storeProvider);