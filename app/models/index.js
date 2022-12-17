import React, {useEffect} from 'react'
import Realm from 'realm'
import { createRealmContext, AppProvider, UserProvider, useApp} from "@realm/react"
import { Task } from "./Task"
import { Subtask } from "./Subtask"

//https://www.mongodb.com/docs/realm/sdk/react-native/use-realm-react/
    
const RealmContext = createRealmContext({
    schema:[Task,Subtask],
    sync:{flexible:true}
})

const InitializationProvider = ({children})=>{

    const app = useApp()

    const signIn = async () => {
        const credentials = Realm.Credentials.anonymous()
        await app.logIn(credentials)
    }

    useEffect(()=>{signIn()},[])

    return(
        <UserProvider>
            <RealmContext.RealmProvider>
                {children}
            </RealmContext.RealmProvider>
        </UserProvider>
    )
}

export const RealmProvider = ({children})=>{
    return(
        <AppProvider id={'task-app-test-jsmej'}>
            <InitializationProvider>
                {children}
            </InitializationProvider>
        </AppProvider>
    )
}

export default RealmContext