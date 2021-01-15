import React, {PureComponent} from 'react';
import {Text} from 'react-native';

import {connect} from 'react-redux';
import I18n from '../i18n/i18n';

class AppText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i18n: I18n,
    };
  }

  UNSAFE_componentWillMount() {
    const {language} = this.props;
    if (language) this.setMainLocaleLanguage(language);
  }

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const {language} = nextProps;
    if (language) this.setMainLocaleLanguage(language);
  };

  setMainLocaleLanguage = (language) => {
    let i18n = this.state.i18n;
    i18n.locale = language;
    this.setState({i18n});
  };

  render() {
    const {i18nKey, style} = this.props;
    const {i18n} = this.state;
    return (
      <Text style={style}>
        {i18nKey ? i18n.t(i18nKey) : this.props.children}
      </Text>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.Language.language,
  };
};

export default connect(mapStateToProps, null)(AppText);
