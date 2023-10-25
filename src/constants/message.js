const ERROR = Object.freeze({
  EMPTY_INPUT: '사용자 입력이 없습니다.',
  INVALID_TYPE: '숫자가 아닙니다.',
  INVALID_DIGITS: '숫자는 3자리여야 합니다.',
  OUT_OF_RANGE: '숫자는 1~9 사이여야 합니다.',
  DUPLICATE_NUMBERS: '중복되는 숫자가 있습니다.',
});

const READ = Object.freeze({
  USER_NUMBER: '숫자를 입력해주세요 : ',
  RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
});

export const MESSAGE = Object.freeze({
  READ,
  ERROR,
  START_GAME: '숫자 야구 게임을 시작합니다.',
  END_GAME: '게임 종료',
});
