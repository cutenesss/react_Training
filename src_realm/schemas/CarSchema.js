// import Realm from 'realm';
// const CarSchema = {
//     name: 'Car',
//     properties: {
//         make: 'string',
//         model: 'string',
//         miles: { type: 'int', default: 0 },
//     }
// }
// const openCar = () => {
//     return Realm.open({
//         path: 'anotherRealm.realm',
//         schema: [CarSchema]
//     })
// }
// const writeCar = (realm, car) => {
//     const { make, model, miles } = car;
//     realm.write(() => {
//         realm.create('Car', {
//             make: make,
//             model: model,
//             miles: miles,
//         });
//     })
// }
// const getAllCar = (realm) => {
//     const data = realm.objects('Car');
//     return data;
// }

// const _getAllCar = async () => {
//     const _realm = await openCar();
//     if (_realm) {
//         return getAllCar(_realm);
//     }
//     return;
// }

// const _addCar = async (car) => {
//     const _realm = await openCar();
//     if (_realm) {
//         const { make, model, miles } = car;
//         writeCar(_realm, {
//             make: make,
//             model: model,
//             miles: miles,
//         })
//     }
// }

// export {
//     CarSchema,
//     openCar,
//     writeCar,
//     getAllCar,
//     _getAllCar,
//     _addCar
// };