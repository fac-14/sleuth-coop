exports.get = (req, res) => {
  res.send(JSON.stringify(profileData));
};

const profileData = {
  basic_info: {
    company_name: "Senzing",
    email: "senzing@senzing.com",
    one_liner:
      "Super duper fancy technological solution that in some way is relevant for local government but we don't know how or why",
    contact_name: "Jessie Beech",
    contact_title: "Head of Fun",
    website: "http://www.senzing.com",
    logo_url: "logo.jpg"
  },
  product: {
    why_useful: {
      descrip:
        "Lorem Ipsum is simply dummy text of the printing and typesetting ˀindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      helper:
        "Its important to use plain english and avoid any technical jargon!",
      input_type: "short_text"
    }
  },
  impact: {
    roi_spreadsheet: {
      file_url: "file.xlsx",
      input_type: "file_upload"
    }
  },
  images_demos: {
    video_demo_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    img_urls: ["image1.jpg", "image2.jpg"]
  }
};
