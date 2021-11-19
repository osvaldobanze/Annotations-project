const Annotations = require('../models/AnnotationData')

module.exports = {
  async read(request, response) {
    const priority = request.query
    const priorityNotes = await Annotations.find(priority)

    return response.json(priorityNotes)
  },

  async update(request, response) {
    const { id } = request.params

    const annotaion = await Annotations.findOne({ _id: id })

    if (annotaion.priority) {
      annotaion.priority = false
    } else {
      annotaion.priority = true
    }

    await annotaion.save()

    return response.json(annotaion)
  },
}
