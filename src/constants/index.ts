export const THEME: { [key in Theme]: Theme } = Object.freeze({
  LIGHT: 'LIGHT',
  DARK: 'DARK',
});

export const FE_LOCAL_STORAGE_PREFIX: string = 'FEStore';

export const LOREM_IPSUM: string[] = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus sit amet est placerat in.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at consectetur lorem donec massa sapien faucibus et. Volutpat sed cras ornare arcu dui vivamus.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus suspendisse faucibus interdum posuere lorem ipsum. Aliquam eleifend mi in nulla posuere sollicitudin. Turpis massa sed elementum tempus.',
];

export const AE_TESTIMONIALS = { API_URI: 'https://reqres.in/api/users' };

export const CRYPTO_PRICES_CONFIG = {
  PAGE_SIZE: 10,
  TOTAL_SIZE: 30,
  API_URI: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&locale=en',
};

export const RAPID_MOVIESDB_HOST: string = 'moviesdatabase.p.rapidapi.com';

export const NO_OP: () => void = () => {};

export const QUESTION_LIST_SUBMISSION_STATUS = Object.freeze({
  CORRECT: 'CORRECT',
  INCORRECT: 'INCORRECT',
  PARTIALLY_CORRECT: 'PARTIALLY_CORRECT',
});

export const QUIZ_CONFIG = {
  TOTAL_QUESTIONS: 3,
  API_URI: 'https://opentdb.com/api.php?amount=3&type=multiple',
};

export const WORDLE_CONFIG = {
  BOARD_SIZE: 6,
  ROW_SIZE: 5,
  ALPHABET_REGEX: /^[A-Z]{1}$/i,
};

export const MEMORY_CONFIG = {
  TILES_MAP: {
    red: 'red',
    blue: 'blue',
    yellow: 'yellow',
    green: 'green',
  },
  TILES: ['red', 'yellow', 'green', 'blue'],
  BOARD_SIZE: 8,
};

export const CONNECT_FOUR_CONFIG = {
  MAX_ROWS: 6,
  MAX_COLS: 7,
  COUNT_TO_WIN: 4,
  PLAYERS: {
    P1: 1,
    P2: 2,
  },
};

export const URLS = {
  HOME: '/',
  GITHUB: 'https://github.com/DemonDaddy22',
  PORTFOLIO: 'https://rohangupta.xyz/',
};

export const CONTENT_VARIANTS = {
  visible: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: 5,
    opacity: 0,
  },
};

export const ICON_PATH_VARIANTS = {
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 0.1 },
  },
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
};

export const RESPONSIVE_BREAKPOINT_WIDTH = 1200;

export const MENU_BUTTON_SIZE = 48;
