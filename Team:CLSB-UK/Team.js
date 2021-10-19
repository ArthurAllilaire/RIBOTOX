'use strict';
// So the app construction
// Dictionary mapping name -> [Title, Description]
const People = {
    "Peter Heywood": ["Student Leader", "Peter’s leadership of this iGem team has been exquisite. His second year of iGEM, the ‘miRNA Mourinho’ has been quintessential in ensuring that project Ribotox runs smoothly. His creativity has been an asset to the Human Practices team and he has been instrumental in designing isothermal amplification systems and toehold switches [and the code that threatened to make redundant large swathes of the bio team]. On top of his remarkable understanding of biochemical processes, Peter’s teamwork and interpersonal skills have made it a joy to work under him and his strong leadership style has ensured that the rest of the team ought to put up with his poor humour."],
    "Simon Hall": ["Primary PI", "In Mr Hall’s second year of iGEM, he has been instrumental in ensuring that the Student Leaders don’t let their A Levels distract them from their iGEM duties. Aside from his week-on-week dedication to the smooth running of the team, Mr Hall’s unique, but enviable, knowledge of random biological studies has ensured we didn’t recreate a project, but instead produced our own. Furthermore, despite being a zoologist at heart, his intuition has allowed him to [constructively] critique our ideas in a Simon Cowell-esque manner, within minutes of being debriefed. As we tie up project Ribotox, we wish him well for next year, and hope our tutors at university will be half as supportive."],
    "Roman Priest": ["Human Practices", "Despite the turbulent and chaotic GCSE year Roman has contributed in the human practice team by helping with interviews with researchers and also by creating power points and leaflets in hope of teaching others of the severity of pre-eclampsia.We wish him as well, as the rest of the younger year, the best of luck in next years IGEM."],
    "Josh Marcovitch": ["Human Practices", "During the middle of the very interrupted academic year, Josh helped design the front of and research the information for the postcard for the jamboree. He also researched and helped format the early slides in the synthetic biology presentation for the viewing of the younger years. We hope that over the coming year, the IGEM team will continue to impress."],
    "Arthur Allilaire": ["Wiki Leader", "Arthur is well-versed in the languages of CSS, HTML and JavaScript. His delegation and coordination orchestrated this website’s construction, communicating with the rest of the design team to make sure the site was on course. He always listens carefully to ideas and guides the design process, realising the designers’ contrivances. The mainframe of the website, binding all the bespoke designs together into a user interface, pivoted around Arthur’s work."],
    "Robin Wopalenski": ["Website Designer and Animator", "Robin's area of expertise is motion design, he is responsible for the beautiful loading icons and toehold switch animations. Robin was also critical in enhancing the site design and helping the website developers to understand the intricacies of video formats and animations. He is always happy to explain things and his work has been essential to the success of the wiki. Good luck to Luke and his team next year."],
    "Xi Da": ["Website and Diagram Designer", "Xi has collaborated much with the design team and other iGem members and has designed and illustrated diagrams for the website and helped with initial theme ideas for the design of the website. Best of luck in the next years, iGEM!"],
    "Micah Chote": ["Website Designer", "Micah was one of the main designers of the iGEM website. He is responsible for the main theme of the website, including the basic layout, colour scheme and a lot of the UI elements."],
    "Luke Wallis": ["Hardware and Wet Lab", "Luke was one of the few Year 11s that joined iGEM 2021. He originally worked on an alternative idea, examining the legality and then the fluid dynamics of the project. When shifted to Ribotox, he worked on the intersection between the biology and the hardware aspects and further worked in the Wet Lab for transformation, miRPA, and Asymmetric RPA. He will lead the 2022 team and we are excited to see what they can achieve under his direction."],
    "Nabeel Iqbal": ["Website Designer", "Nabeel is a key member of the website development team who joined in year 11. As a member of the web design team, Nabeel has sharpened his skills with graphic design and assisted with making illustrations for the website. In addition, Nabeel has strived to shape the website design to perfection. Nabeel is responsible for the website’s pages’ design and layout, with him designing the webpage geometry and helping animation. His work was crucial in helping consolidate the website and made sure it was ready for the final product. Many thanks and best wishes for the coming years."],
    "Arjun Bhaduri": ["Website Designer", "Whilst originally starting out as a part of a research team Arjun has moved to the website design aspect of the project. Working as part of the design team, Arjun helped with making designs for the website and suggesting design ideas and has also worked hard to create illustrations for the website. Best of luck moving forwards Arjun."],
    "Beatrice Ehrnrooth": ["Leader of Human Practices", "Bea is a leader of the Human Practices sub-team. She has helped record and edit the podcast, as well as other forms of spreading the much needed awareness about pre-eclampsia. She also conducted surveys to see the general public’s understanding of the condition and how we can change it."],
    "Maia Solomon": ["Leader of Human Practices", "Before Maia became the leader of Human Practices, Maia helped to found the project, researching all of the potential biomarkers that could be detected. She then looked into the pathophysiology of preeclampsia, making PowerPoint slides to help spread awareness of the disease.  In Human Practices she has co-created a series of podcasts by interviewing renowned experts, producing episodes that are informative and easy to follow."],
    "Rishabh Sharma": ["Leader of Hardware", "In the rare moments when his head was not buried in a maths question, Rishabh skilfully organised and led the Hardware team along with Anujayan. Alongside leading Hardware, he also managed to build an app for our project; refining his skills to study computer science at university next year. His strong understanding of both quantum physics and biology was invaluable to the team and he will no doubt make an industry-leading Computational Biologist in the future!"],
    "Anujayan Sugirtharan": ["Leader of Hardware", "Anujayan is a capable leader who has too many ideas and an immense skill to find what he wants with a carefully engineered Google search. His research has been invaluable to the team, both in finding the perfect components and in researching concepts we could apply. His ability to manage work and delegate to the rest of the team made him a great hardware leader and his deep and intuitive understanding of physics and biology helped us massively in our hardware design. He enjoys playing around with Arduinos, which has not only broadened his computing skill set for when he studies it at University next year, but has also greatly influenced our luminometer design."],
    "Paras Teli": ["Human Practices Team Leader", "As a leader of the Human Practices team, Paras’ interpersonal skills shone as he spun a web of connections to lift our iGEM project off the ground. His charm and intelligence were invaluable in enlisting the support of several charities and professors, who provided vital financial and academic support. Outside of school, I’m certain his deft wit and amicable nature will take him far in a medical career, or perhaps just in charming pret employees for free coffees."],
    "Adam Grassly": ["Hardware subteam & team branding", "Adam’s contribution to this year's project has been invaluable. Alongside helping with the hardware team, he has managed to use his artistic talent to create a beautiful masterpiece: our team logo! He is also an intelligent and avid biologist, and has a strange obsession with plants. Outside the realms of biology, he loves to code games and is a technology enthusiast. Adam’s  wit, sense of humour and intelligence is what makes him a remarkable individual, and we are confident he will go on to thrive in future endeavours!"],
    "Yousif Majeed": ["Yousif Majeed", "As far as gossip goes, Yousif has had his fair share. With rumours circulating that he has a PhD in Biology, it is great to have him as a part of the biology team. Although the extent of these claims may be exaggerated, those fortunate enough to have worked with him know that his understanding and dedication to the field of synthetic biology are exemplary."],
    "Yeshin Yoon": ["Team Co-leader, Co-leader of Modelling, Leader of Finance", "Yeshin has been a very unique member of this year's igem project, taking part in and even leading a wide variety of sub teams. While not exhaustive, he has worked on the modelling of the antimiRNA binding to form complexes, the lab work to carry out transformations and RPA, reaching out to potential sponsors and attracting over £15,000 in funding, as well as working on the entrepreneurship side of the project. We wish him the best as he aims to study chemistry at university."],
    "Atharva Beesen": ["Maths Modelling Team", "Atharva's [aka Ataban] mathematical talent is something that words cannot describe. He can be found in the library every lunch, flexing his mathematical prowess. Be it calculus to computation, any question is a piece of cake for him, and his determination to solve any problems makes him a key member to the modelling team."],
    "Callum Cheung": ["Maths Modelling Team", "Having known Callum for over 6 years, I knew that regardless of the task or circumstances, he would always display the utmost work ethic. His ability to masterfully combat challenges was clear to see whenever we performed research together as part of the Maths modelling team. In particular, Callum's unparalleled tenacity in seeking to find solutions to problems we encountered when working together is a uniquely phenomenal attribute."],
    "Alex Chen": ["Biology Sub-team", "Alex is a world class biologist. There were big questions from the media before we started whether he could translate his darting talent into micropipetting skills, but his enthusiasm and hard work have silenced the tabloid talk and made Alex a key member of the biology team."],
    "Tony Jun": ["Biology sub-team", "Tony has contributed to the team’s preliminary research and the later stages of lab work. His involvement in the team has been extremely helpful, especially in the lab, when we were carrying out miRPA. We sincerely hope that he excels in his future academic career as a biomedical researcher."],
    "Misha Rutskov": ["Human Practices Subteam", "Misha is a committed and effective team member, working tirelessly to both research PE and as part of the human practices team. He has made great contributions to spreading pre-eclampsia awareness and teaching younger years about synthetic biology, creating interactive experiments, lessons and informative leaflets. Next year he would like to study biological sciences at university. Surprisingly, apart from his interest in biology, Misha also enjoys studying world history, and has an uncanny ability to draw parallels between relevant past and current events."],
    "William Chen": ["Finance Team", "As a budding medic, William has always expressed his desire to improve the livelihoods of people around the world. Despite not officially having his Bachelor of Medicine yet, he has still shown his passion through the large amounts of donations he has been able to fundraise."],
    "Haotong Xiong": ["Biology sub-team", "Is Haotong perhaps the most fundamental team member? This biology savant was crucial in all strands of the project’s biology, from meticulously planning the wet lab activities to demonstrating his superhuman research capabilities both by his in-depth understanding of recombinase polymerase amplification and by the effort he spent contributing to previous teams’ BioBrick information. In addition to iGEM, Haotong spends 40 hours a day practising the piano and French horn, while complementing his academic fortes with his football team’s international recognition at worldwide tournaments. We wish him the best of luck with his future university studies in the biological sciences."],
    "Lucas Ng": ["Leader of Software, Co-leader of Biology", "Lucas is an intelligent and highly committed leader who is an essential member for this year’s project. With his exceptional abilities in programming and mathematics, he led research into the software of our project and created ToeholdTools, the first ever software suite characterising toehold switch riboregulators for their target RNA specificity. Despite not studying biology for A Levels, Lucas picked up concepts with ease and contributed hugely towards biological research. Outside of lessons, he is a talented musician who is dazzlingly skilled at the piano, violin and guitar. We wish him all the best as he aims to study engineering at university."],
    "Jacinda Collins": ["Biology team member", "With a work ethic of steel and curiosity that exceeds that of the other students Jacinda was a vital researcher in finding cell free methods of DNA synthesis as well as thermally independent ways of replicated nucleotide strands. Having got her hands dirty in a wet lab, she shined and we all experienced the flawless manner in which she conducted herself around the lab. A natural micropipetter and thermocylcer setter upper - Jacinda ruled that lab like no queen had done before. She independently built herself a solid foundation of knowledge in hardware which allowed her to invent an ingenious way of detecting nitrate ions in the soil for a past project.  A Nobel prize is most certainly in her girlboss future!"],
    "Maria Amoah": ["Co-leader of Biology", "Maria hypnotised everyone with her astonishing leadership skills . As a co-founder of the basis for our project, her knowledge of pre-eclampsia and synthetic biology exceeds that of all those around her while her confidence and personality motivates not just the team but the whole academic community and in fact the whole world's population. She identified the miRNAs and ran the podcasts which spread awareness of pre-eclampsia and synthetic biology while also pipetting her heart out in the wet-lab while becoming a preeclampsia pathophysiology queen. The medical world will need to step up their game to match Maria once she becomes a doctor and Tiffanys will have to watch out as she juggles running a world-class jewellery business."],
    "Harry Weiniger": ["Biology team co-leader", "Despite having succumbed to the growing power of the computer, Harry originally helped meticulously design the first iterations of all our switches with care, and an eye for detail. However, it was the safety form in which Harry truly propagated his talents, and it was due to him that no member of the wet lab got E. Coli in their eyes, or burned their lab coat on a Bunsen burner. Aside from this, Harry has helped design all our parts pages and our design wiki page. Above all, however, it was Harry's wit that was his biggest contribution."],
    "Imogen Scott-Gall": ["Human Practices Sub-team", "Imogen is a passionate biologist and has thoroughly enjoyed working on the project. She has been a valuable member of the Human Practices team and her research on the pathophysiology of preeclampsia and work on increasing public awareness around preeclampsia has been very helpful."],
    "Noor Razzaq": ["Human Practices Sub-team", "Noor has been an asset to the team this year, contacting many people in the field and making the human practices team very dynamic. Her enthusiasm and talent for Biology has been really beneficial throughout the project, her research ranging from specific biomarkers to public awareness of Preeclampsia."],
    "Janusan Jeyananthan": ["Biology Sub-team", "Janusan currently intends to apply for Biochemistry at university. As a result, some would say that iGEM is his bread and butter. They would be correct. The time and dedication which he spends perfecting his research projects is inspiring and has consolidated his place as a legend of the biology team."],
    "Asad Khan": ["Co-leader of modelling", "As a co-leader of the modelling team, Asad was a huge asset to the team. His research and dedication to the team has been invaluable, and we all thank him for his contributions. Although he is amazing at making mathematical models, he is less skilled in choosing a university degree. We sincerely hope that he enjoys regression lines and chi-squared tests that he will be scrutinizing for at least 3 years as he aims to study maths and stats at university."],
    "Shafi Maahe": ["Modelling Team", "Maahe was involved in the modelling team, as a hard working member. His extensive research in coefficients and generic decay models were of quality help towards finishing the final model. We hope that he succeeds in life as a prospective engineer."],
    "Jacob Baxandall": ["Hardware Team", "Tasked with the difficult responsibility of collating all our research and finding cost-effective parts, some would say that Jacob has been an asset to the hardware team. After the end of such an incredible project, he looks forward to the broad new horizons that await in the field is synthetic biology."],
    "Julian Chen": ["Biology Sub-team", "Coming from an extensive lineage of doctors, it was deemed at his birth that Julian too would join the ranks of his ancestors in studying medicine. His thorough and studious approach to research in IGEM has been of immense help to various sub teams, with his work in toehold switches proving to be of particular value. HIs involvement with this years’ project has impressed enough that he will be co-leading next years’ team."],
    "Gautam Krishna": ["Hardware Team", "Gautam is an unreasonably talented electronic engineer, who, although having joined this years igem project as a year 11, has made significant contributions to the hardware section with his expertise, designing a fluorometer to identify bioluminescent molecules in solution. Gautam has a bright future ahead of him and we wish him all the best for his A levels in 2023."],
    "Jian Hui Mo": ["Hardware Team", "Whenever Jian Hui was not busy cycling across London taking awe-inspiring photographs at usually the most unsociable hours, he put significant work into researching and experimenting with electromagnets for the use of separating mRNA, despite being one of few year 11 students in this years’ team. His contributions were most valuable and we hope to see him in next years’ team too."]
}

