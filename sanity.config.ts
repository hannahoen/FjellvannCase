import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './sanity/schemas';

const config =  defineConfig({
    projectId: "kntgo27r", 
    dataset: "production",
    name: "fjellvann-case",
    title: "Fjellvann Case",
    apiVersion: "2024-02-21",
    basePath: "/admin",
    plugins: [
        structureTool()
    ],
    schema: {types: schemas}
})

export default config;
