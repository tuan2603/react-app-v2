import React from 'react';
const EmptyLayout = ({ children, ...restProps }) => (
        <main className="sufee-login d-flex align-content-center flex-wrap"
              {...restProps}
        >
            {children}

    </main>
);

export default EmptyLayout;
