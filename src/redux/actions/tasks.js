 export const addTask = (id,title,description) => {


  return{
      type : "ADD_TASK",
      payload : {id,title,description}
  }
}

 
export const editTask = (id,title,description) => {


  return{
      type : "EDIT_TASK",
      payload : {id,title,description}
  }
}

export const delTask = (id) => {


  return{
      type : "DEL_TASK",
      payload : {id}
  }
}

export const searchTask = (search) => {

  return{
      type : "SEARCH_TASK",
      payload : {search}
  }
}
export const getTasks = () => {

  return{
      type : "GET_TASKS"
  }
}
