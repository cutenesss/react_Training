// import Realm from 'realm';

// const Task = {
//     name: 'Task',
//     properties:{
//         title: 'string',
//         detail: 'string'
//     }
// }

// const getAllTask =()=>{
//     return Realm.open({schema: [Task]})
//         .then(realm =>{
//             return realm.objects('Task')
//         })
//         .catch(err =>{
//             console.log("err", err);
//             return;
//         })
// }

// const addTask=( task)=>{
//     return Realm.open({ schema: [Task]})
//         .then(realm =>{
//             realm.write(()=>{
//                 realm.create('Task',{
//                     title: task.title,
//                     detail: task.detail
//                 });
//             });
//             return true;
//         })
//         .catch(err=>{
//             console.log("err", err);
//             return;
//         })
// }

// const deleteTask = (task)=>{
//     return Realm.open({ schema: [Task] })
//         .then(realm =>{
//             realm.write(()=>{
//                 realm.create('Task',{
//                     title: task.title,
//                     detail: task.detail
//                 });
//             });
//             return true;
//         })
//         .catch(err=>{
//             console.log("err", err);
//             return;
//         })
// }

// export {
//     getAllTask,
//     addTask
// }