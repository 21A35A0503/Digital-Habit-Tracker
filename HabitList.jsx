import React from "react";
function HabitList({
    habits,deleteHabit,completeHabit,
}){
    return(
        <div>
            {habits.map((habit)=>(
                <div key={habit.id}>
                    <h3>{habit.name}</h3>
                    <button onClick={()=>completeHabit(habit.id)}>
                        {habit.completed?"Completed":"Complete"}
                    </button>
                    <button onClick={()=>deleteHabit(habit.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
export default HabitList;