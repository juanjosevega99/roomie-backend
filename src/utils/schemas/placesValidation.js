const joi = require('@hapi/joi')

const idSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/)

const createPlaceSchema = {
  mainImage: joi.string().required(),
  name: joi.string().required(),
  location: joi.string().required(),
  price: joi.string().required(),
  furniture: joi.string().required(),
  wifi: joi.string(),
  bath: joi.string(),
  parking: joi.string(),
  tv: joi.string(),
  cleaning: joi.string(),
  closet: joi.string(),
  size: joi.string().required(),
  description: joi.string().required(),
  images: joi.array().required(),
  profileId: idSchema.required()
}

const updatePlaceSchema = {
  name: joi.string(),
  location: joi.string(),
  price: joi.string(),
  furniture: joi.string(),
  size: joi.string(),
  description: joi.string().min(100)
}

module.exports = {
  createPlaceSchema,
  updatePlaceSchema,
  idSchema
}
