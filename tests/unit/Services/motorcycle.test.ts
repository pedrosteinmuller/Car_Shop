import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/Motorcycles';

describe('Testes da camada Service de Motorcycle', function () {
  const motorcycleObj = [
    new Motorcycle({
      model: 'Shineray',
      year: 2018,
      color: 'Black',
      buyValue: 5000.00,
      category: 'Street',
      engineCapacity: 400,
      status: true,
      id: '641b49b1a135746a3c3b2909',
    }),
  ];

  const motorcycleInput: IMotorcycle = {
    model: 'Shineray',
    year: 2018,
    color: 'Black',
    buyValue: 5000.00,
    category: 'Street',
    engineCapacity: 400,
    status: true,
  };

  const motorcycleOutput = new Motorcycle({
    model: 'Shineray',
    year: 2018,
    color: 'Black',
    buyValue: 5000.00,
    category: 'Street',
    engineCapacity: 400,
    status: true,
    id: '641b49b1a135746a3c3b2909',
  });

  it('Deve criar um moto com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.createMotorcycles(motorcycleInput);

    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('Deve falhar ao criar uma moto', async function () {
    sinon.stub(Model, 'create').resolves(null);

    const service = new MotorcycleService();
    const result = await service.createMotorcycles(motorcycleInput);

    expect(result).to.be.deep.equal(null);
  });

  it('Lista todas as motos', async function () {
    sinon.stub(Model, 'find').resolves(motorcycleObj);

    const service = new MotorcycleService();
    const result = await service.getAllMotorcycles();

    expect(result.message).to.be.deep.equal(motorcycleObj);
  });

  it('Lista uma moto pelo id específico', async function () {
    sinon.stub(Model, 'findById').resolves(motorcycleObj[0]);
    // console.log(carsObj[0]); aqui uso carsObj[0] para pegar o id

    const service = new MotorcycleService();
    const result = await service.getMotorcyclesById('126c22c6a135746a3c3b2909');

    expect(result.message).to.deep.equal(motorcycleObj[0]);
  });

  it('Não lista todas as motos com um id inválido em relação ao do banco', async function () {
    // sinon.stub(Model, 'findById').throws();
    try {
      const service = new MotorcycleService();
      await service.getMotorcyclesById('11');
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Invalid mongo id');
    }
  });

  it('Não lista uma moto em que o id não é encontrado dentro banco', async function () {
    // sinon.stub(Model, 'findById').resolves(null);
    try {
      const service = new MotorcycleService();
      await service.getMotorcyclesById('641b49b1a135746a3c3b2909');
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Motorcycle not found');
    }
  });

  it('Deleta uma motorcycle com sucesso', async function () {
    sinon.stub(Model, 'findById').resolves(true);
    sinon.stub(Model, 'findByIdAndDelete').resolves(true);
    const service = new MotorcycleService();
    const result = await service.deleteMotorcycle('089742326b35b59438fbea2f');
    expect(result.message).to.be.deep.equal('');
  });
  afterEach(sinon.restore);
});