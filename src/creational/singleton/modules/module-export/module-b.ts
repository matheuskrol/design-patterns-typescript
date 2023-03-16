import { MyDatabaseModule } from '../../db/my-database-module'
import './module-a'

console.log('');
const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.remove(2);
myDatabaseModule.show();