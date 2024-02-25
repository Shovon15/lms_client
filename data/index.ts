export const CourseData = [
    {
        name: "Your Course Name",
        description: "Your course description",
        price: 49.99, // Example price
        estimatedPrice: 59.99, // Example estimated price
        thumbnail: {
            public_id: "your_thumbnail_public_id",
            url: "your_thumbnail_url"
        },
        tags: "programming, web development", // Example tags
        level: "Intermediate", // Example level
        demoVideoUrl: "https://your-demo-video-url.com", // Example demo video URL
        benefits: [
            { title: "Benefit 1" },
            { title: "Benefit 2" },
            // Add more benefits as needed
        ],
        prerequisites: [
            { title: "Prerequisite 1" },
            { title: "Prerequisite 2" },
            // Add more prerequisites as needed
        ],
        reviews: [
            // Array of review objects based on reviewSchema
            // Review data object
            {
                user: { name: "John Doe", email: "john@example.com" }, // Example user object
                rating: 4.5, // Example rating
                comment: "This course is fantastic!", // Example comment
                commentReply: "Thank you for your feedback!" // Example comment reply
            }
        ],
        conuseData: [
            // Array of course data objects based on courseDataSchema
            // Course data object
            {
                title: "Course Title",
                description: "Course description",
                videoUrl: "https://your-video-url.com", // Example video URL
                // videoThumbnail: { ... }, // Example video thumbnail object
                videoSection: "Section 1", // Example video section
                videoLength: 60, // Example video length in minutes
                videoPlayer: "HTML5", // Example video player
                links: [
                    { title: "Link 1", url: "https://link1.com" },
                    { title: "Link 2", url: "https://link2.com" }
                    // Add more links as needed
                ],
                suggestion: "Try practicing the concepts covered in this section.", // Example suggestion
                question: [
                    { text: "What is your favorite part of this course?" },
                    { text: "Do you have any questions about the content?" }
                    // Add more questions as needed
                ]
            }
        ],
        ratings: 4.5, // Example rating
        puechassed: 1000 // Example number of purchases
    }

]