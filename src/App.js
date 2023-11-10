import logo from './logo.svg';
import './App.css';
import LatestNews from './components/LatestNews/LatestNews';
import CardSlider from './components/CardSlider/CardSlider';
import KnowledgeFeature from './components/KnowledgeFeature/KnowledgeFeature';
import KnowledgeIcon from './components/KnowledgeIcon/KnowledgeIcon';

function App() {
  return (
    <div className="App">
      <div className="latest-news-container">
        <LatestNews />
        <CardSlider />
      </div>

      <div className="knowledge-container">
        <div className="knowledge">
            <h1>Expanding Your Knowledge</h1>
            <h2>Lorem ipsum dolor sit amet connsectetur urna dolor</h2>
        </div>
        <div>
          <div className="knowledge-feature">
            <KnowledgeIcon image={require("./assets/group.png")} alttag="user group icon" />
            <KnowledgeFeature 
              title="For Wealth Advisors & Professionals" 
              desc="Lorem ipsum dolor sit atem consectetur.  Consequat sollicitudin in euismod dolor, nec sodales viverra." />
          </div>
          <div className="knowledge-feature">
            <KnowledgeIcon image={require("./assets/graduated.png")} alttag="graduated icon" />
            <KnowledgeFeature 
              title="For Law Students" 
              desc="Lorem ipsum dolor sit atem consectetur.  Consequat sollicitudin in euismod dolor, nec sodales viverra." />
          </div>
          <div className="knowledge-feature">
            <KnowledgeIcon image={require("./assets/unite.png")} alttag="united icon" />
            <KnowledgeFeature 
              title="Diversity Resources" 
              desc="Lorem ipsum dolor sit atem consectetur.  Consequat sollicitudin in euismod dolor, nec sodales viverra." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
