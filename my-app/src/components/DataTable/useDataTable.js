// src/hooks/useDataTable.js
import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchData, createData, updateData, deleteData } from "../utils/api";

export const useDataTable = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery("users", fetchData);
  const createMutation = useMutation(createData, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
  const updateMutation = useMutation(updateData, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
  const deleteMutation = useMutation(deleteData, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const handleCreate = (newData) => {
    createMutation.mutate(newData);
  };

  const handleUpdate = (updatedData) => {
    updateMutation.mutate(updatedData);
  };

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  return { data, isLoading, error, handleCreate, handleUpdate, handleDelete };
};
