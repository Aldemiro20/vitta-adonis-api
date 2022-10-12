import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'contacts';
 

  public async up() {
   
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string("name");
      table.string("email").unique().notNullable();
      table.integer("telephone");
      table.tinyint("status");
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(this.now())
    })
  }
  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
