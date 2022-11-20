import parallax from "./modules/parallax.js";
import copyCode from "./modules/copy-code.js";

if ($(document).width() > 1024) {
    parallax();
}
copyCode();