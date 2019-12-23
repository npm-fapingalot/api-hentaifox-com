import { manga } from './manga.url';

describe('#manga', () => {
  test('Usage', () => {
    expect(manga(1245)).toBe('https://hentaifox.com/gallery/1245/');
  });
});
