export const up = async function (db: any): Promise<any> {
  return db.runSql(`
  	ALTER TABLE taxonomy_terms
  		ADD COLUMN term_sentence_source VARCHAR(255);

  	UPDATE taxonomies SET tax_name = "Target Segments" WHERE tax_name = "Content";
	

  	UPDATE taxonomy_terms SET term_sentence_source = "singleword-benchmark" WHERE term_name = "Benchmark";

  	INSERT INTO taxonomy_terms (taxonomy_id, term_name, user_selectable, term_sentence_source)
      VALUES ((SELECT id FROM taxonomies WHERE tax_name = 'Target Segments'), 'Covid-19 Keyword Spotter', TRUE,'du-covid-keywords');
  `);
  /*VALUES (1, 'Covid-19 Keyword Spotter', TRUE,'du-covid-keywords');*/
};

export const down = function (): Promise<any> {
  return null;
};
