import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  state = {
    status: 'off',
    time: 1200,
    timer: null,
  }

  formatTime = input => {

    const minutes = Math.floor(input/60);
    const seconds = input%60;

    return `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  }

  render() {
    const { status, time } = this.state;
    const formatTime = this.formatTime(time);
    return (
      <div>
        <h1>Protect your eyes</h1>
        {(status === 'off') &&
          <div>
            <p>According to optometrists in order to save your eyes, you should follow the 20/20/20. It means you should to rest your eyes every 20 minutes for 20 seconds by looking more than 20 feet away.</p>
            <p>This app will help you track your time and inform you when it's time to rest.</p>
          </div>
        }

        {(status === 'work') &&
          <img src="./images/work.png" />
        }

        {(status === 'rest') &&
          <img src="./images/rest.png" />
        }

        {(status == 'off') &&
          <div className="timer">
            {formatTime}
          </div>
        }

        {(status === 'off') &&
          <button className="btn">Start</button>
        }

        {(status !== 'off') &&
          <button className="btn">Stop</button>
        }

        <button className="btn btn-close">X</button>
      </div>
    )
  }
};

render(<App />, document.querySelector('#app'));
