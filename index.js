import $t from './libs/test.js';
import $t2 from './libs/1-source-data.js';
import _ from 'lodash';


//1
$t.answer(1, async () => {
  const market = $t2;
  const result = market.reduce((acc, curr) => {
    acc.balance += curr.category === 'Income' ? curr.amount : -curr.amount;
    acc.income += curr.category === 'Income' ? curr.amount : 0;
    acc.expenses += curr.category !== 'Income' ? curr.amount : 0;
    acc.byCategories[curr.category] = (acc.byCategories[curr.category] || 0) + (curr.category === 'Income' ? curr.amount : -curr.amount);
    return acc;
  }, {
    balance: 0,
    income: 0,
    expenses: 0,
    byCategories: {},
  });

  return result;
});
//2
const $source = $t.source(2)
$t.answer(2, async () => {
  const ids = await $source.getIds()

  const promises = ids.map(id => $source.getText(id))
  const texts = await Promise.all(promises)

  
  return texts
})
