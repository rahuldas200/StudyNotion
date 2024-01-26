const Section = require("../models/Section");
const Course = require("../models/Course");
const mongoose = require("mongoose")
const SubSection = require("../models/Subsection");
// CREATE a new section
exports.createSection = async (req, res) => {
	try {
		// Extract the required properties from the request body
		const { sectionName, courseId } = req.body;
		console.log(sectionName,courseId);

		// Validate the input
		if (!sectionName || !courseId) {
			return res.status(400).json({
				success: false,
				message: "Missing required properties",
			});
		}

		// Create a new section with the given name
		const newSection = await Section.create({ sectionName });

		// Add the new section to the course's content array
		const updatedCourse = await Course.findByIdAndUpdate(
			courseId,
			{
				$push: {
					courseContent: newSection._id,
				},
			},
			{ new: true }
		)
			.populate({
				path: "courseContent",
				populate: {
					path: "subSection",
				},
			})
			.exec();

		// Return the updated course object in the response
		res.status(200).json({
			success: true,
			message: "Section created successfully",
			updatedCourse,
		});
	} catch (error) {
		// Handle errors
		res.status(500).json({
			success: false,
			message: "Internal server error",
			error: error.message,
		});
	}
};

// UPDATE a section
exports.updateSection = async (req, res) => {
	try {
		const { sectionName, sectionId , courseId} = req.body;

		
		const section = await Section.findByIdAndUpdate(
			sectionId,
			{ sectionName },
			{ new: true }
		);

		const course = await Course.findById(courseId).populate({
			path:"courseContent",
			populate:{
				path:"subSection"
			}
		}).exec();

		res.status(200).json({
			success: true,
			message: "Updated successfully",
			data:course,
			
		});
	} catch (error) {
		console.error("Error updating section:", error);
		res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
};

// DELETE a section
exports.deleteSection = async (req, res) => {
	try {
		//HW -> req.params -> test
		const { sectionId,courseId } = req.body;

		console.log(sectionId,courseId);

		const CourseDetail = await Course.findByIdAndUpdate({_id:courseId}, {
			$pull: {
			  courseContent: sectionId,
			},
		},{new:true});

		if(!CourseDetail){

			return res.status(500).json({
				message:"Section id is not define in Course section"
			});
		}
		const section = await Section.findById(sectionId);

		if(!section){
			return res.status(500).json({
				message:"Section is not exits"
			})
		}

		await SubSection.deleteMany({_id:{$in:section.subSection}});
		await Section.findByIdAndDelete(sectionId);

		const course = await Course.findById(courseId).populate({
			path:"courseContent",
			populate:{
				path:"subSection",
			}
		}).exec();


		return res.status(200).json({
			success: true,
			message: "Section deleted",
			data:course,
		});

	} catch (error) {
		console.error("Error deleting section:", error);
		res.status(500).json({
			success: false,
			message:error.message,
			message: "Internal server error",
		});
	}
};