import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'invitations'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign(['server_id'])
      table.foreign('server_id').references('id').inTable('servers').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign(['server_id'])
      table.foreign('server_id').references('id').inTable('servers')
    })
  }
}
