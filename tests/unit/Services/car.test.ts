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

  // it('Não Lista todos os carros com um id inválido em relação ao do banco', async function () {
  //   sinon.stub(Model, 'findById').resolves(carsObj[0]);
  
  //   const service = new CarsService();
  //   const result = await service.getCarById('11');
  
  //   expect(result.message).to.be.deep.equal({ message: 'Invalid mongo id' });
  //   expect(result.status).to.be.deep.equal(422);
  // });

  // it('Não lista um carro em que o id não é encontrado dentro banco', async function () {
  //   sinon.stub(Model, 'findById').resolves(null);
  
  //   const service = new CarsService();
  //   const result = await service.getCarById('089742326b35b59438fbea2f');
  
  //   expect(result.message).to.be.deep.equal({ message: 'Car not found' });
  //   expect(result.status).to.be.deep.equal(404);
  // });

  afterEach(sinon.restore);
});