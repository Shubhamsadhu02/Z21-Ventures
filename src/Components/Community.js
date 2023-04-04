import React from 'react'
import Footer from '../partials/Footer'

import Sidebar from '../partials/Sidebar';
let partners = [
    {
        image: "Adhithi Shweta Adhi.png",
        name: "SAdhithi Shweta Adhi",
        postion: "GM and business leader at Invoice2Go",
        linkdln: "https://www.linkedin.com/in/adhithi-shwetha-adhi-a539958/"
    },
    {
        image: "Mukul Agarwal.png",
        name: "Mukul Agarwal",
        postion: "Founder & CEO at BootUP",
        linkdln: "https://www.linkedin.com/in/agarwalmukul/"
    }
    ,
    {
        image: "Anand Akela.png",
        name: "Anand Akela",
        postion: "Founder & CEO at BootUP",
        linkdln: "https://www.linkedin.com/in/anandakela/"
    }
    ,
    {
        image: "Sunil Amin.png",
        name: "Sunil Amin",
        postion: "Sr Manager - Digital Transformation",
        linkdln: "https://www.linkedin.com/in/suamin1/"
    }
    ,
    {
        image: "Mike Anand.png",
        name: "Mike Anand",
        postion: "CMO at Redis",
        linkdln: "https://www.linkedin.com/in/mikeanand/"
    }
    ,
    {
        image: "Manish Arora.png",
        name: "Manish Arora",
        postion: "EVP Product and Technology at Equifi",
        linkdln: "https://www.linkedin.com/in/emanisharora/"
    }
    ,
    {
        image: "Satyarth Bajpai.png",
        name: "Satyarth Bajpai",
        postion: "MD, Technology M&A, JMP",
        linkdln: "https://www.linkedin.com/in/bajpais/"
    }
    ,
    {
        image: "Ankit Bhangar.png",
        name: "Ankit Bhangar",
        postion: "Risk Management Leader, Barclays",
        linkdln: "https://www.linkedin.com/in/ankitbhangar/"
    }
    ,
    {
        image: "Sandeep Kumar Bhat.png",
        name: "Sandeep Kumar Bhat",
        postion: "Founder Wincere, GM Life Sciences ",
        linkdln: "https://www.linkedin.com/in/sandeepbhat/overlay/photo/"
    }
    ,
    {
        image: "Arka Aloke Bhattacharya.png",
        name: "Arka Aloke Bhattacharya",
        postion: "Senior Software Engineer at Google",
        linkdln: "https://www.linkedin.com/in/arka-bhattacharya-9609926/"
    }
    ,
    {
        image: "Arun Buduri.png",
        name: "Arun Buduri",
        postion: "VP Engineering Innovaccer",
        linkdln: "https://www.linkedin.com/in/arun-k-buduri-1676927/"
    }
    ,
    {
        image: "Saniya Chawla.png",
        name: "Saniya Chawla",
        postion: "Director, Corporate Strategy & Dev.",
        linkdln: "https://www.linkedin.com/in/saniya-chawla/"
    }
    
    ,
    {
        image: "Krishna K Chittabathini.png",
        name: "Krishna K Chittabathini",
        postion: "Founder and CEO 3K Technologies",
        linkdln: "https://www.linkedin.com/in/krishnac/"
    }
    ,
    {
        image: "Sri Harsha Dandibhotla.png",
        name: "Sri Harsha Dandibhotla",
        postion: "Software Engineer at Addepar",
        linkdln: "https://www.linkedin.com/in/dsriharsha/"
    }
    ,
    
    {
        image: "Shouvik Das.png",
        name: "Shouvik Das",
        postion: "Consultant at Bain",
        linkdln: "https://www.linkedin.com/in/das-shouvik/"
    }
    ,
    {
        image: "Varun Dhawan.png",
        name: "Varun Dhawan",
        postion: "Head of Design, Innovacer",
        linkdln: "https://www.linkedin.com/in/varundhawan5792/"
    }
    ,
    {
        image: "Soman Easaw.png",
        name: "Soman Easaw",
        postion: "Information Systems Manager",
        linkdln: "https://www.linkedin.com/in/somaneasaw/"
    }
    ,
    {
        image: "Ruchi Garg.png",
        name: "Ruchi Garg",
        postion: "Program Director, Cancer Treatment",
        linkdln: "https://www.linkedin.com/in/ruchigargmd/"
    }
    ,
    {
        image: "Rasna Goenka.png",
        name: "Rasna Goenka",
        postion: "Sr Product Manager, Alexa",
        linkdln: "https://www.linkedin.com/in/rasnagoenka/",
    }
    ,
    {
        image: "Adwait Gore.png",
        name: "Adwait Gore",
        postion: "VP Operations, Innovacer",
        linkdln: "https://www.linkedin.com/in/adwaitgore/"
    }
    ,
    {
        image: "Evan Oliver Grossman.png",
        name: "Evan Oliver Grossman",
        postion: "CPO in multiple companies, Athena",
        linkdln: "https://www.linkedin.com/in/evangrossman/"
    }
    ,
    {
        image: "Akhilesh Gupta.png",
        name: "Akhilesh Gupta",
        postion: "AVP, Product Management, Innovaccer",
        linkdln: "https://www.linkedin.com/in/akgup/"
    }
    ,
    {
        image: "Jyotika Gupta.png",
        name: "Jyotika Gupta",
        postion: "Operating Partner at Z21 Ventures",
        linkdln: "https://www.linkedin.com/in/jyotika-gupta-9975634a/"
    }
    ,
    {
        image: "Kaustubh Gururaj.png",
        name: "Kaustubh Gururaj",
        postion: "Associate Principal, ZS Associates",
        linkdln: "https://www.linkedin.com/in/kaustubh-gururaj-62b65945"
    }
    ,
    {
        image: "Anand Hirekatur.png",
        name: "Anand Hirekatur",
        postion: "VP Engineering, Innovacer",
        linkdln: "linkedin.com/in/anandhirekatur"
    }
    ,
    {
        image: "Tony Hu.png",
        name: "Tony Hu",
        postion: "Operating Partner at Z21 Ventures",
        linkdln: "https://www.linkedin.com/in/xiuyuan-hu-7a34369a/"
    }
    ,
    {
        image: "Rakshay Jain.png",
        name: "Rakshay Jain",
        postion: "AVP of Product Management, Innovacer",
        linkdln: "https://www.linkedin.com/in/rakshay-jain-19a7a32/"
    }
    ,
    {
        image: "Rohit Kumar Jain.png",
        name: "Rohit Kumar Jain",
        postion: "Senior Software Engineer, Facebook",
        linkdln: "https://www.linkedin.com/in/rohit-j-44438314/"
    }
    ,
    {
        image: "Vijay Sukumar Kamble.png",
        name: "Vijay Sukumar Kamble",
        postion: "Professor UIC (Game Theory)",
        linkdln: "https://www.linkedin.com/in/vijay-kamble-07260097"
    }
    ,
    {
        image: "Anand Kanodia.png",
        name: "Anand Kanodia",
        postion: "Director at Wells Fargo Bank",
        linkdln: "https://www.linkedin.com/in/anand-kanodia-26b75733/"
    }
    ,
    {
        image: "Induprakas Keri.png",
        name: "Induprakas Keri",
        postion: "CISO at Nutanix",
        linkdln: "https://www.linkedin.com/in/induprakas/"
    }
    ,
    {
        image: "Chaganti Vaibhav Kumar.png",
        name: "Chaganti Vaibhav Kumar",
        postion: "Sales Leader at Innovaccer",
        linkdln: "https://www.linkedin.com/in/c-vaibhav-kumar-27504b48/"
    }
    ,
    {
        image: "Shantanu Kumar.png",
        name: "Shantanu Kumar",
        postion: "VP, Product, Huawei",
        linkdln: "https://www.linkedin.com/in/shantanu-kumar-091a703/"
    }
    ,
    {
        image: "Rishit Hasmukh Lakhani.png",
        name: "Rishit Hasmukh Lakhani",
        postion: "Head Solutions Engineering at Nile",
        linkdln: "https://www.linkedin.com/in/rishitlakhani"
    }
    ,
    {
        image: "Sasidhar Lakshmireddipalli.png",
        name: "Sasidhar Lakshmireddipalli",
        postion: "VP of Engineering Devops and Infra, SAP",
        linkdln: "linkedin.com/in/lakshmireddipalli"
    }
    ,
    {
        image: "Irene BrianLogis.png",
        name: "Irene BrianLogis",
        postion: "Sr Director of Growth Strategy",
        linkdln: "https://www.linkedin.com/in/irenebrian/"
    }
    ,
    {
        image: "Bharat Mantha.png",
        name: "Bharat Mantha",
        postion: "Senior Product Manager at Amazon",
        linkdln: "https://www.linkedin.com/in/bharatmantha/"
    }
    ,
    {
        image: "Anita Manwani.png",
        name: "Anita Manwani",
        postion: "TiE SV President, CEO of startup",
        linkdln: "https://www.linkedin.com/in/anita-manwani-relims/"
    }
    ,
    {
        image: "Avanish Mehrotra.png",
        name: "Avanish Mehrotra",
        postion: "Managing Partner at Gartner",
        linkdln: "linkedin.com/in/avanishmehrotra"
    }
    ,
    {
        image: "Satyajit Muraleedharan Menon.png",
        name: "Satyajit Muraleedharan Menon",
        postion: "VP HR, Innovaccer, SnapDeal",
        linkdln: "https://www.linkedin.com/in/satyajitm"
    }
    ,
    {
        image: "Varun Mishra.png",
        name: "Varun Mishra",
        postion: "Intel Engineer",
        linkdln: "https://www.linkedin.com/in/varun-mishra-55552420/"
    }
    ,
    {
        image: "Debkishore Mitra.png",
        name: "Debkishore Mitra",
        postion: "Founder and CTO of Lucira Health",
        linkdln: "https://www.linkedin.com/in/debkishoremitra/"
    }
    ,
    {
        image: "Akhter Hemayoun Mubarki.png",
        name: "Akhter Hemayoun Mubarki",
        postion: "Customer Success Leader, Innovaccer",
        linkdln: "https://www.linkedin.com/in/akhterhemayoun/"
    }
    ,
    {
        image: "Himavanth Myneni.png",
        name: "Himavanth Myneni",
        postion: "Founder and Product Lead",
        linkdln: "https://www.linkedin.com/in/himavanth-myneni-9b064038"
    }
    ,
    {
        image: "Abhay Pandey.png",
        name: "Abhay Pandey",
        postion: "VP NorthEast Biolab",
        linkdln: "https://www.linkedin.com/in/abhaypandey/"
    }
    ,
    {
        image: "Tito Poombra.png",
        name: "Tito Poombra",
        postion: "Advisor and outsource, CCO",
        linkdln: "https://www.linkedin.com/in/"
    }
    ,
    {
        image: "Piyush Pranay.png",
        name: "Piyush Pranay",
        postion: "Business Operations leader at AWS",
        linkdln: "https://www.linkedin.com/in/piyushpranay/"
    }
    ,
    {
        image: "Venkata Anil Kumar Rachakonda.png",
        name: "Venkata Anil Kumar Rachakonda",
        postion: "SVP at Safe.AI, Founder at a stealth",
        linkdln: "https://www.linkedin.com/in/arac/"
    }
    ,
    {
        image: "Vikram Ramesh.png",
        name: "Vikram Ramesh",
        postion: "CMO at Mandiant",
        linkdln: "https://linkedin.com/in/vikramesh"
    }
    ,
    {
        image: "Dibyendu Rana.png",
        name: "Dibyendu Rana",
        postion: "Staff engineer at Apple",
        linkdln: "linkedin.com/in/ranadibyendu"
    }
    ,
    {
        image: "Sandeep Randhawa.png",
        name: "Sandeep Randhawa",
        postion: "Customer Success leader at AWS",
        linkdln: "https://www.linkedin.com/in/sarandhawa/"
    }
    ,
    {
        image: "Aravind Ratnam.png",
        name: "Aravind Ratnam",
        postion: "CSO Qctrl, Ex ISRO scientist",
        linkdln: "https://www.linkedin.com/in/aravindratnam/"
    }
    ,
    {
        image: "Anil Ravi.png",
        name: "Anil Ravi",
        postion: "PM Leader at AWS, Symantec",
        linkdln: "https://www.linkedin.com/in/aravi/"
    }
    ,
    {
        image: "Anshul Satija.png",
        name: "Anshul Satija",
        postion: "Product Manager at Albertsons",
        linkdln: "https://www.linkedin.com/in/anshulsatija/"
    }
    ,
    {
        image: "Sachin Saxena.png",
        name: "Sachin Saxena",
        postion: "VP Marketing at Innovaccer",
        linkdln: "https://www.linkedin.com/in/sachin-saxena-059bb65a/"
    }
    ,
    {
        image: "Deepashree Sengupta.png",
        name: "Deepashree Sengupta",
        postion: "R&D Engineer at Synopsys",
        linkdln: "https://www.linkedin.com/in/deepashreesengupta/"
    }
    ,
    {
        image: "Gaurang Shah.png",
        name: "Gaurang Shah",
        postion: "Chief Product Officer at GaN systems",
        linkdln: "https://www.linkedin.com/in/gaurang-shah-7b9947/"
    }
    ,
    {
        image: "Jigar Shah.png",
        name: "Jigar Shah",
        postion: "CFO, Zenco Capital",
        linkdln: "https://www.linkedin.com/in/jayshahcpa/"
    }
    ,
    {
        image: "Pallaw Sharma.png",
        name: "Pallaw Sharma",
        postion: "Chief Data Analytics Officer at Cisco",
        linkdln: "https://www.linkedin.com/in/pallaw-sharma-b803a12/"
    }
    ,
    {
        image: "Arindam Sharma.png",
        name: "Arindam Sharma",
        postion: "Software Engineer at Google",
        linkdln: "linkedin.com/in/arindamsharma"
    }
    ,
    {
        image: "Abhinav Shashank.png",
        name: "Abhinav Shashank",
        postion: "General Partner at Z21 Ventures",
        linkdln: "https://www.linkedin.com/in/abhinavshashank/"
    },

    {
        image: "Leena Shekhar.png",
        name: "Leena Shekhar",
        postion: "Machine Learning Engineer at Microsoft",
        linkdln: "https://www.linkedin.com/in/leena-shekhar/"
    }
    ,
    {
        image: "Navin Navin Shetty.png",
        name: "Navin Navin Shetty",
        postion: "Director Customer Success, Salesforce",
        linkdln: "https://www.linkedin.com/in/navin-shetty-584604/"
    }
    ,
    
    {
        image: "Aaron Sin.png",
        name: "Aaron Sin",
        postion: "Stanford MD, CEO of Develo",
        linkdln: "https://www.linkedin.com/in/aaronsin/"
    }
    ,
    {
        image: "Raj Shekhar Singh.png",
        name: "Raj Shekhar Singh",
        postion: "General Partner at Z21 Ventures",
        linkdln: "https://www.linkedin.com/in/rajshekharsingh1/"
    }
    ,
    {
        image: "Paul Singh.png",
        name: "Paul Singh",
        postion: "Founder/CEO, Professor at UC Berkeley",
        linkdln: "https://www.linkedin.com/in/rpaulsingh/"
    },

    {
        image: "Hareesh Kumar Reddy Singireddy.png",
        name: "Hareesh Kumar Reddy Singireddy",
        postion: "AWS solution architect",
        linkdln: "https://www.linkedin.com/in/hareeshsingireddy"
    }
    ,
    {
        image: "Vishal Sinha.png",
        name: "Vishal Sinha",
        postion: "SVP Engineering at Nutanix",
        linkdln: "https://www.linkedin.com/in/visinha/"
    }
    ,
    {
        image: "Amritha Subramanian.png",
        name: "Amritha Subramanian",
        postion: "Partner (Healthcare) at McKinsey",
        linkdln: "https://www.linkedin.com/in/amrithasubramanian/"
    },


    {
        image: "Ravi Thadani.png",
        name: "Ravi Thadani",
        postion: "IT Executive at AMD, Intel, Altera",
        linkdln: "https://www.linkedin.com/in/ravithadani/"
    }
    ,
    {
        image: "Dundi Vivekananda Thunga.png",
        name: "Dundi Vivekananda Thunga",
        postion: "Customer Success Leader, Innovacer",
        linkdln: "https://www.linkedin.com/in/vivekanandatd"
    }
    ,
    {
        image: "Sushant Tripathy.png",
        name: "Sushant Tripathy",
        postion: "Machine Learning Scientist at Google",
        linkdln: "https://www.linkedin.com/in/sushanttripathy/"
    },


    {
        image: "Shabd Vaid.png",
        name: "Shabd Vaid",
        postion: "CEO Crucial Bits, Ex-CTO Medallia",
        linkdln: "https://www.linkedin.com/in/shabdvaid/"
    }
    ,
    {
        image: "Prasath Venkataraman.png",
        name: "Prasath Venkataraman",
        postion: "VP Growth Engineering at Innovaccer",
        linkdln: "https://www.linkedin.com/in/prasath-venkatraman-918a6720/"
    }
    ,
    {
        image: "Vivek Vipul.png",
        name: "Vivek Vipul",
        postion: "Founder and CEO Ajooba",
        linkdln: "https://www.linkedin.com/in/vivek-vipul-64725b"
    },


    {
        image: "Niraj Kanthi.png",
        name: "Niraj Kanthi",
        postion: "Director - Customer Support at HP",
        linkdln: "https://www.linkedin.com/in/niraj-kanthi-9205502/"
    }
    ,
    {
        image: "Sandeep Dhingra.png",
        name: "Sandeep Dhingra",
        postion: "Technology Executive (CTO/VP)",
        linkdln: "https://www.linkedin.com/in/sandeepdhingra2/"
    }
    ,
    {
        image: "Amresh Singh.png",
        name: "Amresh Singh",
        postion: "Founder & CEO - HomeAbroad",
        linkdln: "https://www.linkedin.com/in/amreshs/"
    },


    {
        image: "Prasenjit Dasgupta.png",
        name: "Prasenjit Dasgupta",
        postion: "CFO, Digital Ai",
        linkdln: "https://www.linkedin.com/in/prasenjitdg/"
    }
    ,
    {
        image: "Vikramjit Sangha.png",
        name: "Vikramjit Sangha",
        postion: "Founder Sangha Partners",
        linkdln: "https://www.linkedin.com/in/vikramsangha/"
    }
    ,
    {
        image: "Sree Chadalavada.png",
        name: "Sree Chadalavada",
        postion: "Product and strategy Leader at Cisco",
        linkdln: "https://www.linkedin.com/in/sreechadalavada/"
    },
    
    
    {
        image: "Adith Ravindran.png",
        name: "Adith Ravindran",
        postion: "Sr. Software Engineer, Microsoft",
        linkdln: "https://www.linkedin.com/in/adith-ravindran-78854328/"
    }
    ,

    {
        image: "Amitabh Mitra.png",
        name: "Amitabh Mitra",
        postion: "Principal Security Architect",
        linkdln: "https://www.linkedin.com/in/amitabh-mitra-582b93/"
    }
    ,
    {
        image: "Anuj Gupta.png",
        name: "Anuj Gupta",
        postion: "Staff Product Manager for Cruise",
        linkdln: "https://www.linkedin.com/in/anujgupta7/"
    }
    ,
    {
        image: "Chandrika Gupta.png",
        name: "Chandrika Gupta",
        postion: "Data Scientist at Meta",
        linkdln: "https://www.linkedin.com/in/chandrikagupta/"
    },


    {
        image: "Suhas Harihar.png",
        name: "Suhas Harihar",
        postion: "Technical Sales, Trinity Technologies",
        linkdln: "https://www.linkedin.com/in/suhas-harihar/"
    }
    ,
    {
        image: "Vikas Desai.png",
        name: "Vikas Desai",
        postion: "Founder and partner at Achari Ventures",
        linkdln: "https://www.linkedin.com/in/vikas-desai-1b287616/"
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
                                            <div className="partner-position mt-1">
                                                <h3>{item.postion}</h3>
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
