import { MyDatabaseClassic } from '../../db/my-database-classic'
import './module-a'

console.log('');
const myDatabaseClassic: MyDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.remove(2);
myDatabaseClassic.show();