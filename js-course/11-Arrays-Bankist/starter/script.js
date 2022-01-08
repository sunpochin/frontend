'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
    // containerMovements.insertAdjacentHTML('beforeEnd', html);
  });
};

const calcDisplayBalance = acc => {
  const balance = acc.movements.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  acc.balance = balance;
  labelBalance.textContent = `${balance}€`;
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .reduce(function (acc, deposit) {
      return acc + deposit;
    }, 0);
  labelSumIn.textContent = `${incomes}€`;

  const expenses = account.movements
    .filter(function (mov) {
      return mov < 0;
    })
    .reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
  labelSumOut.textContent = `${Math.abs(expenses)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => {
      return (deposit * account.interestRate) / 100;
    })
    .filter((interest, i, arr) => {
      return interest > 1;
    })
    .reduce((acc, curr) => acc + curr, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const user = 'Steven Thomas Williams';
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
// console.log('accounts: ', accounts);

const updateUI = acc => {
  // display movements
  displayMovements(acc.movements);
  // display balance
  calcDisplayBalance(acc);
  // display summary
  calcDisplaySummary(acc);
};
//
// Event Handler.
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log('currentAccount: ', currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');
    labelWelcome.textContent = `Welcome ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    // clear
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  //
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log('amount: ', amount, ', receiver:', receiverAcc);
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log('Valid transfer');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount);
    // update UI
    updateUI(currentAccount);
  }
  //  inputLoanAmount.value = '';
  //
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('inputClosePin.value: ', inputClosePin.value);
  // inputCloseUsername.value = inputClosePin.value = '';
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === Number(currentAccount.pin)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === inputCloseUsername.value
    );
    // delete account
    accounts.splice(index, 1);
    // hide UI
    containerApp.style.opacity = 0;
    console.log('CLOSE: ', index);
    //    inputCloseUsername.value = inputClosePin.value = '';
  } else {
    console.log('XXX!');
  }
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log('movements: ', movements);
const deposits = movements.filter(mov => {
  return mov > 0;
});
// console.log('deposits: ', deposits);

// Maximun value:
const maximum = movements.reduce(function (acc, curr) {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
});
const mimimum = movements.reduce(function (acc, curr) {
  return Math.min(acc, curr);
});
// console.log('maximum: ', maximum, ',mimimum: ', mimimum);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iter ${i}, ${acc}`);
//   return acc + cur;
// }, 10000);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log('balance: ', balance);
// console.log(movements);
// console.log(movements.includes(-130));
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
const accMovements = accounts.map(acc => acc.movements);
const allMovements = accMovements.flat();
const overBalance = allMovements.reduce((acc, cur) => acc + cur, 0);
console.log('overBalance: ', overBalance);

const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => acc + cur, 0);
console.log('overallBalance2: ', overallBalance2);
///////////////////////////////////////
///////////////////////////////////////
// The map Method

// const eurToUsd = 1.1;

// // const movementsUSD = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });

// const movementsUSD = movements.map(mov => {
//   return mov * eurToUsd;
// });

// console.log(movements);
// console.log(movementsUSD);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}, you deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}, you withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('------------forEach');

// //movements.forEach(movement => {
// movements.forEach((movement, index, array) => {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}, you deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}, you withdrew ${Math.abs(movement)}`);
//   }
// });

// /////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// // shallow copy
// console.log(arr.slice());
// console.log([...arr]);

// console.log('SPLICE: ');
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // concate
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);
// // AT
// const arr3 = [23, 11, 64];
// // getting last array element
// console.log(arr3[arr.length - 1]);
// console.log(arr3.slice(-1)[0]);
// console.log(arr3.at(-1));

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((value, key, map) => {
//   console.log(`${key} - ${value}`);
// });

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);
//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages
//     .map(function (age, i) {
//       let humanAge;
//       if (age <= 2) {
//         humanAge = age * 2;
//       } else {
//         humanAge = 16 + age * 4;
//       }
//       // console.log(`Human age ${i + 1} is ${humanAge}`);
//       return humanAge;
//     })
//     .filter(age => age >= 18);
//   // .reduce(function (acc, curr) {
//   //   return acc + curr;
//   // });
//   const answer = humanAges.reduce(
//     (acc, curr) => acc + curr / humanAges.length,
//     0
//   );
//   return answer;
// };

// const calcAverageHumanAge = function (ages) {
//   const answer = ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce(function (acc, curr, i, arr) {
//       console.log('acc + curr / arr.length: ', acc, curr / arr.length);
//       return acc + curr / arr.length;
//     }, 0);
//   return answer;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// const eurToUsd = 1.1;
// console.log(movements);
// // PIPELINE
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     console.log('arr1: ', i, arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, curr, i, arr) => {
//     console.log('arr 2 : ', i, arr);
//     return acc + curr;
//   }, 0);
