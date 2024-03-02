import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/slices/dataSlice";
import { Loading } from "../";

function Schema1() {
  const dispatch = useDispatch();
  let info = useSelector(state => state.data.data);
  const [filledSkills, setFilledSkills] = useState('');
  const [filledSoftSkills, setFilledSoftSkills] = useState('');
  const [education, setEducation] = useState('');
  const [workExp, setWorkExp] = useState('');
  const [languages, setLanguages] = useState('');

  function redirectTo(url) {
    window.location.href = `https://${url}`;
  }

  useEffect(() => {
    async function load() {
      dispatch(fetchData());
    }
    load()
  }, [])

  useEffect(() => {
    if(Array.isArray(info.skills)) {
      let tempSkills = [];
      let percentage = 0;
      info.skills.map(element => {
        percentage = element.description*10;
        tempSkills.push(
            (<div key ={element._id} className=" w-full flex items-center justify-evenly pr-2 py-1">
              <h3 className=" max-sm:w-[40vw] sm:w-[20vw] lg:w-[40%] text-sm lg:text-lg text-start">{element.name}</h3>
              <div className=" w-[70%] lg:w-[50%] xl:w-[40%] flex relative">
                <div className={` w-[${percentage}%] h-[1.2vh] lg:h-[1.5vh] lg:w-[${percentage}%] bg-header -skew-x-[40deg] origin-top-right rounded-tr-md border-none z-20`}></div>
                <div className={` absolute w-full h-[1.2vh] lg:h-[1.5vh] lg:w-full bg-light -skew-x-[40deg] origin-top-right rounded-tr-md border-none z-10`}></div>
              </div>
            </div>)
          );
        })
      setFilledSkills(tempSkills);
    }

    if(Array.isArray(info.softSkills)) {
      let tempSoftSkills = [];
      let percentage = 0;
      info.softSkills.map(element => {
        percentage = element.description*10;
        tempSoftSkills.push(
            (<div key ={element._id} className=" w-full flex items-center justify-evenly pr-2 py-1">
              <h3 className=" max-sm:w-[40vw] sm:w-[20vw] lg:w-[40%] text-sm lg:text-lg text-start">{element.name}</h3>
              <div className=" w-[70%] lg:w-[50%] xl:w-[40%] flex relative">
                <div className={` w-[${percentage}%] h-[1.2vh] lg:h-[1.5vh] lg:w-[${percentage}%] bg-header -skew-x-[40deg] origin-top-right rounded-tr-md border-none z-20`}></div>
                <div className={` absolute w-full h-[1.2vh] lg:h-[1.5vh] lg:w-full bg-light -skew-x-[40deg] origin-top-right rounded-tr-md border-none z-10`}></div>
              </div>
            </div>)
          );
        })
      setFilledSoftSkills(tempSoftSkills);
    }

    if(Array.isArray(info.education)) {
      let tempEducation = [];
      info.education.map(element => {
        const initialYear = new Date(element.from).getFullYear();
        const finalYear = new Date(element.to).getFullYear();
        tempEducation.push(
            (<div key={element._id} className=" w-[80%] h-fit m-2 px-4 my-5">
              <h3 className=" text-[8px] md:text-[12px] lg:text-md xl:text-xl font-bold">{initialYear == finalYear ? initialYear : (`${initialYear} - ${finalYear}`)}</h3>
              <h2 className=" text-[12px] md:text-[16px] lg:text-xl xl:text-2xl font-bold">{element.title}</h2>
              <p className=" text-[8px] md:text-[12px] lg:text-[14px] xl:text-lg">{element.institute}</p>
              {element.description.map(subelement => <p key={element.description.indexOf(subelement)} className=" text-[8px] md:text-[12px] lg:text-[14px] xl:text-lg">- {subelement}</p>)}
            </div>)
          );
        })
      setEducation(tempEducation);
    }

    if(Array.isArray(info.workExp)) {
      let tempWorkExp = [];
      info.workExp.map(element => {
        tempWorkExp.push(
            (<div key={element._id} className=" w-[80%] h-fit m-2 px-4">
              <h3 className=" text-[8px] md:text-[12px] lg:text-md xl:text-xl font-bold">{element.serviceTime.toUpperCase()}</h3>
              <h2 className=" text-[12px] md:text-[16px] lg:text-xl xl:text-2xl font-bold">{element.position}</h2>
              <p className=" text-[8px] md:text-[12px] lg:text-[14px] xl:text-lg font-bold">{element.company.toUpperCase()}</p>
              {element.description.map(subelement => <p key={element.description.indexOf(subelement)} className=" text-[8px] md:text-[12px] lg:text-[14px] xl:text-lg">- {subelement}</p>)}
            </div>)
          );
        })
      setWorkExp(tempWorkExp);
    }

    if(Array.isArray(info.languages)) {
      let tempLanguages = [];
      info.languages.map(element => {
        let percentage = 0;
        if(element.level === 'B2') {
          percentage = 70;
        } else if(element.level === 'C1') {
          percentage = 85;
        } else if (element.level === 'C2') {
          percentage = 100;
        }
        tempLanguages.push(
            (<div key={element._id} className={` relative max-sm:w-[30vw] max-sm:h-[30vw] sm:w-[15vw] sm:h-[15vw] flex items-center justify-center duration-300`}>
              <div className=" w-full h-full rounded-[100%] flex overflow-hidden">
                <div className={`  bg-header w-[${percentage}%] h-full`}></div>
              </div>
              <div className=" absolute max-sm:w-[25vw] max-sm:h-[25vw] sm:w-[12vw] sm:h-[12vw] rounded-[100%] bg-light text-sm grid place-content-center">
                <h3 className=" text-sm lg:text-lg xl:text-xl">{element.name} {element.level}</h3>
              </div>
            </div>)
          );
        })
      setLanguages(tempLanguages);
    }
  }, [info])
  return(!(info === 'Loading') ? (<>
      <div className=" h-[100vh] w-full bg-header overflow-y-auto">
        <section className=" max-sm:h-[20vh] max-sm:mb-2 sm:h-[35vh] md:h-fit w-[100%] xl:h-fit px-[1vw] mt-[2%] bg-header flex justify-center items-center z-0" id="header">
          <div className=" w-[40%] xl:w-[34%] h-full z-30">
            <div className=" w-full h-full max-md:h-[90%] max-md:mt-5 max-md:px-2 md:px-4 lg:px-6 relative flex items-center justify-center z-10">
              <div className=" polygon-border"></div>
              <img className=" polygon object-cover" src="https://i.postimg.cc/jSMMXp3V/FotoCV.jpg" alt="profile_photo" />
            </div>
          </div>
          <div className=" w-[60%] xl:w-[66%] h-full flex justify-center items-center">
            <div className=" relative max-sm:w-fit max-sm:h-[15vh] sm:h-[20vh] sm:w-[50vw] max-sm:mt-[5vh] flex justify-center items-center p-3 border-0.5vw border-border font-semibold font-primary">
              <h1 className=" max-sm:text-[1.5vh] sm:text-2xl lg:text-4xl xl:text-5xl"><span className=" text-light">{info.name?.toUpperCase()}</span>&emsp;&emsp;<span className=" text-border">{info.lastName?.toUpperCase()}</span></h1>
              <p className=" max-sm:h-[5vh] max-sm:w-[45vw] sm:h-[7vh] sm:w-[45vw] lg:text-lg lg:px-5 lg:py-5 text-center absolute bottom-[-0.8rem] lg:bottom-[-2.5vh] sm:px-20 max-sm:text-[8px] bg-header text-light font-medium">WEB DEVELOPER & DATA ENGINEER JUNIOR</p>
            </div>
          </div>
        </section>
        <div className="h-fit w-[100%] max-sm:px-[2vw] sm:flex bg-header z-10">
          <section className=" max-sm:w-full max-sm:h-full sm:w-[40%] sm:ml-4 sm:z-10 flex lg:w-[70%] xl:w-[50%] flex-col bg-border" id="left">
            <div className=" max-sm:w-[40%] max-sm:h-[5.5vh] sm:w-full sm:h-[12vh] md:h-[13vw] pb-[1.5vh] md:pr-3 lg:h-[13vw] bg-border flex">
              <div className=" w-[50%] h-[80%] bg-gradient-to-tr from-border from-50% to-header to-0%"></div>
              <div className=" w-[50%] h-[80%] bg-gradient-to-tl from-border from-50% to-header to-0%"></div>
            </div>
            <div className=" bg-header w-[90%] h-[5vh] lg:h-[6.5vh] mt-5 px-5 text-md text-right text-light font-primary font-light rounded-tr-md -skew-x-[20deg] origin-top-right flex items-center justify-start">
              <h2 className=" skew-x-[20deg] text-lg font-normal md:text-xl lg:ml-[3vw] xl:text-2xl">CONTACT ME</h2>
            </div>
            <div className=" flex flex-col my-4 gap-2 xl:gap-4">
              <div className=" w-full flex gap-1">
                <div className=" max-sm:w-[15vw] max-sm:h-[3vh] sm:w-[8vw] lg:w-[10vw] lg:h-[5vh] sm:h-[4vh] xl:h-[6vh] pr-2 lg:pr-4 flex items-center justify-end bg-header -skew-x-[20deg] origin-top-right rounded-tr-md"><img className=" skew-x-[20deg] max-sm:w-[12px] sm:w-[20px] lg:w-[30px] xl:w-[40px]" src="https://i.postimg.cc/rFFWJKBm/PHONE-ICON.png" alt="phone_icon" /></div>
                <div className=" w-full pl-4 text-[8px] md:text-[16px] lg:text-xl flex items-center justify-start">
                  <p className=" text-start rounded-md px-2">{info.phone}</p>
                </div>
              </div>
              <div className=" w-full flex gap-1">
              <div className=" max-sm:w-[15vw] max-sm:h-[3vh] sm:w-[8vw] lg:w-[10vw] lg:h-[5vh] sm:h-[4vh] xl:h-[6vh] pr-2 lg:pr-4 flex items-center justify-end bg-header -skew-x-[20deg] origin-top-right rounded-tr-md"><img className=" skew-x-[20deg] max-sm:w-[12px] sm:w-[20px] lg:w-[30px] xl:w-[40px]" src="https://i.postimg.cc/bJckHLPc/mail-icon.png" alt="phone_icon" /></div>
                <div className=" w-full pl-4 text-[8px] md:text-[16px] lg:text-xl flex items-center justify-start">
                  <p className=" text-start rounded-md px-2">{info.email}</p>
                </div>
              </div>
              <div className=" w-full flex gap-1">
              <div className=" max-sm:w-[15vw] max-sm:h-[3vh] sm:w-[8vw] lg:w-[10vw] lg:h-[5vh] sm:h-[4vh] xl:h-[6vh] pr-2 lg:pr-4 flex items-center justify-end bg-header -skew-x-[20deg] origin-top-right rounded-tr-md"><img className=" skew-x-[20deg] max-sm:w-[12px] sm:w-[20px] lg:w-[30px] xl:w-[40px]" src="https://i.postimg.cc/43CmrdSp/repo-icon.png" alt="phone_icon" /></div>
                <div className=" w-full pl-4 text-[8px] md:text-[16px] lg:text-xl flex items-center justify-start">
                  <p className=" text-start rounded-md px-2"><span className=" cursor-pointer" onClick={() => {redirectTo(info.github)}}>{info.github}</span></p>
                </div>
              </div>
              <div className=" w-full flex gap-1">
              <div className=" max-sm:w-[15vw] max-sm:h-[3vh] sm:w-[8vw] lg:w-[10vw] lg:h-[5vh] sm:h-[4vh] xl:h-[6vh] pr-2 lg:pr-4 flex items-center justify-end bg-header -skew-x-[20deg] origin-top-right rounded-tr-md"><img className=" skew-x-[20deg] max-sm:w-[12px] sm:w-[20px] lg:w-[30px] xl:w-[40px]" src="https://i.postimg.cc/PrRLQKb3/place-icon.png" alt="phone_icon" /></div>
                <div className=" w-full pl-4 text-[8px] md:text-[16px] lg:text-xl flex items-center justify-start">
                  <p className=" text-start rounded-md px-2">{info.province}, {info.country}</p>
                </div>
              </div>
              <div className=" ">
                <div className=" bg-header w-[90%] h-[5vh] lg:h-[6.5vh] my-5 px-5 text-md text-right text-light font-primary font-light rounded-tr-md -skew-x-[20deg] origin-top-right flex items-center justify-start">
                  <h2 className=" skew-x-[20deg] text-lg md:text-xl font-normal lg:ml-[3vw] xl:text-2xl">SKILLS</h2>
                </div>
                <div className=" pl-2">
                  {filledSkills}
                </div>
              </div>
              <div className=" ">
                <div className=" bg-header w-[90%] h-[5vh] lg:h-[6.5vh] my-5 px-5 text-md text-right text-light font-primary font-light rounded-tr-md -skew-x-[20deg] origin-top-right flex items-center justify-start">
                  <h2 className=" skew-x-[20deg] text-lg md:text-xl font-normal lg:ml-[3vw] xl:text-2xl">SOFT SKILLS</h2>
                </div>
                <div className=" pl-2">
                  {filledSoftSkills}
                </div>
              </div>
            </div>
          </section>
          <section className=" w-full h-auto bg-light" id="right">
            <div className=" pt-5">
              <div className=" bg-header w-[90%] h-[5vh] lg:h-[6.5vh] mt-5 px-5 text-md text-right text-light font-primary font-light rounded-tr-md -skew-x-[20deg] origin-top-right flex items-center justify-start">
                <h2 className=" skew-x-[20deg] text-lg md:text-xl font-normal lg:ml-[3vw] xl:text-2xl">WORK EXPERIENCE</h2>
              </div>
              <div className=" w-full h-fit bg-light my-4 flex flex-col">
                {workExp}
              </div>
            </div>
            <div className=" pt-5">
              <div className=" bg-header w-[90%] h-[5vh] lg:h-[6.5vh] mt-5 px-5 text-md text-right text-light font-primary font-light rounded-tr-md -skew-x-[20deg] origin-top-right flex items-center justify-start">
                <h2 className=" skew-x-[20deg] text-lg md:text-xl font-normal lg:ml-[3vw] xl:text-2xl">EDUCATION</h2>
              </div>
            </div>
            <div className=" w-full h-fit bg-light my-4 flex flex-col">
              {education}
            </div>
            
            {/* <div className=" pt-5">
              <div className=" bg-header w-[90%] h-[5vh] lg:h-[6.5vh] mt-5 px-5 text-md text-right text-light font-primary font-light rounded-tr-md -skew-x-[20deg] origin-top-right flex items-center justify-start">
                <h2 className=" skew-x-[20deg] text-lg md:text-xl font-normal lg:ml-[3vw] xl:text-2xl">AWARDS</h2>
              </div>
              <div className=" w-full h-fit bg-light my-4 flex flex-col">
                <div className=" w-[80%] h-fit m-2 px-4">
                  <h3 className=" text-[8px] md:text-[12px] lg:text-md xl:text-lg font-bold">2010-2015</h3>
                  <h2 className=" text-[12px] md:text-[16px] lg:text-xl xl:text-2xl font-bold">TITLE OF THE EDUCATION CONTENT</h2>
                  <p className=" text-[8px] md:text-[12px] lg:text-[14px] xl:text-lg">Sit amet minim qui nisi eiusmod laboris occaecat proident incididunt esse. Enim fugiat quis sit Lorem excepteur exercitation incididunt officia dolore pariatur officia quis ullamco culpa.</p>
                </div>
              </div>
            </div> */}
            <div className=" w-full h-fit bg-light my-4 flex flex-col">
              <div className=" bg-header w-[90%] lg:h-[6.5vh] h-[5vh] mt-5 p lg:text-xlx-5 text-md text-right text-light font-primary font-light rounded-tr-md -skew-x-[20deg] origin-top-right flex items-center justify-start">
                <h2 className=" skew-x-[20deg] text-lg font-normal lg:ml-[3vw] xl:text-2xl">LANGUAGES</h2>
              </div>
              <div className=" w-full h-fit p-4 bg-light flex justify-stretch gap-4">
                {languages}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>) : <Loading />
  );
}

export { Schema1 }