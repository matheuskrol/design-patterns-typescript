import { MyDatabaseJavascript } from '../../db/my-database-javascript'

const db1: MyDatabaseJavascript = MyDatabaseJavascript.instance;
const db2: MyDatabaseJavascript = MyDatabaseJavascript.instance;

console.log(db1 === db2);