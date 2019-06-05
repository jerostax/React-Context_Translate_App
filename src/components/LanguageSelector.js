import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
          Séléctionnez un Langage:
          <i className='flag fr' onClick={() => this.context.onLanguageChange('français')} />
          <i className='flag us' onClick={() => this.context.onLanguageChange('english')} />
      </div>
    );
  }
}

export default LanguageSelector;
