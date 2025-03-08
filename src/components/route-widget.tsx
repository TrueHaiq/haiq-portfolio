"use client";

import { usePathname, useRouter } from "next/navigation";

const routes = [
  {
    title: "Home",
    path: "/",
    icon: "🏠",
  },
];

const RouteWidget = ({ className }: { className?: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const navigate = (path: string) => {
    router.push(path);
  };

  return (
    <div
      className={`flex items-center sticky bottom-2 bg-muted font-semibold
        p-2 px-2 rounded-full ${className}`}
    >
      {routes.map((route, i) => {
        if (route.title == "NotFound") return;

        return (
          <button
            title={route.title}
            key={i}
            onClick={() => navigate(route.path)}
            className={`px-3 p-2 sm:p-1 rounded-full
                cursor-pointer transition-all duration-200 ${
                  pathname.toLowerCase() == route.path.toLowerCase()
                    ? "bg-muted-foreground/20"
                    : "hover:text-primary/50"
                }`}
          >
            <span className="hidden sm:inline px-2">{route.title}</span>
            <span className="sm:hidden">{route.icon}</span>
          </button>
        );
      })}
    </div>
  );
};

export default RouteWidget;
