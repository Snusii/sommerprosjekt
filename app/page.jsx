


export default function Home() {
  return (
    
    <>
    <div id="main-container">
    <section>
      
      <div>
      <h1>FAST, FAIR AND AUTOMATED</h1>

      <p>TapIn is your go-to hub for hosting gaming events directly in Discord</p>
      </div>

      <div id="announcement-container">

        <div className="joinBtn-container">

          <button className="join-btn">Join now</button>

        </div>

        <div id="announcement">
          
          <div className="announcement-items">

            <img src="/Images/bluecircle.svg" alt="Purple circle icon"/>

            <div id="announcement-text" >
              <h3>BOT</h3>
              <p>- Setting up events.</p>
            </div>
            
          </div>
      
          <div className="announcement-items">

            <img src="/Images/purplecircle.svg" alt="Blue circle icon"/>

            <div id="announcement-text-two">
              <h3>TapIn</h3>
              <p>- React to events on Discord.</p>
              <p>- Join the fun!</p>
            </div>
            
          </div>

          <div className="announcement-items">

            <img src="/Images/bluecircle.svg" alt="Purple circle icon"/>

            <div id="announcement-text-three" >
              <h3>Leaderboard</h3>
              <p>- Updates after each event.</p>
            </div>
            
          </div>

        </div>

      </div>

    </section>

   <section>

      <h2>Why TapIn?</h2>

      <ul className="tapin-list">
        Efficient and automated
        <li className="white-text">No need to manage signups or create teams manually.</li>
      </ul>

      <ul className="tapin-list">
        Balanced competition
        <li className="white-text">Fair teams based on performance.</li>
      </ul>

      <ul className="tapin-list">
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
