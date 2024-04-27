import { Models } from "appwrite";
import { Link } from "react-router-dom";

import { Button } from "../ui/button";

type JobCardProps = {
  job: Models.Document;
};

const JobCard = ({ job }: JobCardProps) => {

  return (
    <div className="job-card">
      <Link to={`/profile/${job.$id}`} className="job-card-link">
        <img
          src={job.imageUrl || "/assets/icons/jobsearch.svg"}
          alt="creator"
          className="rounded-full w-14 h-14"
        />

        <div className="flex-center flex-col gap-1">
          <p className="base-medium text-light-1 text-center line-clamp-1">
            {job.title}
          </p>
          <p className="small-regular text-light-3 text-center line-clamp-1">
            {job.location}
          </p>
        </div>
      </Link>

      <Button
        type="button"
        size="sm"
        className="shad-button_primary px-5"
      >
        Apply
      </Button>
    </div>
  );
};

export default JobCard;
