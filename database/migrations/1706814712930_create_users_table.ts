import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id').primary()
      table.string('username', 254).notNullable().unique()
      table.string('first_name', 254).notNullable()
      table.string('last_name', 254).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.string('profile_picture').notNullable()

      table.timestamp('verified_at').nullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
