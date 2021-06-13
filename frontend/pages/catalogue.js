import Head from "next/head";
import Container from "../components/Container";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Autobrite International | Catalogue</title>
        <meta
          name="description"
          content="Autobrite International is manufacturer of Auto Electrical parts"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <h1 className="text-4xl mb-5">Welcome to Catalogue</h1>
        </Container>

        <section class="text-gray-600 body-font">
          <div class="container px-5 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/420x260"
                  />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p class="mt-1">$16.00</p>
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/421x261"
                  />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    Shooting Stars
                  </h2>
                  <p class="mt-1">$21.15</p>
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/422x262"
                  />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    Neptune
                  </h2>
                  <p class="mt-1">$12.00</p>
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/423x263"
                  />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    The 400 Blows
                  </h2>
                  <p class="mt-1">$18.40</p>
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/424x264"
                  />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p class="mt-1">$16.00</p>
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/425x265"
                  />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    Shooting Stars
                  </h2>
                  <p class="mt-1">$21.15</p>
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/427x267"
                  />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    Neptune
                  </h2>
                  <p class="mt-1">$12.00</p>
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/428x268"
                  />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    The 400 Blows
                  </h2>
                  <p class="mt-1">$18.40</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
