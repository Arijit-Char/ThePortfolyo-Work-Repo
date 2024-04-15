import React, { useEffect, useRef, useState } from 'react';
import TimelineObserver from 'react-timeline-animation';
import { fireConfetti } from './confetti';
import '../App.scss';

const Timeline = ({ education, setObserver, callback }) => {
  console.log(education);
    const size = education.length;
    const [messages, setMessages] = useState(Array(size).fill(''));

    const timelines = Array.from({ length: size }, (_, index) => useRef(null));
    const circles = Array.from({ length: size }, (_, index) => useRef(null));

    useEffect(() => {
        const someCallbacks = education.map((item, index) => () => {
            setMessages((prevMessages) => {
                const updatedMessages = [...prevMessages];
                updatedMessages[index] = `Step ${index + 1}: ${item.company_name}`;
                return updatedMessages;
            });
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
                        <div className="message">{messages[index]}</div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

const Timelines = ({ education }) => {
    const [message, setMessage] = useState('');

    const onCallback = () => {
        console.log('awesome');
    };

    return (
        <div className="Timelines">
            <h1>Education Timelines</h1>
            <div className="stub1">⬇️ scroll to start ⬇️</div>
            <TimelineObserver
                initialColor="#e5e5e5"
                fillColor="black"
                handleObserve={(setObserver) => <Timeline education={education} callback={onCallback} setObserver={setObserver} />}
            />
            <div className="stub2">{message}</div>
        </div>
    );
};

export default Timelines;
