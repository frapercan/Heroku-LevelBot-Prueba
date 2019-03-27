
// External Dependancies
const mongoose = require('mongoose')

// Get Data Models
const Empresa = require('../models/Empresa')

// Get all empresas
exports.getEmpresas = async (req, reply) =>
{
    try {
        const empresas = await Empresa.find({},'id name homepage_url')
        reply.send(empresas)
        
  } catch (err) {
        reply.send(err)
  }
}

// Get single empresa by ID
exports.getSingleEmpresa = async (req, reply) => {
    try {
        const id = req.params.id
        console.log(id)
        const empresa = await Empresa.findById(mongoose.Types.ObjectId(id))
        reply.send(empresa)
  } catch (err) {
       reply.send(err)
  }
}

// Get single empresa products by ID
exports.getSingleEmpresaProducts = async (req, reply) => {
    try {
        const id = req.params.id
        const empresa = await Empresa.findById(mongoose.Types.ObjectId(id), 'products.name')
        reply.send(empresa)
    } catch (err) {
        return reply.send(err)
    }
}

// Get single empresa members by ID
exports.getSingleEmpresaMembers = async (req, reply) => {
    try {
        const id = req.params.id
        const empresa = await Empresa.findById(mongoose.Types.ObjectId(id),
            'relationships.is_past relationships.person.first_name relationships.person.last_name relationships.title')
        console.log(empresa.relationships)
        empresa.relationships = empresa.relationships.filter(relationship => !relationship.is_past)
        reply.send(empresa)
    } catch (err) {
        return reply.send(err)
    }
}

// Add a new empresa
exports.addEmpresa = async (req, reply) => {
  try {
    const empresa = new Empresa(req.body)
    reply.send(empresa.save())
  } catch (err) {
        return reply.send(err)
  }
}

// Add a new product to empresa
exports.addEmpresaProduct = async (req, reply) => {
    try {
        const id = req.params.id
        console.log(id)
        const empresa = await Empresa.findById(mongoose.Types.ObjectId(id))
        empresa.products = req.body;
        reply.send(empresa.save())
    } catch (err) {
        return reply.send(err)
    }
}

// Update an existing empresa
exports.updateEmpresa = async (req, reply) => {
  try {
    const id = req.params.id
    const empresa = req.body
    const { ...updateData } = empresa
    const update = await Empresa.findByIdAndUpdate(id, updateData, { new: true })
    reply.send(update)
  } catch (err) {
    return reply.send(err)
  }
}

// Delete a empresa
exports.deleteEmpresa = async (req, reply) => {
  try {
    const id = req.params.id
    const empresa = await Empresa.findByIdAndRemove(id)
    reply.send(empresa)
  } catch (err) {
    return reply.send(err)
  }
}