import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import SectionTittle from '../../../components/shared/SectionTittle';
import { Container, Grid } from '@mui/material';
import CategoryCard from './CategoryCard';


import './customSwipe.css'
const categories=[
  {
    category:'Dogs',
    details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus reprehenderit enim facere possimus fuga ab maxime, inventore omnis praesentium. Iure quis nostrum beatae labore iste provident tempore unde repudiandae non!
    Voluptatibus reprehenderit impedit aspernatur exercitationem, voluptatum quo dolor, laudantium illo et nobis mollitia fuga? Cumque asperiores quisquam illum fugiat nemo excepturi incidunt corrupti delectus, aperiam optio odio in maiores rerum.
    Nesciunt culpa fugit explicabo, voluptatum molestias neque modi, architecto fugiat nemo consectetur illum est ducimus, officiis obcaecati quibusdam voluptate? Quae tenetur magni possimus sapiente quis maxime excepturi modi tempora corporis.
    Earum odit, aspernatur temporibus architecto esse repudiandae doloremque quidem voluptatum quas eos nobis iste similique laudantium illum. Perspiciatis tempore voluptatum quam distinctio laborum ea unde, necessitatibus quae, doloremque sed aut!`,
    image:'https://i.ibb.co/0fH4F8f/DOG.png'
  },  {
    category:'Fishes',
    details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus reprehenderit enim facere possimus fuga ab maxime, inventore omnis praesentium. Iure quis nostrum beatae labore iste provident tempore unde repudiandae non!
    Voluptatibus reprehenderit impedit aspernatur exercitationem, voluptatum quo dolor, laudantium illo et nobis mollitia fuga? Cumque asperiores quisquam illum fugiat nemo excepturi incidunt corrupti delectus, aperiam optio odio in maiores rerum.
    Nesciunt culpa fugit explicabo, voluptatum molestias neque modi, architecto fugiat nemo consectetur illum est ducimus, officiis obcaecati quibusdam voluptate? Quae tenetur magni possimus sapiente quis maxime excepturi modi tempora corporis.
    Earum odit, aspernatur temporibus architecto esse repudiandae doloremque quidem voluptatum quas eos nobis iste similique laudantium illum. Perspiciatis tempore voluptatum quam distinctio laborum ea unde, necessitatibus quae, doloremque sed aut!`,
    image:'https://i.ibb.co/g4XQ2sj/DOG.png'
  },  {
    category:'Spiders',
    details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus reprehenderit enim facere possimus fuga ab maxime, inventore omnis praesentium. Iure quis nostrum beatae labore iste provident tempore unde repudiandae non!
    Voluptatibus reprehenderit impedit aspernatur exercitationem, voluptatum quo dolor, laudantium illo et nobis mollitia fuga? Cumque asperiores quisquam illum fugiat nemo excepturi incidunt corrupti delectus, aperiam optio odio in maiores rerum.
    Nesciunt culpa fugit explicabo, voluptatum molestias neque modi, architecto fugiat nemo consectetur illum est ducimus, officiis obcaecati quibusdam voluptate? Quae tenetur magni possimus sapiente quis maxime excepturi modi tempora corporis.
    Earum odit, aspernatur temporibus architecto esse repudiandae doloremque quidem voluptatum quas eos nobis iste similique laudantium illum. Perspiciatis tempore voluptatum quam distinctio laborum ea unde, necessitatibus quae, doloremque sed aut!`,
    image:'https://i.ibb.co/0YjWxBM/DOG-3.png'
  },  {
    category:'Ants',
    details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus reprehenderit enim facere possimus fuga ab maxime, inventore omnis praesentium. Iure quis nostrum beatae labore iste provident tempore unde repudiandae non!
    Voluptatibus reprehenderit impedit aspernatur exercitationem, voluptatum quo dolor, laudantium illo et nobis mollitia fuga? Cumque asperiores quisquam illum fugiat nemo excepturi incidunt corrupti delectus, aperiam optio odio in maiores rerum.
    Nesciunt culpa fugit explicabo, voluptatum molestias neque modi, architecto fugiat nemo consectetur illum est ducimus, officiis obcaecati quibusdam voluptate? Quae tenetur magni possimus sapiente quis maxime excepturi modi tempora corporis.
    Earum odit, aspernatur temporibus architecto esse repudiandae doloremque quidem voluptatum quas eos nobis iste similique laudantium illum. Perspiciatis tempore voluptatum quam distinctio laborum ea unde, necessitatibus quae, doloremque sed aut!`,
    image:'https://i.ibb.co/MGX38rm/DOG-2.png'
  },  {
    category:'Birds',
    details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus reprehenderit enim facere possimus fuga ab maxime, inventore omnis praesentium. Iure quis nostrum beatae labore iste provident tempore unde repudiandae non!
    Voluptatibus reprehenderit impedit aspernatur exercitationem, voluptatum quo dolor, laudantium illo et nobis mollitia fuga? Cumque asperiores quisquam illum fugiat nemo excepturi incidunt corrupti delectus, aperiam optio odio in maiores rerum.
    Nesciunt culpa fugit explicabo, voluptatum molestias neque modi, architecto fugiat nemo consectetur illum est ducimus, officiis obcaecati quibusdam voluptate? Quae tenetur magni possimus sapiente quis maxime excepturi modi tempora corporis.
    Earum odit, aspernatur temporibus architecto esse repudiandae doloremque quidem voluptatum quas eos nobis iste similique laudantium illum. Perspiciatis tempore voluptatum quam distinctio laborum ea unde, necessitatibus quae, doloremque sed aut!`,
    image:'https://i.ibb.co/dgNmd7s/DOG-1.png'
  },  {
    category:'Lizards',
    details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus reprehenderit enim facere possimus fuga ab maxime, inventore omnis praesentium. Iure quis nostrum beatae labore iste provident tempore unde repudiandae non!
    Voluptatibus reprehenderit impedit aspernatur exercitationem, voluptatum quo dolor, laudantium illo et nobis mollitia fuga? Cumque asperiores quisquam illum fugiat nemo excepturi incidunt corrupti delectus, aperiam optio odio in maiores rerum.
    Nesciunt culpa fugit explicabo, voluptatum molestias neque modi, architecto fugiat nemo consectetur illum est ducimus, officiis obcaecati quibusdam voluptate? Quae tenetur magni possimus sapiente quis maxime excepturi modi tempora corporis.
    Earum odit, aspernatur temporibus architecto esse repudiandae doloremque quidem voluptatum quas eos nobis iste similique laudantium illum. Perspiciatis tempore voluptatum quam distinctio laborum ea unde, necessitatibus quae, doloremque sed aut!`,
    image:'https://i.ibb.co/g6KTSjX/DOG-4.png'
  },  {
    category:'cat',
    details: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus reprehenderit enim facere possimus fuga ab maxime, inventore omnis praesentium. Iure quis nostrum beatae labore iste provident tempore unde repudiandae non!
    Voluptatibus reprehenderit impedit aspernatur exercitationem, voluptatum quo dolor, laudantium illo et nobis mollitia fuga? Cumque asperiores quisquam illum fugiat nemo excepturi incidunt corrupti delectus, aperiam optio odio in maiores rerum.
    Nesciunt culpa fugit explicabo, voluptatum molestias neque modi, architecto fugiat nemo consectetur illum est ducimus, officiis obcaecati quibusdam voluptate? Quae tenetur magni possimus sapiente quis maxime excepturi modi tempora corporis.
    Earum odit, aspernatur temporibus architecto esse repudiandae doloremque quidem voluptatum quas eos nobis iste similique laudantium illum. Perspiciatis tempore voluptatum quam distinctio laborum ea unde, necessitatibus quae, doloremque sed aut!`,
    image:'https://i.ibb.co/xLXwZ55/Cat.png'
  }
]
const PetCategory = () => {
    return (
    <Grid>
    
    <SectionTittle tittle='Pet Category' desc="Pick Your Favorite pet by Category"></SectionTittle>
    <br />
    <Container sx={{marginX:'auto',padding:{xs:'4px',sm:'4px'}}}>
  <Swiper 
         breakpoints={{
          320: { slidesPerView: 1, spaceBetween:40 },
          480: { slidesPerView: 2, spaceBetween: 40 },
          768: { slidesPerView: 3, spaceBetween: 40 },
          1024: { slidesPerView: 4, spaceBetween:40 },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
    

{categories.map(category =><SwiperSlide key={category.category}><CategoryCard category={category.category} image={category.image} details={category.details}></CategoryCard></SwiperSlide>)}
</Swiper>
  </Container>
  </Grid>);
};

export default PetCategory;