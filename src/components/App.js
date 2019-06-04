import React from 'react';
import UserCreate from './UserCreate';

class App extends React.Component {
  state = { language: 'français' };

  onLanguageChange = language => {
    this.setState({ language });
  }

  render() {
    return (
    <div className='ui container'>
      <div>
          Séléctionnez un Langage:
          <i className='flag fr' onClick={() => this.onLanguageChange('français')} />
          <i className='flag us' onClick={() => this.onLanguageChange('english')} />
      </div>
      <UserCreate />
    </div>
    );
  }
}

export default App;
