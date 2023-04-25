import moment from 'moment';
import annAvatar from '../assets/chat-users/Ann.png';
import aspenAvatar from '../assets/chat-users/Aspen.png';
import gretchenAvatar from '../assets/chat-users/Gretchen.png';
import tomAvatar from '../assets/chat-users/Tom.png';

export const clientData = {
  user_id: 1,
};

export const accounts = [
  { id: 1, balance: '24 500', currency: 'CHF', cardNumber: '56988486 02851435 86629320' },
  { id: 2, balance: '7 300', currency: 'EUR', cardNumber: '90013942 82544594 49005189' },
  { id: 3, balance: '5 800', currency: 'USD', cardNumber: '29120575 66891365 54023171' },
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
export const UNREAD = 'unread';
export const READ = 'read';


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


export const events = [
  { start_date:'2023-04-18 6:00', end_date:'2023-04-18 8:00', text:'Event 1', id: 1 },
  { start_date:'2023-04-21 10:00', end_date:'2023-04-21 18:00', text:'Event 2', id: 2 }
];


export const chatMessages = [
  {
    id: 444,
    firstName: 'Tom',
    lastName: 'Westervelt',
    lastMessage: 'Sure you do, no worries about this problem',
    status: UNREAD,
    new_messages: 1,
    messages: [
      {
        id: 1,
        texts: [
          {
            text: 'Hi there, where are you?',
          }
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .unix(),
      },
      {
        id: 2,
        texts: [
          {
            text: 'I am going to take a photo',
          }
        ],
        user_id: 'own',
        created_at: moment()
          .subtract(5, 'day')
          .add(2, 'minutes')
          .unix(),
      },
      {
        id: 3,
        texts: [
          {
            text: 'What type of photo?',
          }
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),
      },
      {
        id: 4,
        texts: [
          {
            text: 'Wedding photography :)',
          }
        ],
        user_id: 'own',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),
      },
      {
        id: 5,
        texts: [
          {
            text: 'Great!',
          },
          {
            text: 'Let me know',
          },
          {
            text: 'when you are free',
          },
          {
            text: 'I have a good news for you',
          },
          {
            text: 'Great, thanks! Wait, did you just send me a picture of a cat?',
          },
          {
            text: 'Lorem ipsum dolor sit amet',
          },
          {
            text: 'Lorem ipsum',
          },
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),  
      },
    ],
    avatar: tomAvatar,
    date: moment()
      .subtract(10, 'days')
      .unix(),
  },
  {
    id: 111,
    firstName: 'Ann',
    lastName: 'Aminoff',
    lastMessage: 'Yes, and also the other tasks are copmlete',
    status: UNREAD,
    new_messages: 2,
    avatar: annAvatar,
    messages: [
      {
        id: 1,
        texts: [
          {
            text: 'Hey, have you finished that report for the deadline tomorrow?!',
          }
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .unix(),
      },
      {
        id: 2,
        texts: [
          {
            text: 'Almost done, just need to send the file. Hold on a sec...',
          }
        ],
        user_id: 'own',
        created_at: moment()
          .subtract(5, 'day')
          .add(2, 'minutes')
          .unix(),
      },
      {
        id: 3,
        texts: [
          {
            text: 'No worries, take your time.',
          }
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),
      },
      {
        id: 4,
        texts: [
          {
            text: 'Okay, sending it now.',
          }
        ],
        user_id: 'own',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),
      },
      {
        id: 5,
        texts: [
          {
            text: 'Great, thanks! Wait, did you just send me a picture of a cat?',
          },
          {
            text: 'Lorem ipsum dolor sit amet',
          },
          {
            text: 'Lorem ipsum',
          },
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),  
      },
    ],
    date: moment().unix(),
  },
  {
    id: 222,
    firstName: 'Aspen',
    lastName: 'Vaccaro',
    lastMessage: 'Ok, I will update the chart and come back to you',
    status: READ,
    new_messages: 0,
    messages: [
      {
        id: 1,
        texts: [
          {
            text: 'Hey, how are you?',
          }
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .unix(),
      },
      {
        id: 2,
        texts: [
          {
            text: 'Thanks I am good',
          }
        ],
        user_id: 'own',
        created_at: moment()
          .subtract(5, 'day')
          .add(2, 'minutes')
          .unix(),
      },
      {
        id: 3,
        texts: [
          {
            text: 'Where ar you now?',
          }
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),
      },
      {
        id: 4,
        texts: [
          {
            text: 'At gym',
          }
        ],
        user_id: 'own',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),
      },
      {
        id: 5,
        texts: [
          {
            text: 'Great!',
          },
          {
            text: 'Let me know',
          },
          {
            text: 'when you are free',
          },
          {
            text: 'I have a good news for you',
          },          {
            text: 'Great, thanks! Wait, did you just send me a picture of a cat?',
          },
          {
            text: 'Lorem ipsum dolor sit amet',
          },
          {
            text: 'Lorem ipsum',
          },
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),  
      },
    ],
    avatar: aspenAvatar,
    date: moment()
      .subtract(2, 'days')
      .unix(),
  },
  {
    id: 333,
    firstName: 'Gretchen',
    lastName: 'Carder',
    lastMessage: 'Can you please send your location?',
    status: UNREAD,
    new_messages: 3,
    messages: [
      {
        id: 1,
        texts: [
          {
            text: 'Hi there, where are you?',
          }
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .unix(),
      },
      {
        id: 2,
        texts: [
          {
            text: 'I am going to take a photo',
          }
        ],
        user_id: 'own',
        created_at: moment()
          .subtract(5, 'day')
          .add(2, 'minutes')
          .unix(),
      },
      {
        id: 3,
        texts: [
          {
            text: 'What type of photo?',
          }
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),
      },
      {
        id: 4,
        texts: [
          {
            text: 'Wedding photography :)',
          }
        ],
        user_id: 'own',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),
      },
      {
        id: 5,
        texts: [
          {
            text: 'Great!',
          },
          {
            text: 'Let me know',
          },
          {
            text: 'when you are free',
          },
          {
            text: 'I have a good news for you',
          },          {
            text: 'Great, thanks! Wait, did you just send me a picture of a cat?',
          },
          {
            text: 'Lorem ipsum dolor sit amet',
          },
          {
            text: 'Lorem ipsum',
          },
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),  
      },
    ],
    avatar: gretchenAvatar,
    date: moment()
      .subtract(10, 'days')
      .unix(),
  },
  {
    id: 555,
    firstName: 'Tom',
    lastName: 'Westervelt',
    lastMessage: 'Sure you do, no worries about this problem',
    status: READ,
    new_messages: 0,
    messages: [
      {
        id: 1,
        texts: [
          {
            text: 'Hey, have you finished that report for the deadline tomorrow?!',
          }
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .unix(),
      },
      {
        id: 2,
        texts: [
          {
            text: 'Almost done, just need to send the file. Hold on a sec...',
          }
        ],
        user_id: 'own',
        created_at: moment()
          .subtract(5, 'day')
          .add(2, 'minutes')
          .unix(),
      },
      {
        id: 3,
        texts: [
          {
            text: 'No worries, take your time.',
          }
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),
      },
      {
        id: 4,
        texts: [
          {
            text: 'Okay, sending it now.',
          }
        ],
        user_id: 'own',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),
      },
      {
        id: 5,
        texts: [
          {
            text: 'Great, thanks! Wait, did you just send me a picture of a cat?',
          },
          {
            text: 'Lorem ipsum dolor sit amet',
          },
          {
            text: 'Lorem ipsum',
          },          {
            text: 'Great, thanks! Wait, did you just send me a picture of a cat?',
          },
          {
            text: 'Lorem ipsum dolor sit amet',
          },
          {
            text: 'Lorem ipsum',
          },
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),  
      },
    ],
    avatar: tomAvatar,
    date: moment()
      .subtract(10, 'days')
      .unix(),
  },
  {
    id: 666,
    firstName: 'Ann',
    lastName: 'Aminoff',
    lastMessage: 'Yes, and also the other tasks are copmlete',
    status: UNREAD,
    new_messages: 1,
    messages: [
      {
        id: 1,
        texts: [
          {
            text: 'Hey, how are you?',
          }
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .unix(),
      },
      {
        id: 2,
        texts: [
          {
            text: 'Thanks I am good',
          }
        ],
        user_id: 'own',
        created_at: moment()
          .subtract(5, 'day')
          .add(2, 'minutes')
          .unix(),
      },
      {
        id: 3,
        texts: [
          {
            text: 'Where ar you now?',
          }
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),
      },
      {
        id: 4,
        texts: [
          {
            text: 'At gym',
          }
        ],
        user_id: 'own',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),
      },
      {
        id: 5,
        texts: [
          {
            text: 'Great!',
          },
          {
            text: 'Let me know',
          },
          {
            text: 'when you are free',
          },
          {
            text: 'I have a good news for you',
          },          {
            text: 'Great, thanks! Wait, did you just send me a picture of a cat?',
          },
          {
            text: 'Lorem ipsum dolor sit amet',
          },
          {
            text: 'Lorem ipsum',
          },
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),  
      },
    ],
    avatar: annAvatar,
    date: moment().unix(),
  },
  {
    id: 777,
    firstName: 'Aspen',
    lastName: 'Vaccaro',
    lastMessage: 'Ok, I will update the chart and come back to you',
    status: READ,
    new_messages: 0,
    messages: [
      {
        id: 1,
        texts: [
          {
            text: 'Hi there, where are you?',
          }
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .unix(),
      },
      {
        id: 2,
        texts: [
          {
            text: 'I am going to take a photo',
          }
        ],
        user_id: 'own',
        created_at: moment()
          .subtract(5, 'day')
          .add(2, 'minutes')
          .unix(),
      },
      {
        id: 3,
        texts: [
          {
            text: 'What type of photo?',
          }
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),
      },
      {
        id: 4,
        texts: [
          {
            text: 'Wedding photography :)',
          }
        ],
        user_id: 'own',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),
      },
      {
        id: 5,
        texts: [
          {
            text: 'Great!',
          },
          {
            text: 'Let me know',
          },
          {
            text: 'when you are free',
          },
          {
            text: 'I have a good news for you',
          },          {
            text: 'Great, thanks! Wait, did you just send me a picture of a cat?',
          },
          {
            text: 'Lorem ipsum dolor sit amet',
          },
          {
            text: 'Lorem ipsum',
          },
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),  
      },
    ],
    avatar: aspenAvatar,
    date: moment()
      .subtract(2, 'days')
      .unix(),
  },
  {
    id: 888,
    firstName: 'Gretchen',
    lastName: 'Carder',
    lastMessage: 'Can you please send your location?',
    status: UNREAD,
    new_messages: 1,
    messages: [
      {
        id: 1,
        texts: [
          {
            text: 'Hi there, where are you?',
          }
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .unix(),
      },
      {
        id: 2,
        texts: [
          {
            text: 'I am going to take a photo',
          }
        ],
        user_id: 'own',
        created_at: moment()
          .subtract(5, 'day')
          .add(2, 'minutes')
          .unix(),
      },
      {
        id: 3,
        texts: [
          {
            text: 'What type of photo?',
          }
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),
      },
      {
        id: 4,
        texts: [
          {
            text: 'Wedding photography :)',
          }
        ],
        user_id: 'own',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),
      },
      {
        id: 5,
        texts: [
          {
            text: 'Great!',
          },
          {
            text: 'Let me know',
          },
          {
            text: 'when you are free',
          },
          {
            text: 'I have a good news for you',
          },          {
            text: 'Great, thanks! Wait, did you just send me a picture of a cat?',
          },
          {
            text: 'Lorem ipsum dolor sit amet',
          },
          {
            text: 'Lorem ipsum',
          },
        ],
        user_id: 'friend',
        created_at: moment()
          .subtract(5, 'day')
          .add(10, 'minutes')
          .unix(),  
      },
    ],
    avatar: gretchenAvatar,
    date: moment()
      .subtract(10, 'days')
      .unix(),
  }
];