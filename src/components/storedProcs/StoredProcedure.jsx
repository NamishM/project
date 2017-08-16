import React from 'react';
import {
  Link
} from 'react-router-dom';
import DbEntity from '../DbEntity';

const Columns = () => (
  <tr>
    <th className="c1">Param Name</th>
    <th className="c2">Data Type</th>
    <th className="c3">Output?</th>
    <th className="c4">ReadOnly?</th>
    <th className="c5">DefValue</th>
    <th className="c7">Description</th>
  </tr>
);

const Row = ({entity, instance, schemaName, name}) => (
  <tr>
    <td data-title="Param Name">
      <Link to={`/${instance}/${schemaName}/${name}/${entity.name}`}>
        {entity.name}
      </Link>
    </td>
    <td data-title="Data Type">{entity.dataType}</td>
    <td data-title="Output?">{entity.output}</td>
    <td data-title="ReadOnly?">{entity.readOnly}</td>
    <td data-title="DefValue">{entity.defVaule}</td>
    <td data-title="Description">{entity.desc}</td>
  </tr>
);

const StoredProcedure = ({entity, schemaName, instance}) => (
  <DbEntity
    entity={entity}
    schemaName={schemaName}
    instance={instance}
    Columns={Columns}
    Row={Row}
  />
);

export default StoredProcedure;