import {QuestionType} from '../const.js';

export default [
  {
    type: QuestionType.GENRE,
    genre: `rock`,
    answers: [
      {
        id: `1`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`,
      },
      {
        id: `2`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `blues`,
      },
      {
        id: `3`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `jazz`,
      },
      {
        id: `4`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`,
      }
    ]
  },
  {
    type: QuestionType.ARTIST,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`
    },
    answers: [
      {
        id: `1`,
        picture: `https://api.adorable.io/avatars/128/10`,
        artist: `John Snow`,
      },
      {
        id: `2`,
        picture: `https://api.adorable.io/avatars/128/16`,
        artist: `Jack Daniels`,
      },
      {
        id: `3`,
        picture: `https://api.adorable.io/avatars/128/24`,
        artist: `Jim Beam`,
      },
    ]
  },
  {
    type: QuestionType.GENRE,
    genre: `rock`,
    answers: [
      {
        id: `1`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`,
      },
      {
        id: `2`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `blues`,
      },
      {
        id: `3`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `jazz`,
      },
      {
        id: `4`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`,
      }
    ]
  },
];

export const genreQuestion = {
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      id: `1`,
      genre: `rock`,
      src: ``,
    }, {
      id: `2`,
      genre: `jazz`,
      src: ``,
    }, {
      id: `3`,
      genre: `blues`,
      src: ``,
    }, {
      id: `4`,
      genre: `blues`,
      src: ``,
    },
  ]
};

export const artistQuestion = {
  type: `artist`,
  song: {
    artist: `correct`,
    src: ``,
  },
  answers: [
    {
      artist: `correct`,
      picture: ``,
    }, {
      artist: `incorrect`,
      picture: ``,
    }, {
      artist: `incorrect-2`,
      picture: ``,
    },
  ]
};
