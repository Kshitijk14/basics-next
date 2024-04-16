/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("71fckx7f86vfuhu")

  // remove
  collection.schema.removeField("eagzlm1l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jfmquvz5",
    "name": "content",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("71fckx7f86vfuhu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eagzlm1l",
    "name": "content",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("jfmquvz5")

  return dao.saveCollection(collection)
})
