import { useEffect, useState } from "react";
import { context } from "..";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const URL = {
  user: baseURL + 'user',
  experience: baseURL + 'experience',
  education: baseURL + 'education',
  skills: baseURL + 'skills',
  softSkills: baseURL + 'softSkills',
  languages: baseURL + 'languages',
};
const URLS = Object.values(URL);

function AppProvider({ children }) {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchedData = URLS.map(async (element) => {
      const result = await fetch(element);
      const res = await result.json();
      return res;
    })
    Promise.all(fetchedData)
    .then(result => {
      setData(result);
    })
  }, [])

  return (
    <context.Provider value={{
      data,
    }}>
      {children}
    </context.Provider>
  );
}

export { AppProvider };