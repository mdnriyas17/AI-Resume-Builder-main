import Header from "@/components/custom/Header";
import { UserButton } from "@clerk/clerk-react";
import { AtomIcon, Edit, Share2, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GlobalApi from "../../service/GlobalApi";
import { useUser } from "@clerk/clerk-react";
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const [resumeId, setResumeId] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onCreate = async () => {
    setLoading(true);
    const data = {
      data: {
        title: resumeTitle,
        resumeId: resumeId,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      },
    };
    GlobalApi.CreateNewResume(data).then(
      (resp) => {
        console.log(resp.data.documentId);
        if (resp) {
          setLoading(false);
          navigate("/dashboard/resume/" + resp.data._id + "/edit");
        }
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  const handleCardClick = (id) => {
    setResumeId(id);
    setOpenDialog(true);
  };

  const data = [
    {
      id: "resume-1",
      card: "Template 1",
      image: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
      description: "This is card 1",
    },
    {
      id: "resume-2",
      card: "Template 2",
      image: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
      description: "This is card 2",
    },
    {
      id: "resume-3",
      card: "Template 3",
      image: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
      description: "This is card 3",
    },
    // {
    //   id: "resume-4",
    //   card: "Card 4",
    //   image: "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    //   description: "This is card 4",
    // }, {
    //   id: "resume-5",
    //   card: "Card 5",
    //   image: "https://flowbite.com/docs/images/carousel/carousel-5.svg",
    //   description: "This is card 5",
    // }
  ];

  return (
    <div>
      <Header />
      <div>
        <section className="z-50">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <a
              href="https://npng.in"
              target="_blank"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">
                New
              </span>{" "}
              <span className="text-sm font-medium">NPNG</span>
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Build Your Resume
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Effortlessly Craft a Standout Resume
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="/dashboard"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get Started
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => (
              <div
                key={item.id}
                className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800"
                onClick={() => handleCardClick(item.id)}
              >
                <img
                  className="w-full"
                  src={item.image}
                  alt={`${item.card} image`}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
                    {item.card}
                  </div>
                  {/* <p className="text-gray-700 dark:text-gray-400 text-base">
                    {item.description}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <p>Add a title for your new resume</p>
              <Input
                className="my-2"
                placeholder="Ex. Full Stack resume"
                onChange={(e) => setResumeTitle(e.target.value)}
              />
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <Button onClick={() => setOpenDialog(false)} variant="ghost">
                Cancel
              </Button>
              <Button
                disabled={!resumeTitle || loading}
                onClick={() => onCreate()}
              >
                {loading ? <Loader2 className="animate-spin" /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Home;
