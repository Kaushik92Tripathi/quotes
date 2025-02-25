// File: src/components/Loader.js
import { useLoading } from '../contexts/LoadingContext';


export default function Loader() {
  const { isLoading } = useLoading();
  
  if (!isLoading) return null;
  
  return (
    <div className="loader">
      <div className="loader-spinner"></div>
    </div>
  );
}