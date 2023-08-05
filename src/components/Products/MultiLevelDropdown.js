// MultiLevelDropdown.js
'use client';

import { Sidebar } from 'flowbite-react';

export default function MultiLevelDropdown({ children }) {
  return (
    <Sidebar aria-label="Sidebar with filter options">
      {children}
    </Sidebar>
  );
}

