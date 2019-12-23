import cheerio from 'cheerio';
import fetch from 'node-fetch';

import * as SELECTOR from './manga.selectors';
import * as URL from './manga.url';
import { IManga, IPage, ITagged } from './manga.schema';
import { sanitizeText, regexExtract, toInt, getParentText } from '../utils.parse';
import { ITag } from '../tag';

// SELECTOR
export const getTitle = ($: CheerioStatic): string | null =>
    sanitizeText($(SELECTOR.TITLE).text());

export const getCover = ($: CheerioStatic): string | null =>
    $(SELECTOR.COVER_IMAGE).attr('src') || null;

export const PAGE_COUNT_REGEX = /Pages:\s+(\d+)/i;
export const getPageCount = ($: CheerioStatic): number | null =>
    toInt(regexExtract(sanitizeText($(SELECTOR.PAGE_COUNT).text()), PAGE_COUNT_REGEX));

export const FAVORITE_COUNT_REGEX = /\((\d+)\)/i;
export const getFavoriteCount = ($: CheerioStatic): number | null =>
    toInt(regexExtract(sanitizeText($(SELECTOR.FAVORITE_COUNT).text()), FAVORITE_COUNT_REGEX));

export const getPages = (baseURL: string, pageCount: number): IPage[] =>
    new Array(pageCount).fill(0).map((ignore, i) => ({
        thumbnailURL: `${baseURL}${i + 1}t.jpg`,
        imgURL: [`${baseURL}${i + 1}.jpg`, `${baseURL}${i + 1}.png`, `${baseURL}${i + 1}.gif`],
    } as IPage));

export const getTags = ($: CheerioStatic): ITagged => {
    const info: { [key: string]: ITag[] } = {};
    $(SELECTOR.TAGS_CONTAINER)
        .each((i, elRaw) => {
            const el = $(elRaw);

            const name = getParentText(el.find(SELECTOR.CONTAINER_NAME)).trim().toLocaleLowerCase();
            const values = el.find(SELECTOR.CONTAINER_TAG)
                .map((i2, tag) => ({
                    name: getParentText($(tag)).trim(),
                    href: $(tag).attr('href'),
                } as ITag)).get();

            info[name.substring(0, name.length - 1)] = values;
        });

    return {
        parodies: info.parodies || [],
        characters: info.characters || [],
        tags: info.tags || [],
        artists: info.artists || [],
        groups: info.groups || [],
        languages: info.languages || [],
        categories: info.category || [],
    };
};

// Main parser
export const getManga = async (id: number): Promise<IManga> =>
    getMangaFromHTML(await (await fetch(URL.manga(id))).text(), id);

export const getMangaFromHTML = (htmlSource: string, id: number): IManga =>
    getMangaFromCheerio(cheerio.load(htmlSource), id);

export const getMangaFromCheerio = ($: CheerioStatic, id: number): IManga => {
    const title = getTitle($);
    if (!title) { throw new Error('Title is empty'); }

    const pageCount = getPageCount($);
    if (!pageCount) { throw new Error('PageCount is empty'); }

    const favorite = getFavoriteCount($);
    if (!favorite) { throw new Error('Favorite is empty'); }

    const coverURL = getCover($);
    if (!coverURL) { throw new Error('Cover is null'); }

    const pages = getPages(coverURL.substring(0, coverURL.length - 'cover.jpg'.length), pageCount);
    if (pages.length !== pageCount) { throw new Error('Page count doesn\'t match pages'); }

    return {
        id,

        title,

        ...getTags($),

        coverURL,

        pageCount,
        pages,

        favorite,
    };
};
