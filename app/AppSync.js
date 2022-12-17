import React, {useEffect, useState} from "react";
import {Button} from 'react-native'
import { Task } from "./models/Task";
import RealmContext from "./models";
import TaskDisplay from "./components/TaskDisplay";

const { useRealm} = RealmContext

export const AppSync = () => {
  
  const realm = useRealm()
  const [_id, setId] = useState(null)

  useEffect(() => {
    realm.subscriptions.update((mutableSubs) => {
      mutableSubs.add(realm.objects(Task));
    });
  }, [realm])

  const handleAddTask = (description) => {
      let task
      realm.write(() => {
        task = realm.create('Task', {description});
      })
      setId(task._id.toString())
  }

  return (
    <>
      <Button title={'Create Task'} onPress={()=>handleAddTask('This is an example of a task')}/>
      <TaskDisplay _id={_id}/>
    </>
  )
}
