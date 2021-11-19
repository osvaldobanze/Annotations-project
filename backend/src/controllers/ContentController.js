const Annotartion = require('../models/AnnotationData')
const { update } = require('./PriorityController')

module.exports = {
  async update(request, response) {
    const { id } = request.params
    const { notes } = request.body
    const annotation = await Annotartion.findOne({ _id: id })

    if (notes) {
      annotation.notes = notes
      await annotation.save()
    }
    return response.json(annotation)
  },
}
