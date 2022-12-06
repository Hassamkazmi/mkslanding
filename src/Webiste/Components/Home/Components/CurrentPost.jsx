import React, { useEffect } from "react";
import "../../CSS/HomeCSS/blogs.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchRace, STATUSES } from "../../../redux/getReducer/getRaceCard";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import Calendar1 from "./Calendar";
import { BsCalendarDate } from "react-icons/bs";
import flag from "../../../assets/United Arab Emirates.png";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import calenderimg from "../../../assets/Calendar 15 (Traced).png";
import { Bounce } from "react-reveal";
import { useTranslation } from "react-i18next";
import Moment from "react-moment";
import Cookies from "js-cookie";

const Match = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: racecard, status } = useSelector((state) => state.racecard);
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(fetchRace());
  }, []);

  // let abc = 'live'
  // const {MyRace} = racecard.find(race => race.RaceStatus  === abc)

  // console.log("aa",MyRace)
  function HandleJockey(id) {
    navigate("/racedetail", {
      state: {
        id: id,
      },
    });
  }

  if (status === STATUSES.LOADING) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      ></h2>
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
  const cookiedata = Cookies.get("i18next");

  return (
    <div className="match">
      {racecard === undefined ? (
        <h2 className="loader"></h2>
      ) : (
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-4 "
        >
          <Tab eventKey="home" title={t("current")}>
            <div className=" newpost">
              <Accordion defaultActiveKey="0" flush>
                <Bounce bottom>
                  <div className="Currentpostdiv">
                    <div className="Currentpostheader">
                      <h2>{t("United Arab Emirates")}</h2>
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
                                    <p>
                                      {cookiedata === "en"
                                        ? item.RaceCourseData.TrackNameEn
                                        : item.RaceCourseData.TrackNameAr}
                                    </p>
                                    <p>
                                      {" "}
                                      <Moment
                                        add={{ hours: 12 }}
                                        format="hh:mm"
                                      >
                                        {item.DayNTime}
                                      </Moment>
                                      min
                                    </p>
                                  </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                  <div
                                    onClick={() => HandleJockey(item._id)}
                                    className="Competition_Matches"
                                  >
                                    <p>
                                      {cookiedata === "en"
                                        ? item.RaceNameModelData.NameEn
                                        : item.RaceNameModelData.NameAr}{" "}
                                    </p>
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
                </Bounce>
              </Accordion>
            </div>
          </Tab>
          <Tab eventKey="ante" title={t("ante_post")} className="Ante_Post">
            <div className=" newpost">
              <Bounce bottom>
                <div className="Currentpostdiv">
                  <Accordion defaultActiveKey="0" flush>
                    <div className="Currentpostdiv">
                      <div className="Currentpostheader">
                        <h2>{t("United Arab Emirates")}</h2>
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
                                      <p>
                                        {item.RaceCourseData === null ? (
                                          <>No Data</>
                                        ) : (
                                          item.RaceCourseData.TrackNameEn
                                        )}
                                      </p>
                                      <p>
                                        {" "}
                                        <Moment
                                          add={{ hours: 12 }}
                                          format="hh:mm"
                                        >
                                          {item.DayNTime}
                                        </Moment>{" "}
                                        min
                                      </p>
                                    </div>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <div className="Competition_Matches">
                                      <p>{item.RaceNameModelData.NameEn}</p>
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
              </Bounce>
            </div>
          </Tab>
          <Tab eventKey="contact" title={<BsCalendarDate />}>
            <div className=" newpost">
              <Bounce top>
                <Calendar1 />
              </Bounce>
              <Bounce bottom>
                <Accordion defaultActiveKey="0" flush>
                  <div className="Currentpostdiv">
                    <div className="Currentpostheader">
                      <h2>{t("United Arab Emirates")}</h2>
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
                                    <p>
                                      {item.RaceCourseData === null ? (
                                        <>No Data</>
                                      ) : (
                                        item.RaceCourseData.TrackNameEn
                                      )}
                                    </p>
                                    <p>
                                      {" "}
                                      <Moment
                                        add={{ hours: 12 }}
                                        format="hh:mm"
                                      >
                                        {item.DayNTime}
                                      </Moment>{" "}
                                      min
                                    </p>
                                  </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                  <div className="Competition_Matches">
                                    <p>{item.RaceNameModelData.NameEn}</p>
                                    <p>{item.id}</p>
                                  </div>
                                
                                </Accordion.Body>
                              </Accordion.Item>
                            </div>
                          );
                        })}
                      </Accordion>
                    </div>
                  </div>
                </Accordion>
              </Bounce>
            </div>
          </Tab>
        </Tabs>
      )}
    </div>
  );
};

export default Match;
