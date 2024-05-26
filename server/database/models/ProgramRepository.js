const AbstractRepository = require("./AbstractRepository");

class ProgramRepository extends AbstractRepository {
  constructor() {
    super({ table: "program" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * from ${this.table}`);

    return rows;
  }
}

module.exports = ProgramRepository;
