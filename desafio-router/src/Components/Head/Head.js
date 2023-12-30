import React from 'react';

const Head = props => {
  React.useEffect(() => {
    document.title = 'Ranek | ' + props.title;
  }, [props]);

  return null;
};

export default Head;
