import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const launchDay = new Date('October 10, 2023 00:00:00').getTime();
  const [timeUntilLaunch, setTimeUntilLaunch] = useState(getTimeUntilLaunch());

  function getTimeUntilLaunch() {
    const now = new Date().getTime();
    const distance = launchDay - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeUntilLaunch(getTimeUntilLaunch());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='image-container'>
      <div className='text-container'>
            <p className='firstp'>Launch in:</p>
            <div className='countdown-container'>
              <div className='countdown'>  
                <p className='seacondp'>{timeUntilLaunch.days}:</p>
                <span>Days</span>
              </div>

              <div className='countdown'>
                <p className='seacondp'>{timeUntilLaunch.hours}:</p>
                <span>Hours</span>
              </div>

              <div className='countdown'>
                <p className='seacondp'>{timeUntilLaunch.minutes}:</p>
                <span>Minutes</span>
              </div>

              <div className='countdown'>
                <p className='seacondp'>{timeUntilLaunch.seconds}</p>
                <span>Seconds</span>
              </div>

            </div>
        </div>
    </div>
  )
}

export default App