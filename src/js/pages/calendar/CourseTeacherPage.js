"use strict";

// Vendor modules
import React                          from 'react';
import _                              from 'lodash'
import { hashHistory }                from 'react-router'

// Proejct modules
import CourseTeacher                  from '../../components/courseTeacher/courseTeacher';
import CourseStore                    from '../../stores/courseStore';
import CourseConstants                from '../../constants/courseConstants';
import * as CourseActions             from '../../actions/courseActions';
import * as helperPage                from '../helperPage';


const CHANGE_EVENT = CourseConstants.CHANGE_EVENT;

export default class CourseTeacherPage extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      course: null,
      teacher: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.courses && nextProps.courses.length > 0){
      const { query } = this.props.location;
      const { params } = this.props;
      const { courseNameSlug, teacherSlug } = params;
      //const { date, filter } = query;

      let { course, teacher} = helperPage.getCourseTeacher(nextProps.courses, courseNameSlug, teacherSlug);
      this.setState({
        course: course,
        teacher: teacher
      });
    }
  }

  // TODO put it into helper or extend from parent
  backBtnClick(e){
    e.preventDefault();
    const { router } = this.context
    router.push('/')
  }

  render(){
    return (
      <div className="container" style={{backgroundColor:"#F5F5F5"}}>
        <CourseTeacher
          course={this.state.course}
          teacher={this.state.teacher}
          backBtnClick={(e)=>{ this.backBtnClick(e); }}
        />
      </div>
    );
  }
}