


export default function Home() {
  return (
    
    <>
    <div id="main-container">
    <section>
      
      <div className="margin">
      <h1 className='blue-text'>FAST, FAIR AND AUTOMATED</h1>

      <p>TapIn is your go-to hub for hosting gaming events directly in Discord</p>
      </div>

      <div id="announcement-container">
        <img className="joinNow" src="/Images/joinnow.png" alt="Join now image with Discord link"/>

        <div id="announcement">
          
          <span className="announcement-items">
            <img src="/Images/purplecircle.svg" alt="Purple circle icon"/>
            
            <ul>
              BOT
              <li>- Setting up events.</li>
            </ul>
          </span>
      

          <span className="announcement-items">

            <img src="/Images/bluecircle.svg" alt="Blue circle icon"/>

            <ul>
              TapIn
              <li>
                - React to events on Discord.
              </li>
              <li>
                - Join the fun!
              </li>
            </ul>
          </span>

          <span className="announcement-items">
            <img src="/Images/purplecircle.svg" alt="Purple circle icon"/>

            <ul>
              Leaderboard
              <li>- Updates after each event.</li>
            </ul>
          </span>

        </div>

      </div>

    </section>

   <section>

      <h2>Why TapIn?</h2>

      <ul className="blue-text">
        Efficient and automated
        <li className="white-text">No need to manage signups or create teams manually.</li>
      </ul>

      <ul className="blue-text">
        Balanced competition
        <li className="white-text">Fair teams based on performance.</li>
      </ul>

      <ul className="blue-text">
        Engaging and social
        <li className="white-text">Seamless voice setup and dynamic gameplay.</li>
      </ul>

    </section>

    <section>

       <h2>Ready to Tap In?</h2>

       <p>Join Discord to connect with the community, and hit Leaderboard to see today's top players!</p>
       
    </section>
    </div>
</>
    

  );
}
