import React from 'react';

const Error = ({mensaje}) => {
    return (  
        <div className="alert alert-primary" role="alert">
  {mensaje}
</div>
    );
}
 
export default Error;