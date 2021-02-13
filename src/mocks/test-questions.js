import {QuestionType} from '../const.js';

export const AVATAR_URL = `https://i.pravatar.cc/128`;
const SONG_SRC = `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`;

export default [
  {
    type: QuestionType.GENRE,
    genre: `rock`,
    answers: [
      {
        id: `1`,
        src: SONG_SRC,
        genre: `rock`,
      },
      {
        id: `2`,
        src: SONG_SRC,
        genre: `blues`,
      },
      {
        id: `3`,
        src: SONG_SRC,
        genre: `jazz`,
      },
      {
        id: `4`,
        src: SONG_SRC,
        genre: `rock`,
      }
    ]
  },
  {
    type: QuestionType.ARTIST,
    song: {
      artist: `Jim Beam`,
      src: SONG_SRC
    },
    answers: [
      {
        id: `1`,
        picture: `${AVATAR_URL}?rnd=1`,
        artist: `John Snow`,
      },
      {
        id: `2`,
        picture: `${AVATAR_URL}?rnd=2`,
        artist: `Jack Daniels`,
      },
      {
        id: `3`,
        picture: `${AVATAR_URL}?rnd=3`,
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
        src: SONG_SRC,
        genre: `rock`,
      },
      {
        id: `2`,
        src: SONG_SRC,
        genre: `blues`,
      },
      {
        id: `3`,
        src: SONG_SRC,
        genre: `jazz`,
      },
      {
        id: `4`,
        src: SONG_SRC,
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
