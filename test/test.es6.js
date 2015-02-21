import assert from 'power-assert';
import ModuleName from '../lib/es6-module-name';

mocha.setup('bdd');
window.onload = () => {
  if (window.mochaPhantomJS) {
    mochaPhantomJS.run();
  } else {
    mocha.run();
  }
};



// .test()
describe('.test()', () => {
  it('テストのテスト', () => {
    assert(true);
  });
});
