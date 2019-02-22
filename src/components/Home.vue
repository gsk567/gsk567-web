<template>
  <div id="home-page">
    <vue-headful 
      title="gsk567 • Georgi Karagogov" 
      description="The official website of Georgi Karagogov"
      image="https://cdn.gsk567.com/images/logo.jpg"/>
    <section id="main-section">
        <div class="title-container">
          <h2 class="title">gsk567</h2>
        </div>
    </section>
    <section id="section-sb">
      <div class="wrap">
          <div class="section-content float-right">
            <h2>SMART BUSINESS</h2> 
            <p>Nowadays, people often search for the right idea for their own business. Primarily driven by money, they cannot realize what opportunity is missed when digital aspects are skipped.</p>
          </div>                     
      </div>
    </section>
    <section>
    <section id="pros">
        <h2 class="title">Quality over quantity</h2>
        <div class="row m-0">
          <div class="pros-box col-md-6 col-lg-4 col-12" :key="index" v-for="(p, index) in pros">
            <div class="row m-0">
              <div class="pros-icon col-2">
                <img :src="p.image"/>
              </div>
              <div class="pros-content col-10">
                <h4>{{p.title}}</h4>
                <p>{{p.description}}</p>
              </div>
            </div>
          </div>
        </div>
    </section>
    </section>
    <section id="section-cd">
        <div class="wrap">
          <div class="section-content">
            <h2>CREATIVE DESIGN</h2> 
            <p>Appearance is often disregarded in favour of other features. People pay too much attention to the creativity and functionality of the product and tend to forget that the design is what attracts people.</p>
          </div>                     
        </div>
    </section>
    <section id="testimonials">
        <h2 class="title">Testimonials</h2>
        <div class="w-100 pl-4 pr-4 row m-0">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="col-12 col-md-4 pb-2 pt-2 testimonial-card">
                <div class="card p-0">
                    <div class="card-body m-0 p-2">
                        <p><img :src="testimonial.avatar" class="avatar-img"/> <span class="testimonial-text">{{testimonial.text}}</span></p>
                        <p class="testimonial-info">{{testimonial.name}}, {{testimonial.title}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
    export default {
      data() {
            return {
                pros: [
                  {
                    "title": "Top Frameworks",
                    "description": "Each product is powerful when the technologies behind it are with large and knowledgable community.",
                    "image": "https://cdn.gsk567.com/images/top-frameworks.png"
                  },
                  {
                    "title": "Suitable Architecture",
                    "description": "Every idea has different specification so different solution for success.",
                    "image": "https://cdn.gsk567.com/images/suitable-architecture.png"
                  },
                  {
                    "title": "Best Practices",
                    "description": "Patterns are made to be followed. The application counts on that.",
                    "image": "https://cdn.gsk567.com/images/best-practices.png"
                  },
                  {
                    "title": "Clean Code",
                    "description": "Quality of a product depends on quality of all building elements including the minor one - code.",
                    "image": "https://cdn.gsk567.com/images/clean-code.png"
                  },
                  {
                    "title": "Powerful UX/UI",
                    "description": "The application is defined by its functionality but it is nothing without its visual presentation.",
                    "image": "https://cdn.gsk567.com/images/powerful-uiux.png"
                  },
                  {
                    "title": "Digital Marketing",
                    "description": "If the application will be shown on the big scene it is important to be presented on the audience.",
                    "image": "https://cdn.gsk567.com/images/digital-marketing.png"
                  }
                ],
                testimonials: [
                  {
                    "name": "Dilyan Ivanov",
                    "title": "Brand Manager @ InterGlass",
                    "avatar": "https://cdn.gsk567.com/images/avatar-di.jpg",
                    "text": "Georgi is a tech and design sorcerer! It’s rare to come across such talent with diverse skills and powerful knowledge, so I consider myself lucky for working with him. What I value the most in business is on-point communication and neat results. Our mutual projects achieved both."
                  },
                  {
                    "name": "Yordan Yordanov",
                    "title": "Founder @ PixitGroup",
                    "avatar": "https://cdn.gsk567.com/images/avatar-yy.jpg",
                    "text": "We worked with Georgi on several web development projects for our clients that needed quick and professional execution and he surpassed our expectations. He's very hardworking, cooperative and always strives for the best results. I recommend him to anyone who wants their projects made well and  on time!"
                  },
                  {
                    "name": "Polina Milanova",
                    "title": "Founder @ Chakumche",
                    "avatar": "https://cdn.gsk567.com/images/avatar-pm.jpg",
                    "text": "My work with Georgi was pleasant and fruitful. As a performer of a project without an exact plan for success, Georgi succeeded to form and express my ideas in the best way. He was very responsible and active and his ideas and bits of advice were in the same direction as my vision for the project. He took the responsibility to finish his jobs on time. In critical moments - his reaction was fast and proper. I know that he is a person who I rely on."
                  }
                ]
            }
      },
    }
</script>

<style>
#home-page {
  float: left;
  display: block;
}

