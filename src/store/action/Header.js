export const UpdatePos=(value)=>{
    return {
        type:"HeaderUpdate",
        AboutObj:value.about,
        ExperienceObj:value.exprience
    }
}