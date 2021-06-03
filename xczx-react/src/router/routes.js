import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import * as routePaths from '../constants/routerPaths';
import CareerPath from '../containers/careerPath';
import Home from '../containers/home';
import Courses from '../containers/courses';
import Course from '../containers/course';

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={routePaths.INDEX} exact component={Home} />
        <Route path={routePaths.CAREER_PATH} exact component={CareerPath} />
        <Route path={routePaths.COURSES} exact component={Courses} />
        <Route path={routePaths.COURSE} exact component={Course} />
      </Switch>
    </Router>
  );
};

export default routes;
