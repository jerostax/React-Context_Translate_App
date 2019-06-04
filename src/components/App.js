import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  state = { language: 'français' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
    <div className='ui container'>
      <div>
          Séléctionnez un Langage:
          <i className='flag fr' onClick={() => this.onLanguageChange('français')} />
          <i className='flag us' onClick={() => this.onLanguageChange('english')} />
      </div>
      <ColorContext.Provider value='red'>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </ColorContext.Provider>
    </div>
    );
  }
}

export default App;
