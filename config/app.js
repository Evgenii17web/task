const isProd = process.argv.includes("--production");
const isDev = !isProd;

export default {
    isProd: isProd,
    isDev: isDev,
    htmlMin: {
        collapseWhitespace: isProd
    },
    webpack: {
        mode: isProd ? "production" : "development"
    },
    fonter: {
        formats: ["woff", "eot"]
    }
}