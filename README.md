<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
- [💻 Getting Started](#getting-started)
  - [Install](#install)
  - [Usage](#usage)
- [👥 Author](#author)

<!-- PROJECT DESCRIPTION -->

# 📖 <a name="about-project"></a>

**Country Info App** is a application that allows the user to see information about different countries, manly, The population change over time and its flag.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://react.dev/">React.js</a></li>
    <li><a href="https://nextjs.org/">Next.js</a></li>
    <li><a href="https://www.tailwindcss.com/">TailwindCSS</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://nodejs.org/en">Node.js</a></li>
    <li><a href="https://nestjs.com/">Nest.js</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **API Endpoint to featch a list of countries**
- **API Endpoint to search informationa about one specific country, like its borders, flag and population data**
- **Responsive Frontend Design**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Install <a name="install"></a>

Clone the repository:

```bash
 git clone https://github.com/IsmaelMastronardi/developstoday_task.git
 cd developstoday_task
 code .
```

### Usage <a name="usage"></a>

The app consists of 2 folders, back_end and front_end

***frontend***
- Install the dependencies for the front_end:

  ```bash
    cd front_end
    npm install
  ```	

- Create a .env.local file in the front_end directory and add:

  ```bash
    NEXT_PUBLIC_API_URL=http://localhost:3000
  ```

- Run the front_end app:

  ```bash
    npm run build
    npm start
  ```
***backend***
- Install the dependencies for the backend:

  ```bash
    cd back_end
    npm install
  ```	

- Create a .env file in the back_end directory and add:

  ```bash
  NAGER_API=https://date.nager.at/api/v3
  NOW_API=https://countriesnow.space/api/v0.1/countries
  ```

- Run the back_end app:

  ```bash
    npm run start
  ```


<!-- AUTHOR -->

## 👥 Author <a name="author"></a>

👤 **Ismael Mastronardi**

- GitHub: [IsmaelMastronardi](https://github.com/IsmaelMastronardi)
- LinkedIn: [Ismael Mastronardi](https://www.linkedin.com/in/ismael-mastronardi-361873271/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>
