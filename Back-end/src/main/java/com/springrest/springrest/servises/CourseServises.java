package com.springrest.springrest.servises;

import java.util.List;

import com.springrest.springrest.entity.Course;

public interface CourseServises {

	public List<Course> getCourses();
	
	public Course getCourses(long courseId);
	
	public Course addCourse(Course course);
	
	public Course updateCourse(Course course);
	
	public void deleteCourse(long parsLong);
	
}
