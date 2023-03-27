import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("looks.db");

// db.transaction((tx) => {
//   tx.executeSql(
//     "DROP TABLE IF EXISTS looks;",
//     [],
//     (_, result) => {
//       console.log("La tabla 'looks' ha sido eliminada.");
//     },
//     (_, err) => {
//       console.log("Error al eliminar la tabla 'looks':", err);
//     }
//   );
// });

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS looks (id INTEGER PRIMARY KEY NOT NULL, dayMoment TEXT NOT NULL, weather TEXT NOT NULL, type TEXT NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP);",
        [],
        () => resolve(),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const insertLook = (dayMoment, weather, type) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO looks (dayMoment, weather, type) VALUES (?, ?, ?);",
        [dayMoment, weather, type],
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
