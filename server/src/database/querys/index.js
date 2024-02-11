const createTableQuery =`CREATE TABLE IF NOT EXISTS posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000),
descripcion VARCHAR(255), likes INT);`;

const getData =`SELECT * FROM posts;`;

const postDataQuery =`
INSERT INTO posts (titulo, img, descripcion, likes)
VALUES ($1, $2, $3, $4) RETURNING *`;
module.exports = {
    createTableQuery, getData, postDataQuery
}

