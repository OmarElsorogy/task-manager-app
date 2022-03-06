const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      trim: true,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // the same as in User model file => mongoose.model('User', userSchema)
    },
  },
  { timestamps: true }
)

const Task = mongoose.model('Task', taskSchema)

taskSchema.pre('save', async function (next) {
  const user = this

  console.log('asdsad')

  next()
})

module.exports = Task
