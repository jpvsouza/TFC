import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { adminLogin, dbAdminResult } from './mocks';
import User from '../database/models/User';
import Token from '../utils/Token';

chai.use(chaiHttp);

const { expect, request } = chai;

describe('Testes da rota /login.', () => {
  const token = Token.createMock(dbAdminResult.id);

  afterEach(()=> { sinon.restore(); });

  it('POST /login retorna um token se o login for valido', async () => {
    sinon.stub(User, 'findOne').resolves(dbAdminResult as User);
    sinon.stub(Token, 'create').returns(token);

    const response = await request(app).post('/login').send({...adminLogin});    
    expect(response.body).to.deep.equal({token});
  });
});