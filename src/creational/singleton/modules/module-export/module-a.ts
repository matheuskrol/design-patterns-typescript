import { MyDatabaseModule } from '../../db/my-database-module'

const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.add({ name: 'Jurandir', age: 60 });
myDatabaseModule.add({ name: 'Afonso', age: 58 });
myDatabaseModule.add({ name: 'Raimunda', age: 73 });
myDatabaseModule.add({ name: 'Jacinto', age: 47 });
myDatabaseModule.show();