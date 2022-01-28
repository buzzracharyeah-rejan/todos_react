import { useQuery } from '@apollo/client';
import React from 'react';

const useQueryHook = (Query) => {
  return useQuery(Query);
};

export default useQueryHook;
