import axios from "axios";

export const CreateConvertion = async ({
  name,
  email,
  phone,
  course,
  trafficSource,
}: {
  name: string;
  email: string;
  phone: string;
  course: string;
  trafficSource?: any;
}) => {
  let traffic = trafficSource;

  if (!traffic) {
    traffic = {
      name: "__trf.src",
      value: "undefined",
    };
  }

  await axios.post(
    `https://api.rd.services/platform/conversions?api_key=xQJQAkXLaRilFlCyGCIXgYkYUHOQYhkSHseL`,
    {
      event_type: "CONVERSION",
      event_family: "CDP",
      payload: {
        conversion_identifier: "EPEX",
        name: `${name}`.toUpperCase(),
        email: email,
        traffic_source: traffic.value,
        job_title: "Estudante",
        personal_phone: `55${phone.replace(/\D/g, "")}`,
        company_name: `${name}`.toUpperCase(),
        cf_curso_de_interesse: course,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer",
      },
    },
  );
};
