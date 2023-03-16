import { MyDatabaseJavascript } from '../../db/my-database-javascript'
import './module-a'

console.log('');
const myDatabaseJavascript: MyDatabaseJavascript = MyDatabaseJavascript.instance;
myDatabaseJavascript.remove(2);
myDatabaseJavascript.show();