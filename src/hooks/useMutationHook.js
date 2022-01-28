import { useMutation } from '@apollo/client';

const useMutationHook = (mutationQuery) => {
  return useMutation(mutationQuery);
};

export default useMutationHook;
