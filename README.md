# Yassir Test

In this test, I am required to build a simple application that displays upcoming reservations,
so that they I take action on them.

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/bamoha/ya-test.git
```

2. Install dependencies

```bash
npm i
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) with your browser to see the result.

## Deployment

The application is deployed to [https://lustrous-palmier-5d1b56.netlify.app/](https://lustrous-palmier-5d1b56.netlify.app/) with your browser to see the result.

## Stack

1. React
2. Chakra UI


## Design Decisions

1. I decided to build this application with react js because its fast to get started with and I am able to leverage on react's built in components.
2. I also decided to use Chakra UI, because its a UI component library and I am able to pick out some already styled components and give it my own style specifications.
3. I displayed the reservation list as a table because it is visually easier to see data in a table.
4. I implemented a sort that works when you click on the arrows on any of the table heads that has an arrow on it.
5. I added a button to help customise the amount of data that is displayed on the table so that the table is not crowded all the time.
6. I created an AppTable component that takes in a data prop and a dataSchema prop, the data prop is the data meant to be displayed, the dataSchema prop is the schema that dictates how the data should be displayed.
7. I implemented a filter that filters when you select filters and click on the "filter" button, you can also clear the filter by clicking on the "Clear" button.
8. I made sure that the application is fully responsive.

- Scenario: Display the reservations as a list;
The reservations were displayed in a table format.

- Scenario: Filter reservations
Filters were created, you select a filter and you click on the filter button to apply your filters

- Scenario: Sort reservations
A sorting mechanism was created, it applies to any table elements that has the isSortable value on its schema.

- Scenario: Search by name and surname
An input field exists to help search by name and surname

The project was bundled and created with Vite.