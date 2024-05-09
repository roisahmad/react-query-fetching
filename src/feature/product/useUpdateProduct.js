import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useUpdateProduct = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (body) => {
      const product = await axiosInstance.patch(`/products/${body.id}`, body);
      return product;
    },
    onSuccess,
  });
};
