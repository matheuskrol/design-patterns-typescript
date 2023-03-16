import { MyDatabaseClassic } from '../../db/my-database-classic'

const db1: MyDatabaseClassic = MyDatabaseClassic.getInstance();
const db2: MyDatabaseClassic = MyDatabaseClassic.getInstance();

console.log(db1 === db2);