import React from 'react';
import './NotFound.scss';
import MainLayout from '../../layouts/MainLayout';

const NotFound = () => {
  return (
    <MainLayout>
      <div className="text-center">
        <div className="error mx-auto" data-text="404">404</div>
        <p className="lead text-gray-800 mb-5">Página no encontrada</p>
        <p className="text-gray-500 mb-0">Parece que encontraste un error en la matrix...</p>
        <a href="index.html">&larr; Volver al inicio</a>
      </div>
    </MainLayout>
  )
}

export default NotFound;
