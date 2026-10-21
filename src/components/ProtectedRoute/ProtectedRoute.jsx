import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuthenticatedUser } from "../../services/authService.js";


function ProtectedRoute() { 

const [loading, setLoading] = useState(true);
const [authenticated, setAuthenticated] = useState(false);
const [error, setError] = useState (null);
const [retry, setRetry] = useState(0);
const location = useLocation();


useEffect(() => {
  
  let active = true;

    async function checkAuth() {

      try{
        const user = await getAuthenticatedUser();

       if (active) {
          setAuthenticated(Boolean(user));
       }

      } catch (error) {

          console.error("Erro ao verificar autenticação:", error.message);
          
          if (active) {
            if 
            (
              error.status === 401 || error.status === 403) {
                setAuthenticated(false);
            } else{
              setError("não foi possivel verificar sua sessão.");
            }

          }
      
        } 
        
        finally {
          if (active){

            setLoading(false);
          }
      }
       
    }
        
    
    
    setError(null);
    setLoading(true);
    
    checkAuth();


    return () => {
        active = false;
      };

  }, [retry]);

   if (loading) {
    return <div>Verificando autenticação...</div>
   }

   if (error) {
    return (<div role="alert">
              <p>{error}</p>
              <button onClick={() => setRetry((value) => value + 1)}>
                tentar novamente
              </button>
            </div>

        );
      }

  

   if (!authenticated) {
    return (
        <Navigate
            to="/login"
            state={{ from: location }}
            replace
        />
    );
}

   return <Outlet />;

}

export default ProtectedRoute;