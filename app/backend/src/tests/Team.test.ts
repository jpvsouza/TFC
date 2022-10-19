import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { teams } from './mocks';
import Team from '../database/models/Team';

chai.use(chaiHttp);

const { expect, request } = chai;

describe('Testes da rota /teams.', () => {
  afterEach(()=> { sinon.restore(); });

  it('GET retorna uma lista com todos os times.', async () => {
    sinon.stub(Team, 'findAll').resolves(teams as Team[]);

    const response = await request(app).get('/teams').send();    
    expect(response.body).to.deep.equal(teams);
  });
});