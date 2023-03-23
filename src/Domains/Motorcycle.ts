import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle {
  protected id?: string;;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    this.id = motorcycle.id;
    this.model = motorcycle.model;
    this.year = motorcycle.year;
    this.color = motorcycle.color;
    this.buyValue = motorcycle.buyValue;
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
    // segundo o readme, o status deve ser Booleano contendo status 
    // que define se um veículo pode ou não ser comprado 
    // (este atributo deve ser opcional e se não passado, deve ser false.
    if (motorcycle.status && typeof motorcycle.status === 'boolean') {
      this.status = motorcycle.status;
    } else {
      this.status = false;
    }
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public getModel() {
    return this.model;
  }

  public setModel(model: string) {
    this.model = model;
  }

  public getYear() {
    return this.year;
  }

  public setYear(year: number) {
    this.year = year;
  }

  public getColor() {
    return this.color;
  }

  public setColor(color: string) {
    this.color = color;
  }

  public getStatus() {
    return this.status;
  }

  public setStatus(status: boolean) {
    this.status = status;
  }

  public getBuyValue() {
    return this.buyValue;
  }

  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  public getCategory() {
    return this.category;
  }

  public setCategory(category: string) {
    this.category = category;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }

  public setEngineCategory(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }
}

export default Motorcycle;