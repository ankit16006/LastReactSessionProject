export const showList = (data) =>{
    return {
        type : "SHOWLIST",
        payload: {
            id: Math.floor(Math.random() * 10),
            data:data
        }
    }
}

export const deleteList = () =>{
    return {
        type : "DELETELIST"
    }
}

