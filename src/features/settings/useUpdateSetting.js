import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSetttingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export default function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSetttingApi,

    onSuccess: () => {
      toast.success("Setting successfully edited");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSetting };
}
