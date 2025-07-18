


export default function Home() {
  return (
    
    <>
    <div id="main-container">
    <section>
      
      <div>
      <h1 className="margin">FAST, FAIR AND AUTOMATED</h1>

      <p className="margin">TapIn is your go-to hub for hosting gaming events directly in Discord</p>
      </div>

      <div id="announcement-container">

        <div className="joinBtn-container">
          <button className="join-btn">Join now</button>
        </div>

        <div id="announcement">
          
          <div className="announcement-items">

            <img src="/Images/purplecircle.svg" alt="Purple circle icon"/>

            <div id="bot-announcement" >
              <h3 className="announcement-title">BOT</h3>
              <p>- Setting up events.</p>
            </div>
            
          </div>
      
          <div id="tapin-items">

            <img src="/Images/bluecircle.svg" alt="Blue circle icon"/>

            <div id="tapin-announcement">
              <h3 className="announcement-title">TapIn</h3>
              <p>- React to events on Discord.</p>
              
            </div>
            
          </div>

          <div className="announcement-items">

            <img src="/Images/purplecircle.svg" alt="Purple circle icon"/>

            <div id="leaderboard-announcement" >
              <h3 className="announcement-title">Leaderboard</h3>
              <p>- Updates after each event.</p>
            </div>
            
          </div>

        </div>

      </div>

    </section>

   <section>

      <h2 className="about-title">Why <b>TapIn?</b></h2>

      <h3 className="gradient-text">
        Efficient and automated
      </h3>
      <p className="margin">No need to manage signups or create teams manually.</p>

      <h3 className="gradient-text">
        Balanced competition
      </h3>
      <p className="margin">Fair teams based on performance.</p>

      <h3 className="gradient-text">
        Engaging and social
      </h3>
      <p className="margin">Seamless voice setup and dynamic gameplay.</p>
      

    </section>

    <section>
      <div id="discord-container">

        <h2 className="discord-title">Ready to <b>Tap In?</b></h2>
        <p>Join Discord to connect with the community, and hit Leaderboard to see today's top players!</p>
        <button className="discord-icon">
        <img src="/Images/discord.png" alt="discord icon" />
        </button>
      </div>
    </section>
    </div>
</>
    

  );
}
