
// Reducer Start
const blogState = [];
export const blogReducer = (state = blogState,action)=>{
  switch (action.type) {
    case "ADD_BLOG":
      return [...state,action.blog];

    case "REMOVE_BLOG":
      return state.filter(({id})=>{
        return id !=action.id;
      });

      case "EDIT_BLOG":
        return state.map((fd)=>{
            if (fd.id == action.id) {
                return{
                    ...fd,
                    ...action.update
                }
            }else{
              return fd;
            }
        })

    default:
      return state;
  }
}
// Reducer End