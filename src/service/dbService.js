export default class DbService {

  constructor() {
    this._apiBase = 'http://localhost:3001';
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received: ${res.status}`)
    }
    return await res.json();
  }

  getData = async (path) => {
    const res = await this.getResource(`/${path}`);
    return res.map(item => ({ id: this._convertToSlug(item.name), ...item }));
  }

  getItem = async (path, id) => {
    const res = await this.getData(path);
    return res.filter(item => item.id === id)[0]
  }

  _convertToSlug(text) {
    return text
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-')
      ;
  }

}
