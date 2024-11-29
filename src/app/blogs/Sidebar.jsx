"use client";

import React from "react";
import { getBlog } from "@/services/getBlog";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Sidebar = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await getBlog();
        setBlogs(response.results);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="sm:px-6 lg:px-8 border-2 rounded-2xl h-screen">
        <ul className="h-screen">
          <div className="">
            <p className="text-[#07a496] font-semibold text-xl py-2 ">
              More Blogs
            </p>
          </div>

          {blogs.map((n) => (
            <li key={n.url}>
              <div>
                <Link
                  href={`/blogs/${n.url}`}
                  className="flex hover:translate-x-2 transition duration-300 ease-in-out"
                >
                  <div className="flex gap-1 hover:text-[#07a496]">
                    <div className="text-xl">
                      <AiOutlineDoubleRight className="mt-1" />
                    </div>
                    <h2 className="text-lg font-medium">{n.short_name}</h2>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
