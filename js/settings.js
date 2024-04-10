const GRID_ROWS = 16;
const GRID_COLS = 32;

var DELAY_IN_MILLISEC = 5;

/* COLORS */
const BLACK = 'rgb(0, 0, 0)';
const GRAY1 = 'rgb(50, 50, 50)';
const GRAY2 = 'rgb(100, 100, 100)';
const GRAY3 = 'rgb(200, 200, 200)';
const BLACKLIGHT = 'rgb(100, 100, 100)';
const WHITE = 'rgb(255, 255, 255)';
const RED = 'rgb(200, 0, 0)';
const REDLIGHT = 'rgb(200, 100, 100)';
const YELLOW = 'rgb(255, 190, 0)';
const GREEN = 'rgb(0, 100, 0)';
const GREENLIGHT = 'rgb(50, 200, 50)';
const PINK = 'rgb(255, 120, 255)';
const PURPLE = 'rgb(255, 0, 255)';
const BLUEHEAVY = 'rgb(50, 50, 205)';
const BLUE = 'rgb(50, 50, 255)';
const BLUELIGHT = 'rgb(100, 100, 255)';
const BROWN = 'rgb(128, 64, 0)';
const BROWNLIGHT = 'rgb(230, 115, 0)';
const TURQUOISE = 'rgb(32, 114, 106)';
const TURQUOISELIGHT = 'rgb(50, 180, 166)';

/* VERTEX TYPES */
const BLANK_VERTEX = 'B';
const WALL_VERTEX = 'W';
const START_VERTEX = '▶';
const END_VERTEX = '🏁';

/* VERTEX POSITIONS */
const START_VERTEX_ROW = Math.floor(GRID_ROWS / 2);
const START_VERTEX_COL = Math.floor(GRID_COLS / 4);
const END_VERTEX_ROW = Math.floor(GRID_ROWS / 2);
const END_VERTEX_COL = Math.floor(GRID_COLS * 0.75);

const WALL_DENSITY = 0.2;

/* SEARCH */
const SEARCH_TYPES = [
    'BFS',
    'DFS',
     'A*'
];
