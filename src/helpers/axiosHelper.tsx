import axios from "axios";
import { toast } from "react-toastify"; 

const handleAxiosError = (error:unknown): void => {
    if (axios.isAxiosError(error)) {
        if (error.response && error.response.data && error.response.data.error) {
            toast.error(error.response.data.error);
        }else{
            toast.error("NetWord error")
        }
    }else{
        toast.error("Đã xảy ra lỗi không được xác định. Hãy thử lại sau");
    }
};

export { handleAxiosError };