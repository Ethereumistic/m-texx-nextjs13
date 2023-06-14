import { createClient, groq } from "next-sanity";

export async function getBanners() {
    
    const client = createClient({
        projectId: "omnzy2wb",
        dataset: "production",
        apiVersion: "2023-03-04",
    });


    return client.fetch(
        groq`*[_type = "banner"]{
            _id,
            _createdAt,
            page,
            "bannerImage": bannerImage.asset->url,
            overlayText,
        }`
        
    )

}