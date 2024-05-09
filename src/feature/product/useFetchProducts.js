import { useState, useEffect } from "react";
import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useFetchProducts = ({ onError }) => {
  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // const fetchProducts = async () => {
  //   setIsLoading(true);
  //   try {
  //     const productsResponse = await axiosInstance.get("/products");

  //     if (productsResponse.status === 200) {
  //       setProducts(productsResponse.data);
  //       setIsLoading(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  return useQuery({
    queryFn: async () => {
      const product = await axiosInstance.get("/products");
      return product;
    },
    queryKey: ["fetch.products"],
    throwOnError: onError,
  });
};
