# Airtable timeline assignment

## High level objective:

Design and implement a component for visualizing items on a timeline.

## Questions

1. What you like about your implementation?

   I believe the timeline and lanes are well structured, featuring a modern UI. The vertical guide lines above each day help users easily track the position of each item.

2. What you would change if you were going to do it again.

    If I were to do it again and had more time, I would definitely improve the UX of the timeline in the following aspects: 
    - Timeline Navigation: allowing users to navigate with buttons
    - Zoom: allowing users to zoom in and out based on their mouse position and add buttons to zoom in/out
    - Make a responsive version for mobile

3. How you made your design decisions. For example, if you looked at other timelines for inspiration, please note that.

    I took inspiration from GitHub Projects, which includes an option to visualize tasks as a roadmap.

4. How you would test this if you had more time.

    - I would implement tests (unit + integration) to ensure that the items are rendered in the correct lanes and positions based on their dates.
    - I would test the component manually across different screen sizes and browsers to ensure responsiveness. I’d also verify accessibility and interaction with keyboard/mouse.
    - I'd test performance with a large number of items and edge cases like overlapping events, very short or long durations, and invalid dates.

    

## How to run:

1. Navigate to this project directory
2. Run `npm install` to install dependencies
3. Run `npm run dev` to initialize and connect to a node server with your default browser
4. Access the app on `http://localhost:5173`
