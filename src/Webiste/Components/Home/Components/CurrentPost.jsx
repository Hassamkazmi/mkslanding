import React,{useEffect} from 'react';
import '../../CSS/HomeCSS/blogs.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRace, STATUSES } from "../../../redux/getReducer/getRaceCard";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import Calendar1 from "./Calendar";
import { BsCalendarDate } from "react-icons/bs";
import flag from "../../../assets/United Arab Emirates.png";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import calenderimg from '../../../assets/Calendar 15 (Traced).png'

const Match = () => {
  const dispatch = useDispatch();
  const { data: racecard, status } = useSelector((state) => state.racecard);

  useEffect(() => {
    dispatch(fetchRace());
  },[])

  // let abc = 'live'
  // const {MyRace} = racecard.find(race => race.RaceStatus  === abc)

  // console.log("aa",MyRace)


  if (status === STATUSES.LOADING) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >
        Loading....
      </h2>
    );
  }

  if (status === STATUSES.ERROR) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >
        Something went wrong!
      </h2>
    );
  }

  return (
    <div className="match">
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-4 "
      >
        <Tab eventKey="home" title="Current">
          <div className=' newpost'>
          <Accordion defaultActiveKey="0" flush>
            
            <div className="Currentpostdiv">
              <div className="Currentpostheader">
                <h2>United Arab Emirates</h2>
                <img src={flag} alt="" />
              </div>
              <div className="CompetitionData">
                <Accordion>
                  {racecard.map((item) => {
                    return (
                      <div className="Competitionitem" key={item._id}>
                        <Accordion.Item eventKey={item._id}>
                          <Accordion.Header>
                            <div className="AccordionHeader">
                              <p>{item.RaceCourseData === null ? <>No Data</> : item.RaceCourseData.TrackName}</p>
                              <p>{item.DayNTime} min</p>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                          <div className="Competition_Matches">
                                  <p>{item.raceName}</p>
                                  <p>{item.id}</p>
                                </div>
                            {/* {item.matches.map((data) => {
                              return (
                                <div className="Competition_Matches">
                                  <p>{data.name}</p>
                                  <p>{data.id}</p>
                                </div>
                              );
                            })} */}
                          </Accordion.Body>
                        </Accordion.Item>
                      </div>
                    );
                  })}
                </Accordion>
              </div>
            </div>
          </Accordion>
          </div>
        </Tab>
        <Tab eventKey="ante" title="Ante Post" className="Ante_Post">
        <div className=' newpost'>
          <div className="Currentpostdiv">
          <Accordion defaultActiveKey="0" flush>
            <div className="Currentpostdiv">
              <div className="Currentpostheader">
                <h2>United Arab Emirates</h2>
                <img src={flag} alt="" />
              </div>
              <div className="CompetitionData">
                <Accordion>
                  {racecard.map((item) => {
                    return (
                      <div className="Competitionitem" key={item._id}>
                        <Accordion.Item eventKey={item._id}>
                          <Accordion.Header>
                            <div className="AccordionHeader">
                              <p>{item.RaceCourseData === null ? <>No Data</> : item.RaceCourseData.TrackName}</p>
                              <p>{item.DayNTime} min</p>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                          <div className="Competition_Matches">
                                  <p>{item.raceName}</p>
                                  <p>{item.id}</p>
                                </div>
                            {/* {item.matches.map((data) => {
                              return (
                                <div className="Competition_Matches">
                                  <p>{data.name}</p>
                                  <p>{data.id}</p>
                                </div>
                              );
                            })} */}
                          </Accordion.Body>
                        </Accordion.Item>
                      </div>
                    );
                  })}
                </Accordion>
              </div>
            </div>
          </Accordion>
          </div>
          </div>
        </Tab>
        <Tab
          eventKey="contact"
          title={<img src={calenderimg} alt='' />}
        >
          <div className=' newpost'>
          <Calendar1 />
          <Accordion defaultActiveKey="0" flush>
            <div className="Currentpostdiv">
              <div className="Currentpostheader">
                <h2>United Arab Emirates</h2>
                <img src={flag} alt="" />
              </div>
              <div className="CompetitionData">
                <Accordion>
                  {racecard.map((item) => {
                    return (
                      <div className="Competitionitem" key={item._id}>
                        <Accordion.Item eventKey={item._id}>
                          <Accordion.Header>
                            <div className="AccordionHeader">
                              <p>{item.RaceCourseData === null ? <>No Data</> : item.RaceCourseData.TrackName}</p>
                              <p>{item.DayNTime} min</p>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                          <div className="Competition_Matches">
                                  <p>{item.raceName}</p>
                                  <p>{item.id}</p>
                                </div>
                            {/* {item.matches.map((data) => {
                              return (
                                <div className="Competition_Matches">
                                  <p>{data.name}</p>
                                  <p>{data.id}</p>
                                </div>
                              );
                            })} */}
                          </Accordion.Body>
                        </Accordion.Item>
                      </div>
                    );
                  })}
                </Accordion>
              </div>
            </div>
          </Accordion>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Match;
