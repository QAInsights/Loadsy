/* This is a typescript example for loadsy */
const result: ILoadsyResponse = loadsy.get('https://loadsy.io/test', { "accept":"*/*" }, 'T00_Loadsy');
console.log(result.status);

loadsy.sleep(1000);

const createUser: ILoadsyResponse = loadsy.post('https://reqres.in/api/users',{"Content-Type": "application/json" },{name:"morpheus",job:"leader"}, 'T10_CreateUser');
console.log(createUser.status);
console.log(createUser.body);

loadsy.sleep(1000);

export { };