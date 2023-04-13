import moment from 'moment';

export const clientData = {
  user_id: 1,
};

export const accounts = [
  { id: 1, balance: '24 500', currency: 'CHF', cardNumber: 'CH83**13125' },
  { id: 2, balance: '7 300', currency: 'EUR', cardNumber: 'CH83**13436' },
  { id: 3, balance: '5 800', currency: 'USD', cardNumber: 'CH93**43436' },
];


  // start mock datas for tasks block tabs
  export const backlogLists = [
    {id: 1, title: 'Make new logo', description: 'create at least three initial design concepts'},
    {id: 2, title: 'Test new website', description: 'manual testing & heuristics'},
    {id: 3, title: 'Revise marketing plan', description: 'define new objectives + develop action plan'}
  ];
  
  export const inprogressLists = [
    {id: 1, title: 'Change logo design', description: 'change at least three initial design concepts'},
    {id: 2, title: 'Change new website', description: 'change manual testing & heuristics'},
    {id: 3, title: 'Change marketing plan', description: 'change new objectives + develop action plan'}
  ];
  
  export const doneLists = [
    {id: 1, title: 'Remove new logo', description: 'remove at least three initial design concepts'},
    {id: 2, title: 'Remove new website', description: 'remove testing & heuristics'},
    {id: 3, title: 'Remove marketing plan', description: 'remove new objectives + develop action plan'}
  ];
  
  export const closedLists = [
    {id: 1, title: 'Delete new logo', description: 'delete at least three initial design concepts'},
    {id: 2, title: 'Delete new website', description: 'delete testing & heuristics'},
    {id: 3, title: 'Delete marketing plan', description: 'delete new objectives + develop action plan'}
  ];
  // end mock datas for tasks block tabs




export const accountsHistory = [
  {
    id: 1,
    title: 'Agatech SpA',
    subtitle: 'Invoice #2962',
    amount: 320,
    currency: 'CHF',
    accountId: 1,
    created_at: moment()
      .subtract(1, 'months')
      .unix(),
  },
  {
    id: 2,
    title: 'Mueller plastic',
    subtitle: 'Invoice #2961',
    amount: 750,
    currency: 'CHF',
    accountId: 2,
    created_at: moment()
      .subtract(1, 'months')
      .unix(),
  },

  {
    id: 3,
    title: 'Robotec Ag',
    subtitle: 'Invoice #2960',
    amount: -460,
    currency: 'EUR',
    accountId: 1,
    created_at: moment()
      .subtract(1, 'months')
      .subtract(2, 'days')
      .unix(),
  },
  {
    id: 4,
    title: 'Phoenix Contact GmbH',
    subtitle: 'Invoice #2959',
    amount: 230,
    currency: 'CHF',
    accountId: 1,
    created_at: moment()
      .subtract(1, 'months')
      .subtract(2, 'days')
      .unix(),
  },
  {
    id: 5,
    title: 'RENE RAUTENBERG GmbH',
    subtitle: 'Invoice #2957',
    amount: 900,
    currency: 'USD',
    accountId: 2,
    created_at: moment()
      .subtract(1, 'months')
      .subtract(2, 'days')
      .unix(),
  },
  {
    id: 6,
    title: 'GRIS LLC',
    subtitle: 'Payment order #81',
    amount: -150,
    currency: 'EUR',
    accountId: 3,
    created_at: moment()
      .subtract(1, 'months')
      .subtract(2, 'days')
      .unix(),
  },

  {
    id: 7,
    title: 'JENTECH DA TENSYSTEME AG',
    subtitle: 'Invoice #2957',
    amount: 2350,
    currency: 'USD',
    accountId: 3,
    created_at: moment()
      .subtract(1, 'months')
      .subtract(3, 'days')
      .unix(),
  },
  {
    id: 8,
    title: 'Zebnet LLC',
    subtitle: 'Payment order #80',
    amount: -299,
    currency: 'USD',
    accountId: 3,
    created_at: moment()
      .subtract(1, 'months')
      .subtract(3, 'days')
      .unix(),
  },
];

export const CHAT_DIALOG_STATUS_ACTIVE = 0;
export const CHAT_DIALOG_STATUS_DEFERRED = 1;
export const CHAT_DIALOG_STATUS_CLOSED = 2;

export const chatDialogs = [
  {
    id: 123123,
    message: 'Got it, thanks!',
    status: CHAT_DIALOG_STATUS_ACTIVE,
    messages: [
      {
        id: 1,
        text: 'Hello!',
        user_id: 1,
        created_at: moment()
          .subtract(5, 'day')
          .unix(),
      },
      {
        id: 2,
        text: 'Hello! How can I help you?',
        user_id: 2,
        created_at: moment()
          .subtract(5, 'day')
          .add(2, 'minutes')
          .unix(),
      },
      {
        id: 3,
        text: 'Please tell me how I can place an order on your site?',
        user_id: 1,
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),
      },
      {
        id: 4,
        text:
          'You need to select the desired item and add it to the cart, then pay for the order and we will deliver it to the specific address.',
        user_id: 2,
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),
      },
    ],
    date: moment().unix(),
  },
  {
    id: 5252,
    message: 'Thank you!',
    messages: [],
    status: CHAT_DIALOG_STATUS_ACTIVE,
    date: moment()
      .subtract(2, 'days')
      .unix(),
  },
  {
    id: 52555,
    message: 'Thank you very much!',
    messages: [],
    status: CHAT_DIALOG_STATUS_DEFERRED,
    date: moment()
      .subtract(10, 'days')
      .unix(),
  },
];

export const receipts = [
  {
    id: 1,
    name: 'Charged Cash',
    value: '84 CHF',
    created_at: moment()
      .subtract(5, 'days')
      .unix(),
  },
  {
    id: 2,
    name: 'Charged Cash',
    value: '84 CHF',
    created_at: moment()
      .subtract(7, 'days')
      .unix(),
  },
  {
    id: 3,
    name: 'Charged Cash',
    value: '84 CHF',
    created_at: moment()
      .subtract(2, 'month')
      .unix(),
  },
  {
    id: 4,
    name: 'Cache received',
    value: '1500 CHF',
    created_at: moment()
      .subtract(5, 'month')
      .unix(),
  },
];
