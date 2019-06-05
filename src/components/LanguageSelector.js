import React from 'react';

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
          Séléctionnez un Langage:
          <i className='flag fr' onClick={() => this.props.onLanguageChange('français')} />
          <i className='flag us' onClick={() => this.props.onLanguageChange('english')} />
      </div>
    );
  }
}

export default LanguageSelector;
