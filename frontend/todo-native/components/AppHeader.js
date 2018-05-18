import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import types from '../../todo/store/types'
import filter from '../../todo/store/filter'
import constants from '../../todo/store/constants'

class AppHeader extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  handleAll = () => this.props.dispatch(filter.actions[types.filter.SET](constants.SHOW_ALL))

  handleActive = () => this.props.dispatch(filter.actions[types.filter.SET](constants.SHOW_ACTIVE))

  handleDone = () => this.props.dispatch(filter.actions[types.filter.SET](constants.SHOW_COMPLETED))

  render () {
    return (
      <View style={{ alignSelf: 'center', padding: 10 }}>
        <Text>TODO App</Text>
      </View>
    )
  }
}

export default connect()(AppHeader)
