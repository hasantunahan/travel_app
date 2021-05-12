import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeNavigation from '../../../view/home/home/home_navigation';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import PlaceDetailsPage from '../../../view/home/_homepartial/_place_detail_page/place_details_page';

const Navigation = createStackNavigator(
  {
    Home: HomeNavigation,
    PlaceDetailsPage: PlaceDetailsPage
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTintColor: '#4ababa',
      headerTitleAlign: 'left',
      headerShown: false,
      cardStyle: {
        backgroundColor: 'transparent'
      },
      cardStyleInterpolator: (
        {
          current: { progress }
        }
      ) => {
        return { cardStyle: { opacity: progress } }
      }
    },
  }
);

export default createAppContainer(Navigation);
