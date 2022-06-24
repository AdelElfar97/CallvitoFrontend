import { combineReducers } from "redux";

import {handleTasks} from "./handleTasks";



const r= combineReducers({

    handleTasks:handleTasks,
});

export default r