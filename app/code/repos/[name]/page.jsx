import Repo from "@/app/components/Repo";
import Link from "next/link";
import RepoDir from "@/app/components/RepoDir";
import { Suspense } from "react";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back to Repositories
      </Link>
      <Suspense fallback={<div>Loading repo....</div>}>
        <Repo name={name} />
      </Suspense>

      <Suspense fallback={<div>Loading dir....</div>}>
        <RepoDir name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
