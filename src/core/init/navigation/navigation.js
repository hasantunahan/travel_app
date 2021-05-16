import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeNavigation from '../../../view/home/home/home_navigation';
import { createSharedElementStackNavigator4 } from 'react-navigation-shared-element';
import PlaceDetailsPage from '../../../view/home/_homepartial/_place_detail_page/place_details_page';
import Details from '../../../view/home/_homepartial/_place_detail_page/detail';

const Navigation = createSharedElementStackNavigator4(
  {
    Home: HomeNavigation,
    PlaceDetailsPage: PlaceDetailsPage,
    Details : Details,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
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
