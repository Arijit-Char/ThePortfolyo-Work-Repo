import React, { useEffect, useRef, useState } from 'react';
import TimelineObserver from 'react-timeline-animation';
import { fireConfetti } from './confetti';
import '../App.scss';

const Timeline = ({ education, setObserver, callback }) => {
    const size = education.length;
    const [messages, setMessages] = useState(Array(size).fill(''));

    const timelines = Array.from({ length: size }, (_, index) => useRef(null));
    const circles = Array.from({ length: size }, (_, index) => useRef(null));

    useEffect(() => {
        const someCallbacks = education.map((item, index) => () => {
            setMessages((prevMessages) => {
                const updatedMessages = [...prevMessages];
                updatedMessages[index] = ` ${index + 1}: ${item.jobTitle} at ${item.company_name}`;
                return updatedMessages;
            });
            fireConfetti();
            callback();
        });

        timelines.forEach((timelineRef, index) => setObserver(timelineRef.current));
        circles.forEach((circleRef, index) => setObserver(circleRef.current, someCallbacks[index]));
    }, []);

    return (
        <div className="wrapper">
            {education.map((item, index) => (
                <React.Fragment key={item._id}>
                    <div id={`timeline${index + 1}`} ref={timelines[index]} className="timeline" />
                    <div className="circleWrapper">
                        <div id={`circle${index + 1}`} ref={circles[index]} className="circle">
                            {index + 1}
                        </div>
                        <div className="message">
                            <p style={{fontSize:"1rem"}}>{messages[index]}</p>
                            <p>{item.summary}</p>
                            <p>{`Location: ${item.jobLocation}`}</p>
                            <p>{`Duration: ${item.startDate} to ${item.endDate}`}</p>
                            <ul>
                                {item.bulletPoints.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

const Timelines = ({ education, experience }) => {
    const [message, setMessage] = useState('');

    const onCallback = () => {
        console.log('awesome');
    };

    return (
        <div className="Timelines">
            <div className="stub1">⬇️ Education ⬇️</div>
            <TimelineObserver
                initialColor="#e5e5e5"
                fillColor="black"
                handleObserve={(setObserver) => <Timeline education={education} callback={onCallback} setObserver={setObserver} />}
            />
            <br />
            <br />
            <br />

            <div className="stub1">⬇️ Experience ⬇️</div>
            <TimelineObserver
                initialColor="#e5e5e5"
                fillColor="black"
                handleObserve={(setObserver) => <Timeline education={experience} callback={onCallback} setObserver={setObserver} />}
            />
        </div>
    );
};

export default Timelines;
