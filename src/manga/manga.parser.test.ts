import { getManga } from './manga.parser';

describe('#getManga', () => {
  test('Compatibility', async () => {
    const manga = await getManga(64418);

    expect(manga).toBeDefined();
    expect(manga).toHaveProperty('id', 64418);
    expect(manga).toHaveProperty('title', 'Counterattack of Orcs 2');
    expect(manga).toHaveProperty('pageCount', 12);
  }, 20000000);
});
