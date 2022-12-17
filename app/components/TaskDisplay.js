import React from "react"
import {Button,Text} from "react-native"
import RealmContext from "../models";
import { Task } from "../models/Task";
const { useRealm, useObject } = RealmContext

const TaskDisplay = ({_id})=>{

    const realm = useRealm()
    const task = useObject(Task, Realm.BSON.ObjectID(_id))

    const handleAddSubtask = (description) => {
        realm.write(() => {
          task.subtasks.push({description})
        })
    }

    console.log('RE-RENDER')

    return(
        <>
            <Button title={'Add Subtask'} onPress={()=>handleAddSubtask('This is just a subtask')}/>
            {task ? task.subtasks.map((subtask,i)=><Text key={i}>{subtask.description}</Text>) : null}
        </>
    )
}

//NOTE - Rendering the subtasks as a text element causes a different behavior
//{task ? task.subtasks.map((subtask,i)=><Text key={i}>{subtask.description}</Text>) : null}

export default TaskDisplay
