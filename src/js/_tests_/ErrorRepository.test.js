import ErrorRepository from '../app';

test('Method "Add" should add new error to ErrorRepository', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.add(23, 'Некорректный запрос');
  errorRepository.add(30, 'Пользователь не авторизован');
  errorRepository.add(44, 'Истекло время ожидания');
  const result = errorRepository.errorStorage.size;
  expect(result).toEqual(3);
});
test('Method "Translate" should return error text by code', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.add(53, 'Оплата временно недоступна');
  errorRepository.add(11, 'Плохое интернет-соединение');
  errorRepository.add(66, 'Пользователь заблокирован');
  const result = errorRepository.translate(66);
  expect(result).toEqual('Пользователь заблокирован');
});
test('Method "Translate" should return "Unknown error" if errorRepository has not error with this code', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.add(23, 'Некорректный запрос');
  errorRepository.add(30, 'Пользователь не авторизован');
  const result = errorRepository.translate(66);
  expect(result).toEqual('Unknown error');
});
test('Method "Add" should return "Error not added" if error code is incorrect', () => {
  expect(() => {
    const errorRepository = new ErrorRepository();
    errorRepository.add('23', 'Неккоректный запрос');
  }).toThrow();
});
test('Method "Add" should return "Error not added" if error text is incorrect', () => {
  expect(() => {
    const errorRepository = new ErrorRepository();
    errorRepository.add(23, ['Некорретный', 'запрос']);
  }).toThrow();
});
