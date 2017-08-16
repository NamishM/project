export const procSchema = {
  id: 'Schema',
  properties: [['Schema', 'name'], ['SchemaDesc', 'desc']],
  child: {
    id: 'ProcName',
    properties: [['ProcName', 'name'], ['ProcDesc', 'desc']],
    child: {
      id: 'ParamName',
      properties: [
        ['ParamName', 'name'],
        ['ParamDesc', 'desc'],
        ['DefValue', 'defValue'],
        ['DataType', 'dataType'],
        ['Output', 'output'],
        ['ParameterMaxBytes', 'maxBytes'],
        ['ReadOnly', 'readOnly'],
      ],
    }
  }
}

export const triggerSchema = {
  id: 'Schema',
  properties: [['Schema', 'name'], ['SchemaDesc', 'desc']],
  child: {
    id: 'TriggerName',
    properties: [['TriggerName', 'name'], ['TriggerDesc', 'desc']],
    child: {
      id: 'TableName',
      properties: [
        ['TableName', 'name'],
        ['Description', 'desc'],
        ['isupdate', 'isUpdate'],
        ['isdelete', 'isDelete'],
        ['isafter', 'isAfter'],
        ['isinsert', 'isInsert'],
        ['isinsteadof', 'isInsteadOf'],
        ['disabled', 'isDisabled'],
      ],
    }
  }
}

export const tableSchema = {
  id: 'Schema',
  properties: [['Schema', 'name'], ['SchemaDesc', 'desc']],
  child: {
    id: 'Table',
    properties: [['Table', 'name'], ['TableDesc', 'desc']],
    child: {
      id: 'Attribute',
      properties: [
        ['Attribute', 'name'],
        ['Description', 'desc'],
        ['DataType', 'dataType'],
        ['AllowNulls', 'allowNulls'],
        ['PKey', 'pKey'],
        ['FKey', 'fKey'],
        ['RefTable', 'refTable'],
      ],
    }
  }
}

export const functionSchema = {
  id: 'Schema',
  properties: [['Schema', 'name'], ['SchemaDesc', 'desc']],
  child: {
    id: 'ObjectName',
    properties: [['ObjectName', 'name'], ['FuncDesc', 'desc']],
    child: {
      id: 'ParameterName',
      properties: [
        ['ParameterName', 'name'],
        ['ParamDesc', 'desc'],
        ['DefValue', 'defValue'],
        ['ReadOnly', 'readOnly'],
        ['Output', 'output'],
        ['ParameterMaxBytes', 'maxBytes'],
        ['ParameterDataType', 'dataType'],
      ],
    }
  }
}

export const viewSchema = {
  id: 'Schema',
  properties: [['Schema', 'name'], ['SchemaDesc', 'desc']],
  child: {
    id: 'Table',
    properties: [['Table', 'name'], ['TableDesc', 'desc']],
    child: {
      id: 'Attribute',
      properties: [
        ['Attribute', 'name'],
        ['Description', 'desc'],
        ['DataType', 'dataType'],
        ['AllowNulls', 'allowNulls'],
      ],
    }
  }
}

export const tableTypeSchema = {
  id: 'Schema',
  properties: [['Schema', 'name'], ['SchemaDesc', 'desc']],
  child: {
    id: 'Table',
    properties: [['Table', 'name'], ['TableDesc', 'desc']],
    child: {
      id: 'Attribute',
      properties: [
        ['Attribute', 'name'],
        ['Description', 'desc'],
        ['DataType', 'dataType'],
        ['AllowNulls', 'allowNulls'],
      ],
    }
  }
}


const processEntity = (output, definition, row) => {
  const id = row[definition.id];
  if(id === null){
    return;
  }
  let entity = output.entities[id];
  if(!entity) {
    entity = {
      ids: [],
      entities: {},
    };
    output.ids.push(id);
    output.entities[id] = entity;
    definition.properties.reduce((prev, next) => {
      prev[next[1]] = row[next[0]];
      return prev;
    }, entity)
  }
  if(definition.child) {
    processEntity(entity, definition.child, row);
  }
}


export const normalize = (schema, collection) => {
  var top = {
    ids: [],
    entities: {},
  };

  for(let i = 0, len = collection.length; i < len; i++){
    processEntity(top, schema, collection[i]);
  }
  return top;
};

