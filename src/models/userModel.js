var cn = require("../config/database");

class userModel {
    constructor(){
        this.tableName = 'users';
    }
    executeQuery(query, params) {
        return new Promise((resolve, reject) => {
            cn.query(query, params, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
 
    async findAll(where = {}, search = {}, limit = 10, start = 0, order_by = "user_id", dir = "ASC") {
        let query = `SELECT * FROM ${this.tableName}`;
        let conditions = [];
        let values = [];

        // 🔹 Tambahkan kondisi WHERE berdasarkan `where`
        if (Object.keys(where).length > 0) {
            Object.entries(where).forEach(([key, value]) => {
                conditions.push(`${key} = ?`);
                values.push(value);
            });
        }

        // 🔹 Tambahkan kondisi SEARCH (pencarian LIKE di beberapa kolom)
        if (Object.keys(search).length > 0) {
            let searchConditions = [];
            Object.entries(search).forEach(([key, value]) => {
                searchConditions.push(`${key} LIKE ?`);
                values.push(`%${value}%`);
            });

            if (searchConditions.length > 0) {
                conditions.push(`(${searchConditions.join(" OR ")})`);
            }
        }

        // 🔹 Gabungkan semua kondisi dalam query
        if (conditions.length > 0) {
            query += ` WHERE ${conditions.join(" AND ")}`;
        }

        // 🔹 ORDER BY
        if (order_by) {
            query += ` ORDER BY ${order_by} ${dir.toUpperCase() === "DESC" ? "DESC" : "ASC"}`;
        }

        // 🔹 LIMIT & OFFSET
        // query += ` LIMIT ? OFFSET ?`;
        // values.push(limit,start);

        query += ` LIMIT ?, ?`;
        values.push(start,limit);

        // 🔥 Debugging Query
        console.log("🟢 Query MySQL:", this.generateRawQuery(query, values));

        return await this.executeQuery(query, values);
    }

    async findById(id) {
        const query = `SELECT * FROM ${this.tableName} WHERE user_id = ?`;
        const results = await this.executeQuery(query, [id]);
        return results[0];
    }

    async create(data) {
        const query = `INSERT INTO ${this.tableName} SET ?`;
        console.log("Executing Query:", query, "With Data:", data);
        const result = await this.executeQuery(query, data);
        console.log("Insert Result:", result);
        return result.insertId;
    }

    async update(id, data) {
        const query = `UPDATE ${this.tableName} SET ? WHERE user_id = ?`;
        const result = await this.executeQuery(query, [data, id]);
        return result.affectedRows;
    }
    
    async delete(id) {
        const query = `DELETE FROM ${this.tableName} WHERE user_id = ?`;
        const result = await this.executeQuery(query, [id]);
        return result.affectedRows;
    }  
    
    async callChatProcedure(params) {
        const query = `SELECT * FROM ${this.tableName} WHERE user_id = 1`;
        // const query = 'CALL sp_chat_return(?,?)';
        const results = await this.executeQuery(query, params);
        return results[0];
    }    

    async findByFlag(flag) {
        const query = `SELECT * FROM ${this.tableName} WHERE user_flag = ?`;
        const results = await this.executeQuery(query, [flag]);
        return results[0];
    }    
    
    // 🔹 Fungsi terpisah untuk menggantikan parameter (?) dengan nilai aktual
    generateRawQuery(query, values) {
        let rawQuery = query;
        values.forEach(value => {
            rawQuery = rawQuery.replace("?", typeof value === "string" ? `'${value}'` : value);
        });
        return rawQuery;
    }
}

module.exports = new userModel();