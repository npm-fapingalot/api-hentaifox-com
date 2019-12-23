import { tags, groups, parodies, characters, artists } from './tag.url';

describe('#tags', () => {
  test('Usage', () => {
    expect(tags(2)).toBe('https://hentaifox.com/tags/pag/3/');
  });
});

describe('#artists', () => {
  test('Usage', () => {
    expect(artists(2)).toBe('https://hentaifox.com/artists/pag/3/');
  });
});

describe('#characters', () => {
  test('Usage', () => {
    expect(characters(2)).toBe('https://hentaifox.com/characters/pag/3/');
  });
});

describe('#parodies', () => {
  test('Usage', () => {
    expect(parodies(2)).toBe('https://hentaifox.com/parodies/pag/3/');
  });
});

describe('#groups', () => {
  test('Usage', () => {
    expect(groups(2)).toBe('https://hentaifox.com/groups/pag/3/');
  });
});

