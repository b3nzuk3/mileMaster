import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import axios from "axios";

// Vite plugin to handle API routes in development
function apiRoutesPlugin() {
  return {
    name: "api-routes",
    configureServer(server) {
      server.middlewares.use("/api/google-reviews", async (req, res, next) => {
        if (req.method !== "GET") {
          return next();
        }

        const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
        const PLACE_ID = process.env.GOOGLE_PLACE_ID;

        if (!GOOGLE_PLACES_API_KEY || !PLACE_ID) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              error:
                "Missing API key or Place ID in environment variables.",
            })
          );
          return;
        }

        try {
          const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`;
          const response = await axios.get(url);
          const reviews = response.data.result.reviews || [];
          const rating = response.data.result.rating || null;
          const user_ratings_total =
            response.data.result.user_ratings_total || null;

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ reviews, rating, user_ratings_total }));
        } catch (error) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              error: "Failed to fetch Google reviews",
              details: error.message,
            })
          );
        }
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && apiRoutesPlugin(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
