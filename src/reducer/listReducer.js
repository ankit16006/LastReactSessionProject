const initialData = {
    list: []
}

const listReducer = (state=initialData, action) => {

    switch(action.type){
        case "SHOWLIST" : 
         const { id, data } = action.payload;
         return {
            ...state,
            list: [
                ...state.list,
                {
                    id:id,
                    data:data
                }
            ]
         }
         default: return state
    }
}

export default listReducer