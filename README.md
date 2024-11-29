# ReactJS-Virtualized-Render-Optimized
A repository dedicated to exploring and understanding ReactJS render optimization techniques for large datasets, utilizing the powerful react-virtualized library.

# Screen-Demo
Rendering list of accordions with data collected from Faker library

<!-- <img src="https://github.com/user-attachments/assets/51debe57-ca40-4aad-a42a-f94f30f50c3c"/> -->
<img src="https://github.com/user-attachments/assets/d34e1158-aa41-47b0-a1ba-11cf1528fc21"/>

## Images
# Open an Accordion: Explore UserData
![image](https://github.com/user-attachments/assets/c55f306a-8f2f-406a-aa50-651ed89c220b)



# Goals

- Demonstrate efficient rendering of thousands to millions of data points using react-virtualized
- Explore various optimization techniques, such as windowing, infinite scrolling, and caching
- Provide a comprehensive guide for developers to implement render optimization in their own React applications

# Features

- Examples of optimized rendering for various data types (e.g., lists, grids, tables)
- Step-by-step tutorials and explanations of optimization techniques
- Performance benchmarking and comparison of different optimization approaches
- A showcase of real-world use cases and applications

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ashikrai/ReactJS-Virtualized-Render-Optimized.git
   ```
   
   ```bash
   cd ReactJS-Virtualized-Render-Optimized
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Run the development server:
   ```bash
   npm run dev
   ```

   This will start the application and you can view it in your browser at `http://localhost:5173`.

2. Build the application for production:
   ```bash
   npm run build
   ```

   This will create an optimized production build in the `build` folder.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.

## Folder Structure

```
imageGallery/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│       ├── css   (CSS styling)
│       ├── images (img resources e.g: logo)
│       ├── interfaces (interface definition for Typescript)
│   ├── Components/
│   │   ├── HeaderComponent.tsx
│   │   ├── ImageCard.tsx
│   │   └── ...
│   ├── Utils/
│   │   ├── AccordionItem.tsx   (For each Accordion Item)
│   │   ├── AccordionList.tsx    (For rendering list of Accordions)
│   │   ├── Footer.tsx (For Footer)
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   └── ...
├── package.json
├── tsconfig.json
└── ...
```

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React-Virtualized](https://github.com/bvaughn/react-virtualized)
- [Faker-Library](https://v9.fakerjs.dev/)
- [React-Window](https://github.com/bvaughn/react-window)

## Contact

For any inquiries or feedback, please reach out at [ashikthulungrai7@gmail.com](mailto:ashikthulungrai7@gmail.com).

# Let's optimize those renders!