class TeamPhotos extends React.Component {
    // Gets passed props: this.props.people = Dict constant at the top.
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props)
    return (
        <ul>
            
            {Object.keys(this.props.people).map(function(person){ 
                
                return <PersonPhoto name={person} key={person} onClick={this.props.onClick}/>
            }, this)
            // This ensures the props are passed on
            }
        </ul>
    );
    }
}
function PersonPhoto(props){
    /* Takes a props.name  */
    let link_name = "https://2021.igem.org/wiki/images/f/ff/T--City_of_London_UK--" + props.name.replace(" ", "_") + "_pic.mp4";
    return <li onClick={props.onClick}> <img src={link_name} alt={props.name}></img></li>
}
function PersonDescription(props){
    const description = props.people[props.person]
    return (
        <div>
            <h1>{props.person}</h1>
            <h2>{description[0]}</h2>
            <p>{description[1]}</p>
        </div>
    );
}


class App extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            person: "Arthur Allilaire"
        }
    }
    handleChange(e) {
        let person_name = "";
        if (e.target.nodeName == "LI"){
            person_name = e.target.childNodes[1].alt
        } else{
            person_name = e.target.alt
        }
        this.setState({person: person_name});
    }
    render() {
    const person = this.state.person
    console.log(this.props.people)
    return (
        <div>
            <h1>Our Team</h1>
            <TeamPhotos people={this.props.people} onClick={this.handleChange}/>
            <PersonDescription people={this.props.people} person={person}/>
        </div>
    );
    }
}

ReactDOM.render(
  <App people={People}/>,
  document.querySelector('#team_page')
);
