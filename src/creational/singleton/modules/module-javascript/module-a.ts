import { MyDatabaseJavascript } from '../../db/my-database-javascript'

const myDatabaseJavascript: MyDatabaseJavascript = MyDatabaseJavascript.instance;
myDatabaseJavascript.add({ name: 'Jurandir', age: 60 });
myDatabaseJavascript.add({ name: 'Afonso', age: 58 });
myDatabaseJavascript.add({ name: 'Raimunda', age: 73 });
myDatabaseJavascript.add({ name: 'Jacinto', age: 47 });
myDatabaseJavascript.show();