
import { button } from "./button-schema";
import { buttonsModule } from "./buttons-module";
import { imageModule } from "./image-module";
import section from "./section-schema";
import { textModule } from "./text-module";
import { videoModule } from "./video-module";

const schemas = [
    section, 
    textModule,
    imageModule, 
    videoModule,
    buttonsModule,
    button
];

export default schemas;
