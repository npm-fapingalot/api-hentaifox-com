export const home = (page = 0) => `https://hentaifox.com/pag/${page + 1}/`;
export const search = (query: string, page = 0) => `https://hentaifox.com/search/?q=${query}&page=${page + 1}`;
export const character = (character: string, page = 0) => `https://hentaifox.com/character/${character}/pag/${page + 1}/`;
export const tag = (tag: string, page = 0) => `https://hentaifox.com/tag/${tag}/pag/${page + 1}/`;
export const artist = (artist: string, page = 0) => `https://hentaifox.com/artist/${artist}/pag/${page + 1}/`;
export const parody = (parody: string, page = 0) => `https://hentaifox.com/parody/${parody}/pag/${page + 1}/`;
export const group = (group: string, page = 0) => `https://hentaifox.com/group/${group}/pag/${page + 1}/`;
