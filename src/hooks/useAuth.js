import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}
export default useAuth;