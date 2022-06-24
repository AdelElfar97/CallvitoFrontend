import axios from "axios";
const INITIAL_STATE = {
  data: [],
};

export async function handleTasks(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TASK": {
      const task = action.payload;
      let response = await axios({
        method: "post",
        url: "http://localhost:8080/api/tasks",
        data: task,
      });
      return {
        ...state,
        data: response.data,
      };

      break;
    }

    case "EDIT_TASK": {
      let task = action.payload;
      let response = await axios({
        method: "put",
        url: "http://localhost:8080/api/tasks",
        data: task,
      });
      return {
        ...state,
        data: response.data,
      };

      break;
    }

    case "DEL_TASK": {
      let task = action.payload;
      let response = await axios({
        method: "delete",
        url: "http://localhost:8080/api/tasks",
        data: task,
      });
      return {
        ...state,
        data: response.data,
      };

      break;
    }

    case "SEARCH_TASK": {
      let task = action.payload;
      let response = await axios({
        method: "get",
        url: `http://localhost:8080/api/tasks/${task.search.searchMethod}/${task.search.searchValue}`,
      });
      console.log("RES", response);
      return {
        ...state,
        data: response.data,
      };

      break;
    }

    case "GET_TASKS": {
      let response = await axios({
        method: "get",
        url: `http://localhost:8080/api/tasks`,
      });
      console.log("RES", response);
      return {
        ...state,
        data: response.data,
      };

      break;
    }
  
    default:
      return state;
  }
}
