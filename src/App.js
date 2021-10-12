import './App.css';
import Game from "./components/Game";
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "./reducers/reposReduser";

const App = ()=>{

    const dispatch = useDispatch()
    const count = useSelector(state => state.repos.count)

    function onCountClick() {
        dispatch(setCount(count+1))
    }

    return (
        <div className='app'>
            <button onClick={()=>onCountClick()}>Count</button>
            <div>
                {count}
            </div>
        </div>






        // <Game/>
    );
}

export default App;
