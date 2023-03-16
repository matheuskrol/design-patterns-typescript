import { MyDatabaseFunction } from '../../db/my-database-function'

const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.add({ name: 'Jurandir', age: 60 });
myDatabaseFunction.add({ name: 'Afonso', age: 58 });
myDatabaseFunction.add({ name: 'Raimunda', age: 73 });
myDatabaseFunction.add({ name: 'Jacinto', age: 47 });
myDatabaseFunction.show();