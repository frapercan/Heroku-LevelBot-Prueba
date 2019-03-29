const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const empresaController = require('../../controllers/empresaController')

/**
 * @swagger
 * /companies:
 *   get:
 *     description: Returns a list of all companies
 *     tags:
 *       - company
 */
router.get(
  '/companies',auth.required,
  empresaController.getEmpresas
);

/**
 * @swagger
 * /company/:id:
 *   get:
 *     description: Returns a company
 *     tags:
 *       - company
 */
router.get(
  '/company/:id', auth.required,
  empresaController.getSingleEmpresa
);

/**
 * @swagger
 * /company/:id/products:
 *   get:
 *     description: Returns  company's product
 *     tags:
 *       - company
 */
router.get(
  '/company/:id/products', auth.required,
  empresaController.getSingleEmpresaProducts
);

/**
 * @swagger
 * /company/:id/members:
 *   get:
 *     description: Returns  company's members
 *     tags:
 *       - company
 */
router.get(
  '/company/:id/members', auth.required,
  empresaController.getSingleEmpresaMembers
);

/**
 * @swagger
 * /company/:
 *   post:
 *     description: creates a company
 *     tags:
 *       - company
 */
router.post(
  '/company/', auth.required,
  empresaController.addEmpresa
);

/**
 * @swagger
 * /company/:id/producto:
 *   post:
 *     description: create product for a company
 *     tags:
 *       - company
 */
router.post(
  '/company/:id/products', auth.required,
  empresaController.addEmpresaProduct
);

/**
 * @swagger
 * /company/:id/:
 *   put:
 *     description: update a company
 *     tags:
 *       - company
 */
router.put(
  '/company/:id', auth.required,
  empresaController.updateEmpresa
);

/**
 * @swagger
 * /company/:id/:
 *   delete:
 *     description: delete a company
 *     tags:
 *       - company
 */
router.delete(
  '/company/:id', auth.required,
  empresaController.deleteEmpresa
);



module.exports = router;
