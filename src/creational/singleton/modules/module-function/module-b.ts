import { MyDatabaseFunction } from '../../db/my-database-function'
import './module-a'

console.log('');
const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.remove(2);
myDatabaseFunction.show();