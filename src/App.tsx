import { Toaster } from "@/components/ui/sonner";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Layout } from "./components/Layout";
import { getServiceBySlug, servicesData } from "./data/services";
import { HomePage } from "./pages/HomePage";
import { QualifyPage } from "./pages/QualifyPage";
import { ServicePage } from "./pages/ServicePage";

// --- Root route ----------------------------------------------------------------
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "oklch(0.13 0.008 260)",
            border: "1px solid oklch(75% 0.14 85 / 0.3)",
            color: "oklch(0.96 0.005 95)",
          },
        }}
      />
      <Layout />
    </>
  ),
});

// --- Homepage route ------------------------------------------------------------
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

// --- Service pages -------------------------------------------------------------
const serviceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/$slug",
  component: function ServiceRouteComponent() {
    const { slug } = serviceRoute.useParams();
    const service = getServiceBySlug(slug);

    if (!service) {
      return (
        <div className="min-h-screen bg-surface-1 flex items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="heading-display text-4xl text-white mb-4">
              Service Not Found
            </h1>
            <p className="text-white/50 font-body mb-8">
              The service you're looking for doesn't exist.
            </p>
            <a
              href="/"
              className="btn-gold-gradient inline-flex items-center gap-2 px-6 py-3 rounded-md font-heading font-bold tracking-wide uppercase"
            >
              Back to Home
            </a>
          </div>
        </div>
      );
    }

    return <ServicePage service={service} />;
  },
});

// Individual service routes (for type-safe navigation)
const serviceRoutes = servicesData.map((service) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: `/services/${service.slug}`,
    component: () => <ServicePage service={service} />,
  }),
);

// --- Qualify route -------------------------------------------------------------
export const qualifyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/qualify",
  validateSearch: (search: Record<string, unknown>) => ({
    program: typeof search.program === "string" ? search.program : "",
  }),
  component: QualifyPage,
});

// --- Router --------------------------------------------------------------------
const routeTree = rootRoute.addChildren([
  indexRoute,
  serviceRoute,
  ...serviceRoutes,
  qualifyRoute,
]);

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
