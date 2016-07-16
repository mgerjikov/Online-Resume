/*
This is empty on purpose! Your code to build the resume will go here.
 */


// OBJECT "BIO"
var bio = {
	"name": "Martin Gerdzhikov",
	"role": "Freelancer",
	"contacts": {
		"mobile": "+359-883-385-910",
		"email": "mgerjikov@gmail.com",
		"github": "mgerjikov",
		"twitter": "Martin Gerdjikov",
		"location": "Stara Zagora, Bulgaria"
	},
	"welcomeMessage": "Roses are red, violets are blue, I'm schizophrenic, and so am I. Oscar Levant",
	"skills": ["AutoCAD", "Google Sketchup", "HTML", "CSS", "Python", "JS"],
	"bioPic": "images/IMG_1586-web2.jpg"

}

// DISCPLAY FUNCTION for OBJECT "BIO"
bio.display = function(){

	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	$("#skills").append(formattedSkill);
}
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedNameAndRole = formattedName + formattedRole;
$("#header").prepend(formattedNameAndRole);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedContacts = formattedMobile + formattedEmail + formattedTwitter + formattedGitHub +formattedLocation;
$("#topContacts").append(formattedContacts);
$("#footerContacts").append(formattedContacts);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedWelcome);

var biopic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(biopic);
};

// CALLING THE DISPLAY FUNCTION for OBJECT "BIO"
bio.display(bio);


//OBJECT "EDUCATION"
var education = {
	"schools": [
	{
		"name": "University of Forestry",
		"location": "Sofia, Bulgaria",
		"degree": "Bachelor expected",
		"specialty": "Interior Design",
		"dates": [2017],
		"url": "http://www.ltu.bg/"
	},
	{
		"name": "Professional High School John Atanasoff",
		"location": "Stara Zagora, Bulgaria",
		"degree": "Electronic technician",
		"specialty": "Microprocessor Technology",
		"dates": 2009,
		"url": "http://pgeja-sz.com/"
	}
	],

	"onlineCourses": [
	{
		"title": "Intro to Programming Nanodegree",
		"school": "Udacity",
		"dates": "September " + 2015 + " to " + "February " + 2016,
		"url": "https://www.udacity.com/nanodegree"
	},
	{
		"title": "JavaScript Syntax",
		"school": "Udacity",
		"dates":  "February " + 2016,
		"url": "http://www.udacity.com/course/ud804"
	},
	{
		"title": "Intro to Computer Science",
		"school": "Udacity",
		"dates":  "September " + 2015 + " and still involved in it. " ,
		"url": "https://www.udacity.com/wiki/cs101"
	}
	]
};

// DISPLAY FUNCTIONs for OBJECT "EDUCATION"
education.display = function()
{
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedUrl = HTMLschoolName.replace("#", education.schools[school].url);
		var formattedSchoolName = formattedUrl.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedSchoolName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedCity = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedCity);
		var formattedSpecialty = HTMLschoolMajor.replace("%data%",education.schools[school].specialty);
		$(".education-entry:last").append(formattedSpecialty)
	}
	
};

education.display2 = function(){
	for(online in education.onlineCourses){
		$(".education-entry:last").append(HTMLonlineClasses);
		var formattedUrlClasses = HTMLonlineTitle.replace("#",education.onlineCourses[online].url);
		var formattedTitle = formattedUrlClasses.replace("%data%", education.onlineCourses[online].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[online].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);
		var formattedClassesDates = HTMLonlineDates.replace("%data%",education.onlineCourses[online].dates);
		$(".education-entry:last").append(formattedClassesDates);
		var formattedOnlineUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[online].url);
		$(".education-entry:last").append(formattedOnlineUrl)
	}
};

//CALLING DISPLAY FUNCTION for OBJECT "EDUCATION"
education.display(education);
education.display2(education);

