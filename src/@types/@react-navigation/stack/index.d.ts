declare namespace ReactNavigation {
  export interface RootParamList extends RootStackParamList {
    Home: NavigationStackProp<string>;
    CarDetails: NavigationStackProp<string>;
    Schaduling: NavigationStackProp<string>;
    SchedulingDetails: NavigationStackProp<string>;
    SchedulingComplete: NavigationStackProp<string>;
    MyCars: NavigationStackProp<string>;
  }
}