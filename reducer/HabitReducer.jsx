export function habitReducer(state,action){
    switch(action.type){
        case "ADD_HABIT":
            return[
                ...state,
                {
                id:Date.now(),
                name:action.payload,
                completed:false,
            }];
        case "DELETE_HABIT":
            return state.filter(
                (habit)=>habit.id!==action.payload
            );
        case "COMPLETE_HABIT":
            return state.map((habit)=>
                habit.id===action.payload?{
                    ...habit,
                    completed:!habit.completed,
                }:habit
            );
        default:
            return state;
    }
}