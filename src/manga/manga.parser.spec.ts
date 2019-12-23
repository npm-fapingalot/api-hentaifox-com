import { getTags, getTitle, getCover, getPageCount, getFavoriteCount, getPages } from './manga.parser';

describe('#getTitle', () => {
  test('Working', () => {
    const $ = ((selector: string) => ({ text: () => 'Title' })) as CheerioStatic;
    expect(getTitle($)).toBe('Title');
  });
});

describe('#getCover', () => {
  test('Working', () => {
    const $ = ((selector: string) => ({ attr: (attr: string) => 'Cover' })) as CheerioStatic;
    expect(getCover($)).toBe('Cover');
  });
});

describe('#getPageCount', () => {
  test('Working', () => {
    const $ = ((selector: string) => ({ text: () => 'Pages: 123' })) as CheerioStatic;
    expect(getPageCount($)).toBe(123);
  });
});

describe('#getFavoriteCount', () => {
  test('Working', () => {
    const $ = ((selector: string) => ({ text: () => 'Favorite (123)' })) as CheerioStatic;
    expect(getFavoriteCount($)).toBe(123);
  });
});

describe('#getPages', () => {
  test('Working', () => {
    const res = getPages('base/', 1);
    expect(res).toHaveLength(1);
    expect(res).toStrictEqual([{ thumbnailURL: 'base/1t.jpg', imgURL: ['base/1.jpg', 'base/1.png', 'base/1.gif'] }]);
  });
});

describe('#getTags', () => {
  test('Working', () => { });
});
