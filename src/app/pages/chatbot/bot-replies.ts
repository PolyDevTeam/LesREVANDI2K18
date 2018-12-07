const botAvatar: string = 'https://i.ytimg.com/vi/Erqi5ckVoEo/hqdefault.jpg';

export const gifsLinks: string[] = [
  'https://media.tenor.com/images/ac287fd06319e47b1533737662d5bfe8/tenor.gif',
  'https://i.gifer.com/no.gif',
  'https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif',
  'http://www.reactiongifs.com/r/wnd1.gif',
];
export const imageLinks: string[] = [
  'https://picsum.photos/320/240/?image=357',
  'https://picsum.photos/320/240/?image=556',
  'https://picsum.photos/320/240/?image=339',
  'https://picsum.photos/320/240/?image=387',
  'https://picsum.photos/320/240/?image=30',
  'https://picsum.photos/320/240/?image=271',
];

const fileLink: string = 'http://google.com';

export const botReplies = [
  {
    regExp: /([H,h]ey)|([H,h]i)/g,
    answerArray: ['Hello!', 'Yes?', 'Yes, milord?', 'What can I do for you?'],
    type: 'text',
    reply: {
      text: '',
      reply: false,
      date: new Date(),
      user: {
        name: 'Dieu',
        avatar: botAvatar,
      },
    },
  },
  {
    regExp: /([l,L][o,O][l,L])|([m,M][d,D][R,r])/g,
    answerArray: [''],
    type: 'pic',
    reply: {
      text: '',
      reply: false,
      date: new Date(),
      type: 'file',
      files: [
        {
          url: 'https://i.kym-cdn.com/photos/images/newsfeed/001/073/580/00c.png',
          type: 'image/png',
        },
      ],
      user: {
        name: 'Dieu',
        avatar: botAvatar,
      },
    },
  },
  {
    regExp: /([D,d]ead)/g,
    answerArray: ['Tu es mort ?', 'Et la tu es mort ?'],
    type: 'pic',
    reply: {
      text: '',
      reply: false,
      date: new Date(),
      type: 'file',
      files: [
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_o5wy0eh4PWNeR5p_G28Jxmy0z7iA2x1q5rxYGcufXNeT8-s_Ww',
          type: 'image/jpeg',
        },
      ],
      user: {
        name: 'Dieu',
        avatar: botAvatar,
      },
    },
  },
  {
    regExp: /(.*)/g,
    answerArray: ['Hello there! Try typing "help"'],
    type: 'api',
    reply: {
      text: '',
      reply: false,
      date: new Date(),
      user: {
        name: 'Dieu',
        avatar: botAvatar,
      },
    },
  },
];
