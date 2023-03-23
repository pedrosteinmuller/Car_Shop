import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarsService from '../../../src/Services/Cars';

describe('Testes da camada Service de Car', function () {
  const carsObj = [
    new Car({
      model: 'Fusca',
      year: 2004,
      color: 'White',
      buyValue: 500.00,
      doorsQty: 4,
      seatsQty: 4,
      status: true,
      id: '641b49b1a135746a3c3b2909',
    }),
  ];

  const carInput: ICar = {
    model: 'Fusca',
    year: 2004,
    color: 'White',
    buyValue: 500.00,
    doorsQty: 4,
    seatsQty: 4,
    status: true,
  };

  const carOutput = new Car({
    model: 'Fusca',
    year: 2004,
    color: 'White',
    buyValue: 500.00,
    doorsQty: 4,
    seatsQty: 4,
    status: true,
    id: '641b49b1a135746a3c3b2909',
  });

  it('Deve criar um carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarsService();
    const result = await service.createCar(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deve falhar ao criar um carro', async function () {
    sinon.stub(Model, 'create').resolves(null);

    const service = new CarsService();
    const result = await service.createCar(carInput);

    expect(result).to.be.deep.equal(null);
  });

  it('Lista todos os carros', async function () {
    sinon.stub(Model, 'find').resolves(carsObj);

    const service = new CarsService();
    const result = await service.getAllCars();

    expect(result.message).to.be.deep.equal(carsObj);
  });

  it('Lista um carro pelo id específico', async function () {
    sinon.stub(Model, 'findById').resolves(carsObj[0]);
    // console.log(carsObj[0]); aqui uso carsObj[0] para pegar o id

    const service = new CarsService();
    const result = await service.getCarById('641b49b1a135746a3c3b2909');

    expect(result.message).to.deep.equal(carsObj[0]);
  });

  it('Não Lista todos os carros com um id inválido em relação ao do banco', async function () {
    // sinon.stub(Model, 'findById').throws();
    try {
      const service = new CarsService();
      await service.getCarById('11');
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Invalid mongo id');
    }
  });

  it('Não lista um carro em que o id não é encontrado dentro banco', async function () {
    // sinon.stub(Model, 'findById').resolves(null);
    try {
      const service = new CarsService();
      await service.getCarById('089742326b35b59438fbea2f');
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Car not found');
    }
  });

  it('Deve atualizar um carro com sucesso', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carsObj[0]);
    const service = new CarsService();
    const result = await service.updateCar('089742326b35b59438fbea2f', carInput);
    expect(result.message).to.be.deep.equal(carsObj[0]);
  });

  it('Não deve atualizar um carro com formato id do banco inválido', async function () {
    try {
      const service = new CarsService();
      await service.updateCar('1', carInput);
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Invalid mongo id');
    }
  });

  afterEach(sinon.restore);
});