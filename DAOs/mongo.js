const dbConnection = require ("../config/mongoConfig.js");

class Mongo{

    constructor(model){
        this.db = dbConnection();
        this.DAO = model;
    }

    async create(cart){
        return await this.DAO.create(cart)
    }

    async getAll(){
        return await this.DAO.find()
    }

    async getById(id){
        return await this.DAO.findById(id)
    }

    async findOne(email){
        return await this.DAO.findOne({email})
    }

    async save(item){
        const newItem = new this.DAO(item);
        return await newItem.save();
    }

    async updateOne(id, item){
        return await this.DAO.findByIdAndUpdate(id, item)
    }

    async deleteOne(id){
        return await this.DAO.findByIdAndDelete(id)
    }
    
}

module.exports = Mongo;
