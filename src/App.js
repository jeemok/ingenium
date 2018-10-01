import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { history } from './store';
import HeaderNav from './components/layout/HeaderNav';
import MobileNav from './components/layout/MobileNav';
import Footer from './components/layout/Footer';
import IndexView from './views/IndexView';
import AboutModulosView from './views/AboutModulosView';
import OurStoryView from './views/OurStoryView';
import MaterialsView from './views/MaterialsView';
import ShippingView from './views/ShippingView';
import ForBusinessView from './views/ForBusinessView';
import ContactView from './views/ContactView';
import ModulesView from './views/ModulesView';
import SingleModuleView from './views/SingleModuleView';
import SingleLegView from './views/SingleLegView';
import SingleAddOnView from './views/SingleAddOnView';
import LegsView from './views/LegsView';
import AddOnsView from './views/AddOnsView';
import ShoppingCartView from './views/ShoppingCartView';
import CheckoutView from './views/CheckoutView';
import ConfiguratorView from './views/ConfiguratorView';
import OrderSuccessView from './views/OrderSuccessView';
import CookieNotification from './components/index/CookieNotification';
import styles from './shared_styles/_rootStyles.scss';
import ReactGA from 'react-ga';
import GoogleTagManager from './components/index/GoogleTagManager';
import CompanyStructuredData from './components/google-structured-data/CompanyStructuredData';

ReactGA.initialize('UA-70657485-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: true,
      stripeInProgress: this.props.stripeInProgress,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  updateWindowDimensions() {
    this.setState({
      isMobile: (window.innerWidth < 800)
    });
  }

  componentDidMount() {
  this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  render() {
    return (
      <main className={styles['layout-root']}>
        <GoogleTagManager gtmId='GTM-WWB46CV' />
        <CompanyStructuredData />
        <Switch location={history.location}>
          <Route exact path='/' render={({ match }) => this.state.isMobile ? <MobileNav location='index' /> : <HeaderNav location='index' />} />
          <Route path='/:urlString' render={({ match }) => this.state.isMobile ? <MobileNav location={match.params.urlString} /> : <HeaderNav location={match.params.urlString} /> } />
        </Switch>
        <Switch location={history.location}>
          <Route exact path='/' component={IndexView} />
          <Route exact path='/about-modulos' component={AboutModulosView} />
          <Route exact path='/our-story' component={OurStoryView} />
          <Route exact path='/materials' component={MaterialsView} />
          <Route exact path='/for-business' component={ForBusinessView} />
          <Route exact path='/contact' component={ContactView} />
          <Route exact path='/shipping-locations' component={ShippingView} />
          <Route exact path='/store/modules' component={ModulesView} />
          <Route exact path='/store/legs' component={LegsView} />
          <Route exact path='/store/addons' component={AddOnsView} />
          <Route exact path='/store/shopping-cart' render={() => {return(<ShoppingCartView history={history} />)}} />
          <Route exact path='/store/checkout' render={() => {return(<CheckoutView history={history} />)}} />
          <Route exact path='/store/order/success' component={OrderSuccessView} />
          <Route exact path='/configurator' render={() => {return(<ConfiguratorView history={history} />)}} />
          <Route exact path='/#/configurator' render={() => {return(<ConfiguratorView history={history} />)}} />
          <Route path='/store/modules/:urlString' render={({ match }) => {return(<SingleModuleView moduleId={match.params.urlString} />)} } />
          <Route path='/store/legs/:urlString' render={({ match }) => {return(<SingleLegView legId={match.params.urlString} />)} } />
          <Route path='/store/addons/:urlString' render={({ match }) => {return(<SingleAddOnView addOnId={match.params.urlString} />)} } />
          <Route component={IndexView} />
        </Switch>
        <CookieNotification showNotification={false} />
        <Switch location={history.location}>
          <Route exact path='/' render={({ match }) => <Footer location='index' />} />
          <Route path='/:urlString' render={({ match }) => <Footer location={match.params.urlString} /> } />
        </Switch>
      </main>
    );
  }
}

export default App;



// WEBPACK FOOTER //
// ./src/App.js
