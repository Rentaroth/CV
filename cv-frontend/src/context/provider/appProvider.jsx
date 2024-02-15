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

  function organize(state, section) {
    if(state) {
      if(section !== 0) {
        const result = state[section];
        const res = Object.values(result)[0];
        return res;
      }
      const result = state[section];
      const res = Object.values(result)[0][0];
      return res;
    }
  }

  useEffect(() => {
    const fetchedData = URLS.map(async (element) => {
      const result = await fetch(element);
      const res = await result.json();
      return res;
    })
    Promise.all(fetchedData)
    .then(result => {
      const organizedData = {
        name: organize(result, 0).name,
        lastName: organize(result, 0).last_name,
        phone: organize(result, 0).phone,
        email: organize(result, 0).email,
        github: organize(result, 0).github,
        country: organize(result, 0).country,
        province: organize(result, 0).province,
        skills: Array.from(organize(result, 3)),
        softSkills: Array.from(organize(result, 4)),
        education: Array.from(organize(result, 2)),
        workExp: Array.from(organize(result, 1)),
        languages: Array.from(organize(result, 5)),
      };
      let tempData = {...organizedData};
      tempData.education.forEach(element => {
        element.description = element.description.split('\r- ')
      });
      tempData.workExp.forEach(element => {
        element.description = element.description.split('\r- ')
      });
      setData(tempData);
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