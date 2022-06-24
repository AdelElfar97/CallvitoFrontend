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
    /*
      case "GET_PRODUCTS_LIST":
        return {
          ...state,
          list: action.payload,
          vlist: action.payload,
        };
      case "GET_PRODUCT":
        return {
          ...state,
          product: action.payload,
        };
      case "GET_CATEGORIES_LIST":
        return {
          ...state,
          categories: action.payload,
        };
      case "SEARCH_PRODUCT":
        return {
          ...state,
          vlist: action.payload,
        };
      case "SELECT_CATEGORY":
        return {
          ...state,
          category: action.payload,
        };
      case "SORT_ASCEND":
        return {
          ...state,
          vlist: action.payload.sort((a, b) => a.price > b.price ? 1 : -1),
        };
      case "SORT_DESCEND":
        return {
          ...state,
          vlist: action.payload.sort((a, b) => a.price > b.price ? -1 : 1),
        };
      case "SORT_RATING":
        return {
          ...state,
          vlist: action.payload.sort((a, b) => a.rating > b.rating ? -1 : 1),
        };
        */
    default:
      return state;
  }
}
