import { Model, Schema, model, models } from 'mongoose';

abstract class AbstractODM<T> {
  readonly model: Model<T>;
  private schema: Schema;
  private modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(modelName, this.schema);
  }

  public async createCar(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findCar() {
    return this.model.find();
  }

  public async getCarById(id: string) {
    try {
      const result = await this.model.findById(id);
      return result;
    } catch (error) {
      return null;
    }
  }

  public async updateCar(id: string, obj: Partial<T>) {
    const updateObj = await this.model.findByIdAndUpdate(
      { _id: id },
      obj,
      { new: true },
    );
    return updateObj;
  }
}

export default AbstractODM;