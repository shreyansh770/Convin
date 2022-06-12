export const userReducer = (state=null,action)=>{

    switch(action.type){
        case "SAVE_USER":
            return action.payload
        default :
            return state
    }
}