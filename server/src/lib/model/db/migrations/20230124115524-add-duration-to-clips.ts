export const up = async function (db: any): Promise<any> {
  /*
  return db.runSql(`
    
    IF NOT EXISTS(
      SELECT
        NULL
      FROM
        INFORMATION_SCHEMA.COLUMNS
      WHERE
        TABLE_NAME = 'clips'
        AND COLUMN_NAME = 'duration' 
      ) THEN
      ALTER TABLE clips ADD COLUMN duration INT NOT NULL DEFAULT 0,
      ALGORITHM = INPLACE,
      LOCK = NONE;
      END IF;
    `);
    
    return db.runSql(`
    ALTER TABLE clips
    ADD COLUMN IF NOT EXISTS duration INT NOT NULL DEFAULT 0,
    ALGORITHM = INPLACE,
    LOCK = NONE;
  `);
  
    
  return db.runSql(`
    ALTER TABLE clips
    ADD COLUMN duration INT NOT NULL DEFAULT 0,
    ALGORITHM = INPLACE,
    LOCK = NONE
    IF NOT EXISTS (
      SELECT *
      FROM INFORMATION_SCHEMA.COLUMNS
      WHERE table_name = 'clips'
      AND column_name = 'duration'
    );
  `); 
  */

  /*return db.runSql(`
  ALTER TABLE IF EXISTS clips ADD COLUMN duration INT NOT NULL DEFAULT 0;
  `)
  */
  return db.runSql(`
      CALL modificarTablaClips();
  `)

};

export const down = async function (db: any): Promise<any> {
  return db.runSql(`ALTER TABLE clips DROP COLUMN duration`);
};
