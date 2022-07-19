import React from 'react';

const SetList = ({ sets }) => {
  if (!sets.length) {
    return <h3>Getting list of sets...</h3>;
  }

  return (
    <div>
      {sets &&
        sets.map(set => (
          <div key={"set" + set.code} className="card mb-3">
            <p className="card-header">
              {set.name}
            </p>
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