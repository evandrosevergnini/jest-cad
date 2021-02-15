/* O teste vazio passa, pois não é lançado nenhum erro */
test('Hello World', () => {
  
});

/** Quando um teste lança uma exceção, ele deve falhar */
test('Hello World deve falhar', () => {
  throw new Error('Hello World falhou');
})