.cover{
	position: relative;
  width: 100%;
	height: 100%;
	background: #fff;
  float: left;
}

.section-content {
  width: 65%;
	height: auto;
	float: left;
}

.section-content h2 {
  padding: 45px;
	font-size: 63px;
	color: #000;
	font-weight: 300;
	margin-top: 100px;
	background: rgba(255,255,255,0.7);
	-webkit-transition: all 1s ease-out;
	-moz-transition: all 1s ease-out;
	-o-transition: all 1s ease-out;
	transition: all 1s ease-out;
}

.section-content p {
  color: #FFFFFF;
	font-size: 22px;
	font-weight: 200;
	padding: 45px;
	line-height: 1.3;
	background: rgba(0,0,0,0.7);
	margin-bottom: 100px;
	-webkit-transition: all 1s ease-out;
	-moz-transition: all 1s ease-out;
	-o-transition: all 1s ease-out;
	transition: all 1s ease-out;
}

#section-sb{
	position:relative;
	width: 100%;
	height: auto;
	float: left;
	background-image: url('https://cdn.gsk567.com/images/hp-img2.jpg');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	z-index:1;
}

#section-cd{
	position:relative;
	width: 100%;
	height: auto;
	float: left;
	background-image: url('https://cdn.gsk567.com/images/hp-img3.jpg');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	z-index:1;
}

#pros {
  float: left;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
}

#pros .title {
  font-size: 33px;
  padding-bottom: 30px;
  font-weight: bold;
  text-align: center;
}

#main-section {
  background-image: url('https://cdn.gsk567.com/images/logo.svg');
  background-size: contain;
  margin: 30px;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 300px;
  display: flex;
}

#main-section .title-container {
    margin: auto;
    text-align: center;
}

#main-section .title-container .title {
    margin: auto;
    text-align: center;
    display: block;
    font-size: 35px;
    font-weight: bold;
    color: #fff;
    background: #dd3333;
    padding: 5px;
    -webkit-text-shadow: 0 2px 5px rgba(0, 0, 0, 0.56);
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.56);
}

#main-section .title img {
  width: 100%;
}

.pros-box {
  margin-bottom: 30px;
}

.pros-icon {
  width: 50px;
  padding: 0px;
  text-align: right;
}

.pros-content {
  width: auto;
  text-align: left;
}

.pros-icon img {
  width: 50px;
}

.pros-content h4 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}

.pros-content p {
  font-size: 13px;
  font-weight: bold;
  line-height: 16px;
}

#testimonials {
  float: left;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
}

#testimonials .avatar-img {
  float: left;
  width: 54px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
}

#testimonials .title {
  font-size: 33px;
  padding-bottom: 30px;
  font-weight: bold;
  text-align: center;
}

.testimonial-card .card {
  border: none;
}

.testimonial-text {
  font-size: 13px;
  font-weight: bold;
}

.testimonial-info {
  font-size: 12px;
  margin-top: 10px;
  text-align: right;
  width: 100%;
  font-weight: bold;
  font-style: italic;
}

@media only screen and (max-width: 767px) {
    .section-content {
        width: 100%;
    }

    .section-content h2 {
        padding: 15px;
        font-size: 28px;
        font-weight: bold;
    }

    .section-content p {
        padding: 15px;
        font-size: 20px;
    }
}
</style>