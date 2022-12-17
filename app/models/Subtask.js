export const Subtask = {
    name: 'Subtask',
    embedded: true,
    properties: {
      description: 'string',
      isComplete: {type: 'bool', default: false}
    }
}