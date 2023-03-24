import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("looks.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS looks (id INTEGER PRIMARY KEY NOT NULL, dayornight TEXT NOT NULL, weather TEXT NOT NULL, type TEXT NOT NULL);",
        [],
        () => resolve(),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const insertLook = (dayornight, weather, type) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO looks (dayornight, weather, type) VALUES (?, ?, ?);",
        [dayornight, weather, type],
        (_, result) => {
          resolve(result);
        },
        (_, err) => reject(err)
      );
    });
  });

  return promise;
};

export const getLooks = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM looks",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
