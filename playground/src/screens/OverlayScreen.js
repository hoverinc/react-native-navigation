const React = require('react');
const Root = require('../components/Root');
const Button = require('../components/Button')
const { component } = require('../commons/Layouts');
const Navigation = require('../services/Navigation');
const {
  SHOW_OVERLAY_BTN,
  SHOW_TOUCH_THROUGH_OVERLAY_BTN,
  ALERT_BUTTON,
  SET_ROOT_BTN,
  TOAST_BTN
} = require('../testIDs');
const Screens = require('./Screens');

class OverlayScreen extends React.Component {
  static options() {
    return {
      topBar: {
        title: {
          text: 'Overlay'
        }
      }
    };
  }

  render() {
    return (
      <Root componentId={this.props.componentId}>
        <Button label='Toast' testID={TOAST_BTN} onPress={this.toast} />
        <Button label='Alert' testID={ALERT_BUTTON} onPress={() => alert('Alert displayed')} />
        <Button label='Show overlay' testID={SHOW_OVERLAY_BTN} onPress={() => this.showOverlay(true)} />
        <Button label='Show touch through overlay' testID={SHOW_TOUCH_THROUGH_OVERLAY_BTN} onPress={() => this.showOverlay(false)} />
        <Button label='Show overlay with ScrollView' onPress={this.showOverlayWithScrollView} />
        <Button label='Set Root' testID={SET_ROOT_BTN} onPress={this.setRoot} />
      </Root>
    );
  }

  toast = () => Navigation.showOverlay(Screens.Toast);

  showOverlay = (interceptTouchOutside) => Navigation.showOverlay(Screens.OverlayAlert, {
    layout: { componentBackgroundColor: 'transparent' },
    overlay: { interceptTouchOutside }
  });

  setRoot = () => Navigation.setRoot({ root: component(Screens.Pushed) })

  showOverlayWithScrollView = () => Navigation.showOverlay(Screens.ScrollViewOverlay, {
    layout: { componentBackgroundColor: 'transparent' }
  });
}

module.exports = OverlayScreen;