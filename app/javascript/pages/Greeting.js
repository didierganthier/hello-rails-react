import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchGreeting} from "../store/greetings/greetings";

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return <h3>{greeting}</h3>
}

export default Greeting