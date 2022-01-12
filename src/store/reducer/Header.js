const initial={
    About:0,
    Experience:0
}

const Updateheader=(state,action)=>{
        return{
                ...state,
                About:action.AboutObj,
                Experience:action.ExperienceObj
        }
}

const reducer=(state=initial,action)=>{

    switch (action.type) {
        case "HeaderUpdate":
            return Updateheader(state,action)
        default:
            return state
    }
}

export default reducer