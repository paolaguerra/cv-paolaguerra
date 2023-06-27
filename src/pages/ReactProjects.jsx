import React from "react";
import sithapp from "../img/sithapp.png";
import eazyhire from "../img/eazyhire.png";
import weatherly from "../img/weatherly.png";
import todo from "../img/todo.png";
import imperial from "../img/imperial.png";
import journal from "../img/journal.png";
import profile from "../img/profile.png";

export const ReactProjects = () => {
  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              React JS Projects
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <a
                  href="https://sith-app.vercel.app/home"
                  target="_blank"
                  class="underline decoration-sky-500"
                >
                  Open App
                </a>
                <a
                  href="https://github.com/paolaguerra/SithApp"
                  target="_blank"
                  class="underline decoration-red-500"
                >
                  Github
                </a>
                <span class="mr-5 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                  For Fun
                </span>
              </div>
              <img
                src={sithapp}
                alt=""
                className="h-90 w-90 bg-gray-50 mt-10 rounded items-center"
              ></img>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Looking for a Sith?
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
            </article>

            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <a
                  href="https://portaluser.vercel.app/"
                  target="_blank"
                  class="underline decoration-sky-500"
                >
                  Open App
                </a>
                <a
                  href="https://github.com/paolaguerra/portaluser"
                  target="_blank"
                  class="underline decoration-red-500"
                >
                  Github
                </a>
                <span class="mr-5 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                  Networking
                </span>
              </div>
              <img
                src={eazyhire}
                alt=""
                className="h-90 w-90 bg-gray-50 mt-10 rounded items-center"
              ></img>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Employment Searcher
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
            </article>

            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <a
                  href="https://sith-app.vercel.app/home"
                  target="_blank"
                  class="underline decoration-sky-500"
                >
                  Open App
                </a>
                <a
                  href="https://github.com/paolaguerra/weather-site"
                  target="_blank"
                  class="underline decoration-red-500"
                >
                  Github
                </a>
                <span class="mr-5 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  Information
                </span>
              </div>
              <img
                src={weatherly}
                alt=""
                className="h-90 w-90 bg-gray-50 mt-10 rounded items-center"
              ></img>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>A weather site
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
            </article>

          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <a
                  href="https://todo-list-nu-gilt.vercel.app/"
                  target="_blank"
                  class="underline decoration-sky-500"
                >
                  Open App
                </a>
                <a
                  href="https://github.com/paolaguerra/todo-list"
                  target="_blank"
                  class="underline decoration-red-500"
                >
                  Github
                </a>
                <span class="mr-5 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                Productivity
            </span>
              </div>
              <img
                src={todo}
                alt=""
                className="h-90 w-90 bg-gray-50 mt-10 rounded items-center"
              ></img>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    To-do List
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
            </article>

            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <a
                  href="https://empire-projects.vercel.app/"
                  target="_blank"
                  class="underline decoration-sky-500"
                >
                  Open App
                </a>
                <a
                  href="https://github.com/paolaguerra/empire-projects"
                  target="_blank"
                  class="underline decoration-red-500"
                >
                  Github
                </a>
                <span class="mr-5 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                  For Fun
                </span>
              </div>
              <img
                src={imperial}
                alt=""
                className="h-90 w-90 bg-gray-50 mt-10 rounded items-center"
              ></img>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Imperial Projects Database
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
            </article>

            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <a
                  href="https://journal-app-navy.vercel.app/auth/login"
                  target="_blank"
                  class="underline decoration-sky-500"
                >
                  Open App
                </a>
                <a
                  href="https://github.com/paolaguerra/journal-app"
                  target="_blank"
                  class="underline decoration-red-500"
                >
                  Github
                </a>
                <span class="mr-5 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                Productivity
            </span>
              </div>
              <img
                src={journal}
                alt=""
                className="h-90 w-90 bg-gray-50 mt-10 rounded items-center"
              ></img>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>Journal Site
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
            </article>
            
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <a
                  href="https://profile-website-gold.vercel.app/"
                  target="_blank"
                  class="underline decoration-sky-500"
                >
                  Open App
                </a>
                <a
                  href="https://github.com/paolaguerra/profile-website"
                  target="_blank"
                  class="underline decoration-red-500"
                >
                  Github
                </a>
                <span class="mr-5 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                  Networking
                </span>
              </div>
              <img
                src={profile}
                alt=""
                className="h-90 w-90 bg-gray-50 mt-10 rounded items-center"
              ></img>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Layout from scratch
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
            </article>

            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <a
                  href="https://empire-projects.vercel.app/"
                  target="_blank"
                  class="underline decoration-sky-500"
                >
                  Open App
                </a>
                <a
                  href="https://github.com/paolaguerra/empire-projects"
                  target="_blank"
                  class="underline decoration-red-500"
                >
                  Github
                </a>
                <span class="mr-5 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                  For Fun
                </span>
              </div>
              <img
                src={imperial}
                alt=""
                className="h-90 w-90 bg-gray-50 mt-10 rounded items-center"
              ></img>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Imperial Projects Database
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
            </article>

            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <a
                  href="https://journal-app-navy.vercel.app/auth/login"
                  target="_blank"
                  class="underline decoration-sky-500"
                >
                  Open App
                </a>
                <a
                  href="https://github.com/paolaguerra/journal-app"
                  target="_blank"
                  class="underline decoration-red-500"
                >
                  Github
                </a>
                <span class="mr-5 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                Productivity
            </span>
              </div>
              <img
                src={journal}
                alt=""
                className="h-90 w-90 bg-gray-50 mt-10 rounded items-center"
              ></img>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>Journal Site
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
            </article>
            
          </div>


        </div>
      </div>
    </div>
  );
};
