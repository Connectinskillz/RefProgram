import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import 'c:/Users/split computers/Documents/RidwanProject/RefProgram/node_modules/react-toastify/dist/ReactToastify.css'

export const notify = (text)=>{
    toast.success(text)
}

export const notifyError = (text)=>{
    toast.error(text)
}
