import React from 'react';

import { Link } from 'react-router-dom';

const SetList = ({ sets }) => {
  if (!sets.length) {
    return <h3>Getting list of sets...</h3>;
  }

  return (
    <div>
      {sets &&
        sets.map(set => (
          <div key={"set" + set.code} className="card mb-3">
            <Link to="/draft">
              <p className="card-header">
                {set.name}
              </p>
            </Link>
            <div className="card-body">
              <p>{set.code}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default SetList;