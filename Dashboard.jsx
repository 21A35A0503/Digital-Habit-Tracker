import React,{useState,useReducer,useRef,useEffect,useMemo,useCallback,useContext, use} from "react";
import {habitReducer} from "../reducer/HabitReducer";
import {UserContext} from "../context/UsersContext";
import HabitList from "./HabitList";
function Dashboard({setPage}){
    const{user,setUser}=useContext(UserContext);
    const[habits,dispatch]=useReducer(habitReducer,[],()=>
        JSON.parse(localStorage.getItem("habits"))||[]);
    const[habit,setHabit]=useState("");
    const inputRef=useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    },[]);
    useEffect(()=>{
        localStorage.setItem("habits",JSON.stringify(habits));
    },[habits]);
    const addHabit=useCallback(()=>{
        if(!habit.trim())
            return;
        dispatch({
            type:"ADD_HABIT",
            payload:habit,
        });
        setHabit("");
        inputRef.current.focus();
    },[habit]);
    const deleteHabit=useCallback((id)=>{
        dispatch({
            type:"DELETE_HABIT",
            payload:id,
        });
    },[]);
    const completeHabit=useCallback((id)=>{
        dispatch({
            type:"COMPLETE_HABIT",
            payload:id,
        });
    },[]);
    const stats=useMemo(()=>{
        const total=habits.length;
        const completed=habits.filter((habit)=>habit.completed).length;
        const pending=total-completed;
        return{
            total,
            completed,
            pending,
        }
    },[habits]);
    const logout=()=>{
        setUser(null);
        setPage("login");
    };
        return(
            <div>
                <h1>Habit Tracker Dashboard</h1>
                <h3>Welcome {user?.username}</h3>
                <button onClick={()=>setPage("profile")}>Profile</button>
                <button onClick={logout}>Logout</button>
                <br /><br />
                <input ref={inputRef} placeholder="Enter Habit" value={habit} onChange={(e)=>setHabit(e.target.value)}/>
                <button onClick={addHabit}>Add Habit</button>
                <h3>Completed: {stats.completed}</h3>
                <h3>Pending: {stats.pending}</h3>
                <HabitList 
                 habits={habits}
                 deleteHabit={deleteHabit}
                 completeHabit={completeHabit}
                />
            </div>
        );
}
 export default Dashboard;