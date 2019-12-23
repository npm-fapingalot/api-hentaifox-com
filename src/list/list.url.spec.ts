import { home, search, character, tag, artist, group, parody } from './list.url';

describe('#home', () => {
  test('Usage', () => {
    expect(home(2)).toBe('https://hentaifox.com/pag/3/');
  });
});


describe('#search', () => {
  test('Usage', () => {
    expect(search('lolicon', 2)).toBe('https://hentaifox.com/search/?q=lolicon&page=3');
  });
});

describe('#character', () => {
  test('Usage', () => {
    expect(character('neko-musume', 2)).toBe('https://hentaifox.com/character/neko-musume/pag/3/');
  });
});
describe('#tag', () => {
  test('Usage', () => {
    expect(tag('lolicon', 2)).toBe('https://hentaifox.com/tag/lolicon/pag/3/');
  });
});
describe('#artist', () => {
  test('Usage', () => {
    expect(artist('izumi-yuujiro', 2)).toBe('https://hentaifox.com/artist/izumi-yuujiro/pag/3/');
  });
});
describe('#parody', () => {
  test('Usage', () => {
    expect(parody('gegege-no-kitarou', 2)).toBe('https://hentaifox.com/parody/gegege-no-kitarou/pag/3/');
  });
});

describe('#group', () => {
  test('Usage', () => {
    expect(group('laomeng', 2)).toBe('https://hentaifox.com/group/laomeng/pag/3/');
  });
});
