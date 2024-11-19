import React from 'react';

    function Loading() {
      return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h3 className="text-xl font-bold text-primary-color">Loading...</h3>
          <p className="text-base text-secondary-color mt-4">Please wait while we load the page.</p>
        </div>
      );
    }

    export default Loading;
