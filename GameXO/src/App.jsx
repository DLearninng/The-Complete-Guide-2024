import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data'
import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton/TabButton';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('compoents')
  function handleClick(name) {
    setSelectedTopic(name)
  }
  return ( 
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((_core, index) => <CoreConcept {...CORE_CONCEPTS[index]} />)}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton label={'Compoents'} onSelect={() => handleClick('compoents')} />
            <TabButton label={'Jsx'} onSelect={() => handleClick('jsx')} />
            <TabButton label={'Props'} onSelect={() => handleClick('props')} />
            <TabButton label={'State'} onSelect={() => handleClick('state')} />
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES.selectedTopic.title}</h3>
            <p>{EXAMPLES.selectedTopic.description}</p>
            <pre>
              <code>
                {EXAMPLES.selectedTopic.code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
