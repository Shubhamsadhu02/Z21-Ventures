import React from 'react'
import Footer from '../partials/Footer'

import Sidebar from '../partials/Sidebar';

let partners = [
    {
        image: "satyajit.png",
        name: "Satyajit M. Menon",
        linkdln: "https://www.linkedin.com/in/satyajitm"
    },
    {
        image: "shantanu.png",
        name: "Shantanu Kumar",
        linkdln: "https://www.linkedin.com/in/shantanu-kumar-091a703/"
    },
    {
        image: "Abhay.png",
        name: "Abhay Kumar",
        linkdln: "linkedin.com/in/abhay-kumar-4b554835"
    },
    {
        image: "Sandeep.png",
        name: "Sandeep K Bhat",
        linkdln: "https://www.linkedin.com/in/sandeepbhat"
    },
    {
        image: "Arindam.png",
        name: "Arindam Sharma",
        linkdln: "linkedin.com/in/arindamsharma"
    },
    {
        image: "Himavanth.png",
        name: "Himavanth Myneni",
        linkdln: "https://www.linkedin.com/in/himavanth-myneni-9b064038"
    },
    {
        image: "Evan.png",
        name: "Evan Grossman",
        linkdln: "https://linkedin/in/evangrossman"
    },
    {
        image: "Aaditya.png",
        name: "Aaditya Raut",
        linkdln: "https://www.linkedin.com/in/aadityaraut"
    },
    {
        image: "Vivek_1.png",
        name: "Vivek Vipul",
        linkdln: "https://www.linkedin.com/in/vivek-vipul-64725b"
    },
    {
        image: "Vivek_2.png",
        name: "Vivek Thunga",
        linkdln: "https://www.linkedin.com/in/vivekanandatd"
    },
    {
        image: "Rasna.png",
        name: "Rasna Goenka",
        linkdln: "https://www.linkedin.com/in/rasnagoenka/"
    },
    {
        image: "Siddharth.png",
        name: "Siddharth Bajpai",
        linkdln: "https://www.linkedin.com/in/siddharth-bajpai-bb32185/"
    },
    {
        image: "Akhter.png",
        name: "Akhter Mubarki",
        linkdln: "https://www.linkedin.com/in/akhterhemayoun/"
    },
    {
        image: "Anand.png",
        name: "Anand Akela",
        linkdln: "https://www.linkedin.com/in/anandakela/"
    },
    {
        image: "Avanish.png",
        name: "Avanish Mehrotra",
        linkdln: "linkedin.com/in/avanishmehrotra"
    },
    {
        image: "Rohit.png",
        name: "Rohit Kumar Jain",
        linkdln: "https://www.linkedin.com/in/rohit-j-44438314/"
    },
    {
        image: "Debkishore.png",
        name: "Debkishore Mitra",
        linkdln: "https://www.linkedin.com/in/debkishoremitra/"
    },
    {
        image: "Arun.png",
        name: "Arun K. Buduri",
        linkdln: "https://www.linkedin.com/in/arun-k-buduri-1676927/"
    },
    {
        image: "Rakshay.png",
        name: "Rakshay Jain",
        linkdln: "https://www.linkedin.com/in/rakshay-jain-19a7a32/"
    },
    {
        image: "Leena.png",
        name: "Leena Shekhar",
        linkdln: "https://www.linkedin.com/in/leena-shekhar/"
    },
    {
        image: "Kaustubh.png",
        name: "Kaustubh Gururaj",
        linkdln: "https://www.linkedin.com/in/kaustubh-gururaj-62b65945"
    },
    {
        image: "Vivek_3.png",
        name: "Vivek Mishra",
        linkdln: "https://www.linkedin.com/in/vivek-mishra-723a7b17/"
    },
    {
        image: "Irene.png",
        name: "Irene Logis",
        linkdln: "https://www.linkedin.com/in/irenebrian/"
    },
    {
        image: "Satya.png",
        name: "Satya Bajpai",
        linkdln: "https://www.linkedin.com/in/bajpais/"
    },
    {
        image: "Aaron.png",
        name: "Aaron Sin",
        linkdln: "https://www.linkedin.com/in/aaronsin"
    },
    {
        image: "Aravind.png",
        name: "Aravind Ratnam",
        linkdln: "https://www.linkedin.com/in/aravindratnam/"
    },
    {
        image: "Adwait.png",
        name: "Adwait Gore",
        linkdln: "https://www.linkedin.com/in/adwaitgore/"
    },
    {
        image: "Vinod.png",
        name: "Vinod Vishwakarma",
        linkdln: "https://www.linkedin.com/in/vinodvishwakarma"
    },
    {
        image: "Vijay.png",
        name: "Vijay Kamble",
        linkdln: "https://www.linkedin.com/in/vijay-kamble-07260097"
    },
    {
        image: "Varun_1.png",
        name: "Varun Dhawan",
        linkdln: "linkedin.com/in/varundhawan5792"
    },
    {
        image: "Rishit.png",
        name: "Rishit Lakhani",
        linkdln: "https://www.linkedin.com/in/rishitlakhani"
    },
    {
        image: "Saniya.png",
        name: "Saniya Chawla",
        linkdln: "https://www.linkedin.com/in/saniya-chawla/"
    },
    {
        image: "Arka.png",
        name: "Arka Bhattacharya",
        linkdln: "https://www.linkedin.com/in/arka-bhattacharya-9609926/"
    },
    {
        image: "Varun_2.png",
        name: "Varun Mishra",
        linkdln: "https://www.linkedin.com/in/varun-mishra-55552420/"
    },
    {
        image: "Ravi.png",
        name: "Ravi Thadani",
        linkdln: "Https://www.linkedin.com/in/ravithadani"
    },
    {
        image: "Sunil.png",
        name: "Sunil Amin",
        linkdln: "https://www.linkedin.com/in/suamin1/"
    },
    {
        image: "Vikram.png",
        name: "Vikram Ramesh",
        linkdln: "https://linkedin.com/in/vikramesh"
    },
    {
        image: "Aayush.png",
        name: "Aayush Kumar",
        linkdln: "https://www.linkedin.com/in/aayushkumarjarvis/"
    },
    {
        image: "paul.png",
        name: "R Paul Singh",
        linkdln: "https://www.linkedin.com/in/rpaulsingh"
    },
    {
        image: "piyush.png",
        name: "Piyush Agarwal",
        linkdln: "https://www.linkedin.com/in/piyush-agarwal-21244213/"
    },
    {
        image: "akhilesh.png",
        name: "Akhilesh Gupta",
        linkdln: "https://www.linkedin.com/in/akgup/"
    },
    {
        image: "ruchi.png",
        name: "Ruchi Garg",
        linkdln: "http://www.linkedin.com/in/ruchigargmd"
    },
    {
        image: "pallaw.png",
        name: "Pallaw Sharma",
        linkdln: "https://www.linkedin.com/in/pallaw-sharma-b803a12/"
    }
];

