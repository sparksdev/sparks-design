# SPARKS Design

This repository is the source of all SPARKS design considerations. It servers to provide a wholesome view of the Design System, Assets, CSS Library.

### Design System

The design system uses Figma to define guidance for all branding and UI. Link to the Figma project will follow.

### Design Assets

Raw assets found in `/assets`. Assets specific to the brand such as logos, banners and iconography. 

### CSS Library

CSS defined in `/css` folder. Leveraging classless CSS and variables for accessibility and ease of use.

### Storybook

Storybook is used to quickly view everything in one place. It brings in the Design System, Assets and CSS together in a single view. 

## Get Started

- clone this repo and enter the directory
- install dependencies `yarn install` or `npm install`
- run `yarn storybook` or `npm run storybook` 
- visit the local server shown in terminal e.g. `http://localhost:6000`

## Bundling CSS

- run `yarn build-css` or `npm run build-css`
- css is bundled from the `/css` into `/dist`
- `style.css` OR `style.min.css` can be imported 