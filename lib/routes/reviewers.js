const { Router } = require('express');
const Reviewer = require('../models/Reviewer');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      name,
      company
    } = req.body;

    Reviewer
      .create({ name, company })
      .then(newReviewer => {
        res.send(newReviewer);
      })
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Reviewer
      .find()
      .select({
        __v: false
      })
      .lean()
      .then(reviewers => {
        res.send(reviewers);
      })
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Reviewer
      .findById(req.params.id)
      .select({
        __v: false
      })
      .lean()
      .then(reviewer => {
        res.send(reviewer);
      })
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    Reviewer
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .select({
        __v: false
      })
      .lean()
      .then(updatedReviewer => {
        res.send(updatedReviewer);
      })
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Reviewer
      .findByIdAndDelete(req.params.id)
      .select({
        __v: false
      })
      .lean()
      .then(deletedReviewer => {
        res.send(deletedReviewer);
      })
      .catch(next);
  });