// OBJECT "WORK"
var work = 
{
	"jobs": [
	{
		"employer": "Water Country USA",
		"title": "Work and Travel Student Exchange",
		"location": "Williamsburg, VA, USA",
		"dates": "Summer 2012",
		"description": "Water Country USA is a water theme park in York County, Virginia,"+
		" about 3 miles southeast of Williamsburg, Virginia, USA. It is the Mid-Atlantic's largest "+
		" water park, and it offers live entertainment, shops and restaurants, water rides, and other "+
		" attractions, all of which have a 1950s or 1960s surf theme. It is owned by SeaWorld Entertainment,"+
		" a division of Blackstone Group. The park is just a few miles away from Busch Gardens Williamsburg, "+
		" with which it shares clientele. I used to work in restaurant Hot Spot. "+
		" Mainly in the kitchen, providing Chicken Fajitas for over 10 000 people everyday."
	},
	{
		"employer": "Orca Adventure Lodge",
		"title": "Work and Travel Student Exchange",
		"location": "Cordova, AK, USA",
		"dates": "Summer of 2013",
		"description": "Located between Prince William Sound, the rugged Chugach Mountains,"+
		" and the massive Copper River Delta, Orca Adventure Lodge offers a wide variety of "+
		" opportunities to experience Alaska's raw landscape. I used to work in the kitchen and as "+
		" a waiter. Also helped guiding trips on hiking trails and glaciers. "+
		" Filleting fishes was great fun and was amusement for the customers."
	},
	{
		"employer": "City Casino Group",
		"title": "Surveillance operator",
		"location": "Sofia,Bulgaria",
		"dates": "2012-2013,2013-2015",
		"description": "Maintaining strict control over managers and staff of the casinos. "+
		" Verification and confirmation the games of VIP clients. Authorizing bonuses. "+
		" Fining of managers and staff for maintaining wrong information or common mistakes."
	}
	]

};
//DISPLAY FUNCTION for OBJECT "WORK"
work.display = function() {
			for(job in work.jobs){
				$("#workExperience").append(HTMLworkStart);
				var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
				var formattedEmloyerTitle = formattedEmployer + formattedTitle;
				$(".work-entry:last").append(formattedEmloyerTitle);
				var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				$(".work-entry:last").append(formattedDates);
				var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
				$(".work-entry:last").append(formattedDescription);
				formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
				$(".work-entry:last").append(formattedLocation);
			}
		};
//CALLING the DISPLAY FUNCTION for OBJECT "WORK"
work.display(work);

// OBJECT "PROJECTS"
var projects = {
	"projects": [
	{
		"title": "Movie Website - Udacity",
		"dates": "December 2015",
		"description": "Storing a list of my favorite movies, including box art imagery" +
		" and a movie trailer URL. Generate a static web page allowing browsing" +
		" movies and watching their trailers.",
		"images": ["images/simple.jpg", "images/project.jpg"]
	}
	]
}

// DISPLAY FUNCTION for OBJECT "PROJECTS"
projects.display = function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription)
		var formattedProjectImage1 = HTMLprojectImage.replace("%data%",projects.projects[project].images[0]);
		var formattedProjectImage2 = HTMLprojectImage.replace("%data%",projects.projects[project].images[1]);
		var formattedProjectImages = formattedProjectImage2 + formattedProjectImage1;
		//var formattedProject = formattedProjectTitle + formattedProjectDates + formattedProjectDescription +formattedProjectImages;
		$(".project-entry:last").append(formattedProjectImages);

	}
}

// CALLING DISPLAY FUNCTION for OBJECT "PROJECTS"
projects.display(projects);

// Information about click locations. It can be seen in dev tools
$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

// Internationalizer
/*function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}
$('#name').append(internationalizeButton);*/
function inName() {
  var name = window.name;
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  
  return name[0] +" "+ name[1];	
}

var name = $("#name").text();

$('#name').append(internationalizeButton);




$("#mapDiv").append(googleMap);
