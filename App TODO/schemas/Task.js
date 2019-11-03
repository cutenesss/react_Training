import Realm from 'realm';

const Task = {
    name: 'Task',
    primaryKey: 'id',
    properties: {
        id: 'int',
        title: 'string',
        detail: 'string'
    }
}

const getAllTask = () => {
    return Realm.open({ schema: [Task] })
        .then(realm => {
            return realm.objects('Task').sorted('id',false);
        })
        .catch(err => {
            console.log("err", err);
            return;
        })
}

const addTask = (task) => {
    return Realm.open({ schema: [Task] })
        .then(realm => {
            realm.write(() => {
                realm.create('Task', {
                    id: (realm.objects('Task').max("id")) ? realm.objects('Task').max("id") +1 :1,
                    title: task.title,
                    detail: task.detail
                });
            });
            return true;
        })
        .catch(err => {
            console.log("err", err);
            return;
        })
}

const changeTask = (task, newTask) => {
    return Realm.open({ schema: [Task] })
        .then(realm => {
            realm.write( ()=>{
                realm.create('Task', {
                    id: task.id,
                    title: newTask.title,
                    detail: newTask.detail
                }, true)
            });
            return true;
        })
        .catch(err => {
            console.log("err", err);
            return;
        })
}


const removeTask = (item) => {
    return Realm.open({ schema: [Task] })
        .then(realm=>{
            realm.write(() => {
                let task = realm.objectForPrimaryKey('Task', item.id);
                realm.delete(task)
            });            
        })
}

export {
    getAllTask,
    addTask,
    changeTask,
    removeTask
}