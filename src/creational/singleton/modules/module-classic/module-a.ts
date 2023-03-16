import { MyDatabaseClassic } from '../../db/my-database-classic'

const myDatabaseClassic: MyDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: 'Jurandir', age: 60 });
myDatabaseClassic.add({ name: 'Afonso', age: 58 });
myDatabaseClassic.add({ name: 'Raimunda', age: 73 });
myDatabaseClassic.add({ name: 'Jacinto', age: 47 });
myDatabaseClassic.show();