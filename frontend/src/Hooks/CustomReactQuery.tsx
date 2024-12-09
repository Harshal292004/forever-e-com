import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

interface UseQueryState<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

const useCustomReactQuery = <T,>(
  endpoint: string,
  options?: AxiosRequestConfig
) => {
  const [state, setState] = useState<UseQueryState<T>>({
    data: null,
    error: null,
    isLoading: false,
  });

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setState({ data: null, error: null, isLoading: true });

        const response = await axios.get<ApiResponse<T>>(endpoint, {
          ...options,
          signal: controller.signal,
        });

        if (response.data.success) {
          setState({ data: response.data.data, error: null, isLoading: false });
        } else {
          setState({
            data: null,
            error: response.data.message,
            isLoading: false,
          });
        }
      } catch (err) {
        if (axios.isCancel(err)) return;
        setState({
          data: null,
          error: (err as Error).message || "An error occurred",
          isLoading: false,
        });
      }
    })();

    return () => {
      controller.abort();
    };
  }, [endpoint, options]);

  return state;
};

export default useCustomReactQuery;
