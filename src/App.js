import ProfileCard from "./ProfileCard";

import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

const pdas = [
  {
    title: "Alexa",
    handle: "@alexa99",
    image: AlexaImage,
    description: "Alexa was created by Amazon and helps you buy things.",
  },
  {
    title: "Cortana",
    handle: "@cortana32",
    image: CortanaImage,
    description: "Cortana was made by Microsft. Who knows what it does?",
  },
  {
    title: "Siri",
    handle: "@siri01",
    image: SiriImage,
    description: "Siri was made by Apple and is being phased out",
  },
];

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            {pdas.map(({ title, handle, image, description }, i) => {
              return (
                <div key={i} className="column is-3">
                  <ProfileCard
                    title={title}
                    handle={handle}
                    image={image}
                    description={description}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
