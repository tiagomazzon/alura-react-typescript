import { Navigate, useParams } from 'react-router-dom';

export default function Admin() {
  const params = useParams();
  
  if (params.user !== 'banana') {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h1>Área restrita!</h1>
    </>
  );
}