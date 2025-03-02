"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  Folder,
  File,
  ChevronRight,
  Terminal,
  User,
  Code,
  Briefcase,
  Mail,
  X,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type FileType = {
  name: string;
  type: "file" | "folder";
  icon?: React.ReactNode;
  content?: React.ReactNode;
  extension?: string;
  children?: FileType[];
};

export default function FileExplorerHero() {
  const [selectedFile, setSelectedFile] = useState<FileType | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<string[]>([
    "Jabir_Jaleel",
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const [typedPath, setTypedPath] = useState("");
  const fullPath = "~/home/Jabir_Jaleel";

  useEffect(() => {
    if (typedPath.length < fullPath.length) {
      const timeout = setTimeout(() => {
        setTypedPath(fullPath.substring(0, typedPath.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [typedPath]);

  const toggleFolder = (folderName: string) => {
    setExpandedFolders((prev) =>
      prev.includes(folderName)
        ? prev.filter((f) => f !== folderName)
        : [...prev, folderName]
    );
  };

  const openFile = (file: FileType) => {
    setSelectedFile(file);
  };

  const closeFile = () => {
    setSelectedFile(null);
  };

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const fileSystem: FileType[] = [
    {
      name: "home",
      type: "folder",
      icon: <Folder className="h-5 w-5 text-yellow-400" />,
      children: [
        {
          name: "Jabir_Jaleel",
          type: "folder",
          icon: <Folder className="h-5 w-5 text-blue-400" />,
          children: [
            {
              name: "about.txt",
              type: "file",
              icon: <File className="h-5 w-5 text-gray-400" />,
              extension: "txt",
              content: (
                <div className="space-y-4">
                  <h3 className="text-xl font-mono font-bold">About Me</h3>
                  <p className="text-muted-foreground">
                    I'm a passionate full-stack developer with expertise in
                    building modern web applications. With a strong foundation
                    in React and a deep understanding of web technologies, I
                    create seamless, user-friendly experiences that solve
                    real-world problems.
                  </p>
                  <p className="text-muted-foreground">
                    My journey in web development began 5 years ago, and since
                    then, I've worked on a variety of projects ranging from
                    Chrome extensions to real-time applications using WebRTC and
                    WebSockets. I'm also proficient in backend development,
                    allowing me to build full-stack solutions.
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <Button asChild variant="outline" size="sm">
                      <a href="#about">View Details</a>
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              name: "skills.json",
              type: "file",
              icon: <File className="h-5 w-5 text-green-400" />,
              extension: "json",
              content: (
                <div className="space-y-4">
                  <h3 className="text-xl font-mono font-bold">Skills</h3>
                  <div className="font-mono text-sm bg-black/20 p-4 rounded-md overflow-auto">
                    <pre className="text-green-400">
                      {JSON.stringify(
                        {
                          frontend: [
                            "React",
                            "Next.js",
                            "TypeScript",
                            "Tailwind CSS",
                          ],
                          backend: [
                            "Node.js",
                            "Express",
                            "MongoDB",
                            "PostgreSQL",
                          ],
                          tools: ["Git", "Docker", "CI/CD", "Jest"],
                          specialties: [
                            "Chrome Extensions",
                            "WebRTC",
                            "WebSockets",
                            "Real-time Applications",
                          ],
                        },
                        null,
                        2
                      )}
                    </pre>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <Button asChild variant="outline" size="sm">
                      <a href="#skills">View All Skills</a>
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              name: "projects",
              type: "folder",
              icon: <Folder className="h-5 w-5 text-purple-400" />,
              children: [
                {
                  name: "real-time-collab.md",
                  type: "file",
                  icon: <File className="h-5 w-5 text-gray-400" />,
                  extension: "md",
                  content: (
                    <div className="space-y-4">
                      <h3 className="text-xl font-mono font-bold">
                        Real-time Collaboration Platform
                      </h3>
                      <div className="aspect-video relative overflow-hidden rounded-md">
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Real-time Collaboration Platform"
                          width={600}
                          height={400}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p className="text-muted-foreground">
                        A collaborative workspace with WebRTC video conferencing
                        and WebSocket-based real-time document editing.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                          React
                        </span>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                          WebRTC
                        </span>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                          WebSockets
                        </span>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                          Node.js
                        </span>
                      </div>
                      <div className="flex items-center gap-2 pt-2">
                        <Button asChild variant="outline" size="sm">
                          <a href="#projects">View Project</a>
                        </Button>
                      </div>
                    </div>
                  ),
                },
                {
                  name: "chrome-extension.md",
                  type: "file",
                  icon: <File className="h-5 w-5 text-gray-400" />,
                  extension: "md",
                  content: (
                    <div className="space-y-4">
                      <h3 className="text-xl font-mono font-bold">
                        Code Snippet Manager Extension
                      </h3>
                      <div className="aspect-video relative overflow-hidden rounded-md">
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Code Snippet Manager Extension"
                          width={600}
                          height={400}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p className="text-muted-foreground">
                        Chrome extension for developers to save, organize, and
                        access code snippets directly in the browser.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                          Chrome Extension
                        </span>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                          JavaScript
                        </span>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                          LocalStorage
                        </span>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                          CSS
                        </span>
                      </div>
                      <div className="flex items-center gap-2 pt-2">
                        <Button asChild variant="outline" size="sm">
                          <a href="#projects">View Project</a>
                        </Button>
                      </div>
                    </div>
                  ),
                },
              ],
            },
            {
              name: "contact.me",
              type: "file",
              icon: <File className="h-5 w-5 text-red-400" />,
              extension: "me",
              content: (
                <div className="space-y-4">
                  <h3 className="text-xl font-mono font-bold">Contact Me</h3>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-blue-400" />
                      <a
                        href="mailto:contact@example.com"
                        className="text-blue-400 hover:underline"
                      >
                        contact@example.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Terminal className="h-5 w-5 text-green-400" />
                      <span className="font-mono">@jabirjaleel</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <Button asChild variant="outline" size="sm">
                      <a href="#contact">Contact Form</a>
                    </Button>
                  </div>
                </div>
              ),
            },
          ],
        },
      ],
    },
  ];

  const renderFileSystem = (files: FileType[], depth = 0) => {
    return (
      <ul className="space-y-1">
        {files.map((file) => (
          <li key={file.name} style={{ paddingLeft: `${depth * 16}px` }}>
            {file.type === "folder" ? (
              <div className="flex flex-col">
                <button
                  onClick={() => toggleFolder(file.name)}
                  className="flex items-center gap-2 py-1 px-2 hover:bg-gray-800 rounded-md w-full text-left"
                >
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      expandedFolders.includes(file.name) ? "rotate-90" : ""
                    }`}
                  />
                  {file.icon}
                  <span className="font-mono">{file.name}</span>
                </button>
                {expandedFolders.includes(file.name) && file.children && (
                  <div className="mt-1">
                    {renderFileSystem(file.children, depth + 1)}
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => openFile(file)}
                className="flex items-center gap-2 py-1 px-2 hover:bg-gray-800 rounded-md w-full text-left ml-6"
              >
                {file.icon}
                <span className="font-mono">{file.name}</span>
              </button>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section className="min-h-screen pt-16 bg-background flex items-center justify-center">
      <div
        className={`container mx-auto px-4 py-12 ${
          isMaximized
            ? "fixed inset-0 z-50 flex items-center justify-center bg-background/95"
            : ""
        }`}
      >
        <div
          className={`border border-gray-800 rounded-lg overflow-hidden shadow-2xl bg-gray-900/90 backdrop-blur-sm mx-auto ${
            isMaximized ? "w-[95%] h-[90vh]" : "max-w-5xl"
          }`}
        >
          {/* Window header */}
          <div className="bg-gray-950 px-4 py-3 flex items-center border-b border-gray-800">
            <div className="flex space-x-2">
              <button
                onClick={closeFile}
                className="w-3 h-3 rounded-full bg-red-500 flex items-center justify-center"
              >
                {selectedFile && (
                  <X className="h-2 w-2 text-red-800 opacity-0 group-hover:opacity-100" />
                )}
              </button>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <button
                onClick={toggleMaximize}
                className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center"
              >
                {isMaximized ? (
                  <Minimize2 className="h-2 w-2 text-green-800 opacity-0 group-hover:opacity-100" />
                ) : (
                  <Maximize2 className="h-2 w-2 text-green-800 opacity-0 group-hover:opacity-100" />
                )}
              </button>
            </div>
            <div className="mx-auto font-mono text-xs text-gray-400 flex items-center">
              <Terminal className="h-3 w-3 mr-2" />
              <span>{typedPath}</span>
              <span className="animate-pulse ml-1">_</span>
            </div>
          </div>

          <div className="flex h-[500px]">
            {/* Sidebar */}
            <div className="w-64 border-r border-gray-800 overflow-y-auto p-2 bg-gray-900/50">
              <div className="mb-4 p-2">
                <div className="flex items-center gap-2 mb-2">
                  <User className="h-5 w-5 text-blue-400" />
                  <h2 className="font-mono font-bold">Jabir Jaleel</h2>
                </div>
                <div className="text-xs text-muted-foreground font-mono">
                  Full-Stack Developer
                </div>
              </div>
              <div className="mb-2 px-2">
                <div className="text-xs uppercase text-gray-500 font-semibold tracking-wider">
                  Explorer
                </div>
              </div>
              {renderFileSystem(fileSystem)}
            </div>

            {/* Content area */}
            <div className="flex-1 overflow-y-auto p-6 bg-gray-900/30">
              {selectedFile ? (
                <div className="h-full">{selectedFile.content}</div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="mb-6">
                    <Code className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                    <h1 className="text-3xl font-bold mb-2 font-mono">
                      Jabir Jaleel
                    </h1>
                    <p className="text-muted-foreground text-lg">
                      Full-Stack Developer
                    </p>
                  </div>
                  <p className="max-w-md text-muted-foreground mb-8">
                    Welcome to my portfolio. Navigate through the file system to
                    learn more about me, my skills, and projects.
                  </p>
                  <div className="font-mono text-sm bg-black/20 p-4 rounded-md text-left">
                    <p className="text-green-400">
                      <span className="text-blue-400">$</span> ls -la ~/skills
                    </p>
                    <p className="text-gray-400">
                      drwxr-xr-x 1 jabir dev 4096 Mar 2 2025{" "}
                      <span className="text-blue-400">react</span>
                    </p>
                    <p className="text-gray-400">
                      drwxr-xr-x 1 jabir dev 4096 Mar 2 2025{" "}
                      <span className="text-blue-400">typescript</span>
                    </p>
                    <p className="text-gray-400">
                      drwxr-xr-x 1 jabir dev 4096 Mar 2 2025{" "}
                      <span className="text-blue-400">node</span>
                    </p>
                    <p className="text-gray-400">
                      drwxr-xr-x 1 jabir dev 4096 Mar 2 2025{" "}
                      <span className="text-purple-400">webrtc</span>
                    </p>
                    <p className="text-gray-400">
                      drwxr-xr-x 1 jabir dev 4096 Mar 2 2025{" "}
                      <span className="text-yellow-400">extensions</span>
                    </p>
                    <p className="text-green-400 mt-2">
                      <span className="text-blue-400">$</span> cat ~/status
                    </p>
                    <p className="text-gray-400">
                      Available for new opportunities
                    </p>
                    <p className="text-green-400 mt-2 animate-pulse">_</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Status bar */}
          <div className="bg-gray-950 px-4 py-2 border-t border-gray-800 flex justify-between items-center text-xs text-gray-400 font-mono">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Briefcase className="h-3 w-3" />
                <span>5 years exp</span>
              </div>
              <div className="flex items-center gap-1">
                <Code className="h-3 w-3" />
                <span>20+ projects</span>
              </div>
            </div>
            <div>
              <span className="text-green-400">●</span> Available for hire
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