let currentItem = 6;

export default function Community() {
    return (
        <>
            <Sidebar />

            <section className='partner' style={{ background: "#F9FAFA", padding: "150px 100px" }}>
                <div className="container">
                    <div className="partner-header text-center">
                        <h1>Z21 Community</h1>
                    </div>
                    <div className="row" style={{ rowGap: "50px", marginTop: "5rem" }}>
                    {
                        partners.map((item, index) => {
                            return (
                               
                                    <div className="partner-list__container col-sm-12 col-md-4 col-lg-4">
                                        <div className="partner-list">
                                            <div className="partner-img">
                                                <img src={`/images/community/${item.image}`} alt={item.image} />
                                            </div>
                                            <div className="partner-name mt-4">
                                                <h3>{item.name}</h3>
                                            </div>
                                            <div className="partner-linkdn">
                                                <a href={item.linkdln} target="__blank"><i class="fab fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                            );
                        })
                    }
                    </div>

                    <div className="view-more mt-5 d-flex justify-content-center">
                        <button type='button' id='view-more' className='view-more__btn' onClick={loading}>View More</button>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}


function loading(){
    
    let partners_list=[...document.querySelectorAll('.partner-list__container')];
    for(var i=currentItem; i<currentItem+6; i++){
        partners_list[i].style.display='flex';
    }
    currentItem+=6;

    let viewMoreBtn= document.querySelectorAll('.view-more__btn');
    if(currentItem>=partners_list.length){
        viewMoreBtn.style.display='none';
    }
}