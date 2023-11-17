import * as fs from 'fs';

interface Data {
  [key: string]: any;
}

type QueryFunction = (component: string, data: any) => boolean;

class MiniDB {
  private filename: string;
  private data: Data;

  constructor(filename: string) {
    this.filename = filename;
    this.data = this.loadData();
  }

  private loadData(): Data {
    try {
      const jsonData = fs.readFileSync(this.filename, 'utf8');
      return JSON.parse(jsonData);
    } catch (err) {
      fs.writeFileSync(this.filename, JSON.stringify({}, null, 2));
      return {};
    }
  }

  private saveData(): void {
    fs.writeFileSync(this.filename, JSON.stringify(this.data, null, 2));
  }

  public push(component: string, item: any): void {
    if (!this.data[component]) {
      this.data[component] = {};
    }
    Object.assign(this.data[component], item);
    this.saveData();
  }

  public delete(componentePadre: string, componenteHijo: string): void {
    if (this.data[componentePadre] && this.data[componentePadre][componenteHijo]) {
      delete this.data[componentePadre][componenteHijo];
      this.saveData();
    }
  }

  public getData(): Data {
    return this.data;
  }

  public getDataByQuery(query: QueryFunction): Data {
    const result: Data = {};

    for (const component in this.data) {
      if (this.data.hasOwnProperty(component)) {
        if (query(component, this.data[component])) {
          result[component] = this.data[component];
        }
      }
    }

    return result;
  }
}

export default MiniDB;
