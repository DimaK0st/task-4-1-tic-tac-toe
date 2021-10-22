import './App.css';
import Game from "./components/Game";
import {Provider} from "react-redux";
import store from "./reducers/store";
import React from "react";

const App = ()=>{

    return (
        <Provider store={store}>
         <Game/>
        </Provider>
    );
}

export default App;
