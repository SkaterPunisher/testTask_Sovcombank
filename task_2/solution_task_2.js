const bondDataCache = {};

const getBondsData = async ({ date, isins }) => {
  const cachedResult = bondDataCache[date];
  if (cachedResult) {
    const filteredData = cachedResult.filter((item) =>
      isins.includes(item.isin)
    );
    if (filteredData.length === isins.length) {
      return filteredData;
    }
  }

  const result = await http.post({ url: `/bonds/${date}`, body: isins });
  bondDataCache[date] = result;
  return result;
};

// В этой реализации мы сначала проверяем, находятся ли запрошенные данные уже в кэше на заданную дату. Если это так, мы фильтруем кэшированные данные, чтобы включить только запрошенные ISINS, и возвращаем их, если присутствуют все запрошенные данные. Если запрошенных данных нет в кэше, мы выполняем новый вызов API и сохраняем результат в кэше для дальнейшего использования.
// Вычислительная сложность этого алгоритма равна O(n), где n - количество запрошенных ISIN. Объем используемой памяти равен O(m), где m - количество запрошенных уникальных дат.
// Стоит отметить, что эта реализация предполагает, что данные API являются неизменяемыми и не меняются с течением времени. Если данные API могут изменяться, нам, возможно, потребуется реализовать стратегию аннулирования кэша, чтобы гарантировать актуальность кэшированных данных.