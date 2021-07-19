// Determine if a value is a JSON-schema version of a Scalar

// These are the GraphQL default scalars that map to JSON Schema types
const typesMapping = {
  Boolean: 'boolean',
  String: 'string',
  Int: 'number',
  Float: 'number',
  ID: 'string',
}

module.exports = (value) => {
  // "String": {
  //   "type": "string",
  //   "title": "String",
  //   "description": "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."
  // },
  // "Boolean": {
  //   "type": "boolean",
  //   "title": "Boolean",
  //   "description": "The `Boolean` scalar type represents `true` or `false`."
  // },
  // "DateTime": {
  //   "description": "A custom scalar will look like this.",
  //   "type": "object",
  //   "title": "DateTime",
  // },
  return value && value.title && (
    (typesMapping[value.title] && typesMapping[value.title] === value.type)
    ||
    (value.type === 'object')
  )
}
