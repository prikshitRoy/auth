"use client";

import { useParams } from "next/navigation";

const CommunityPage = () => {
  const params = useParams();
  const communityId = params.communityId as string;

  return (
    <>
      <div className="m-9 mt-28">Community Name: {communityId}</div>
    </>
  );
};

CommunityPage.displayName = "CommunityPage";

export default CommunityPage;
