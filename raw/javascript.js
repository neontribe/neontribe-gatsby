var profiles = [
  {
    name: 'Harry Harrold',
    image: './tribe-harry.jpg',
    description:
      'Harry helped take an internet security start up from 3 employees to acquisition by Sun Microsystems. Since leaving software marketing, he’s been helping organisations think about how their objectives relate to their peoples, designing interactions in the resulting projects, and making the best decisions possible about the products that come out of them. ',
    skills: ['Product Management', 'User-centered Design', 'Paper Prototyping'],
  },
  {
    name: 'Toby Batch',
    image: './tribe-toby.jpg',
    description:
      'Toby trained in computer science and psychology, and has been working on Internet projects since 1996. He authored the first Java strong cryptographic implementation outside the USA. After helping take an Internet security start up from 3 employees to acquisition by Sun Microsystems, he worked in global professional services for 3 years before leaving for self-employment.',
    skills: ['System Administration', 'Server-side Scripting', 'Database Administration'],
  },
  {
    name: 'Neil Dabson',
    image: './tribe-neil.jpg',
    description:
      'Neil’s degree in geophysics led to initially a career in the oil industry. After too many trips to out of the way places, he left in favour of resurrecting a deep interest in technology. For the last ten years he’s been involved in a wide variety of IT projects, focussing on open source software development and deployment.',
    skills: ['Software Specification', 'Application Programming', 'Database Design'],
  },
  {
    name: 'Rupert Redington',
    image: './tribe-rupert.jpg',
    description:
      'Rupert ran away from the theatre to become a web developer at the turn of the century. Since then he’s been making mistakes at Neontribe as fast as he can, learning from a reasonable percentage of them. Recently he’s been using Javascript to help teenagers talk to doctors, Americans to buy airline tickets and everybody to find their way to the loo.',
    skills: ['Teaching', 'Javascript', 'Paper Prototyping'],
  },
  {
    name: 'Matt Layton',
    image: './tribe-matt.jpg',
    description:
      'Having always been creative, as a child Matt found himself designing tabletop games on the back of cereal boxes. As he grew up his interest shifted primarily to technical drawing and portraiture. This of course was all before Matt had the privilege of owning a computer, at which point he became aware of tools like Photoshop and the seemingly endless possibilities of developing for the web platform. Having worked with a wide spectrum of languages and frameworks he now focus on specialising in semantic/accessible HTML, CSS and JavaScript.',
    skills: ['CSS', 'Semantinc HTML', 'A11y'],
  },
  {
    name: 'Katja Mordaunt',
    image: './tribe-katja.jpg',
    description:
      'Katja made the mistake of believing that a science based education meant forgoing creativity - and opted for a first degree in writing and film. She&#39;s been forging an uphill battle out of the ‘arts’ towards her childhood ambition of becoming as technically skilled as an engineer - but with none of the responsibility - and all the fun. She occasionally occupies her spare time with producing low budget films. She was once eking towards completing a degree in computer science - but lately just too busy. Katja has been working with Neontribe since 2008.',
    skills: ['Project Wrangling', 'Laravel', 'Elm and Vue'],
  },
  {
    name: 'Karl Jermy',
    image: './tribe-karl.jpg',
    description:
      'A wearer of many hats, literally, Karl came to Neontribe in 2013 after a period of rest from a fifteen year spell at one of the world&#39;s brokest Banks. He has embraced the Neontribe work ethic (even growing a moustache) and has been tasked with bringing a level of structure and project management into the team whilst maintaining the fun in delivering brilliant projects.',
    skills: ['Project Management', 'Testing', 'People Management'],
  },
  {
    name: 'Robert Preus-Maclaren',
    image: './tribe-rob.jpg',
    description:
      'Rob became an accidental chef, going from kitchen boy to cook, before he had the serendipitous opportunity to leave the catering industry. Rob has taught himself to write code since he was 14, using time in IT lessons to write excel macros. Since then he has also dedicated his spare time learning and writing in different languages ranging from memory editors (game hacks) in visual basic to 2d games in Java. Since then Rob&#39;s latest language love affairs have been writing front and back end JavaScript, and learning Go.',
    skills: ['Javascript', 'Git', 'Python'],
  },
  {
    name: 'Oliver Barnwell',
    image: './tribe-ollie.jpg',
    description:
      'Oliver originally set out with a dream of becoming an electrical engineer. However, after realising that this involves many small components which tend to inexplicably break for no apparent reason he rapidly diverted his attention to software which, as he was to discover later, also tends to break for no apparent reason.',
    skills: ['JavaScript', 'Drupal', 'PHP'],
  },
  {
    name: 'Kara Langford',
    image: './tribe-kara.jpg',
    description:
      'Kara was faced with Microsoft Access for the first time in 2007 and quickly learnt that it was utterly rubbish and learning SQL was much more useful and fun. Thus began an affinity with all things database and report related, resulting in Kara moving into a career in Business Information & Management Information Systems.',
    skills: ['SQL & SSRS', 'Project Management', 'Git'],
  },
  {
    name: 'George Deeks',
    image: './tribe-george.jpg',
    description:
      'George graduated from UEA with a MSc. in Computer Science in August 2014, and joined Neontribe in January 2015. Since then, he has worked on a variety of projects, but mostly now concerns himself with JavaScript and gluing his pulled-out hair back in. To amend for his sins, he also has a passion for engaging youngsters in the art of coding.',
    skills: ['Javascript', 'React', 'SQL'],
  },
  {
    name: 'Charlie Strange',
    image: './tribe-charlie.jpg',
    description:
      'After over a decade developing the IT capabilities of a sector-leading claims management company, Charlie briefly tried his hand directing a SME focused IT services company in Norfolk, proving that, truly, there&#39;s no such thing as worthless experiences, just expensive ones. He now enjoys writing webby things for Good Causes to both pay off some karmic debt and explore new ways of thinking about software development, mostly in PHP and JS.',
    skills: ['Laravel', 'Javascript', 'Information Security'],
  },
  {
    name: 'Alexandra Moore',
    image: './tribe-alex.jpg',
    description:
      'Alexandra started out in high-end retail before finding out that listening to the same Christmas CD on repeat every day for 2 months isn’t very fun. She then discovered programming and taught herself alongside a job in the banking industry before joining Neontribe. She works on the tech-for-good side of Neontribe projects and most enjoys frontend & UX work.',
    skills: ['UX', 'HTML/CSS', 'Javascript'],
  },
  {
    name: 'Ed Perkins',
    image: './tribe-ed.jpg',
    description:
      'Ed has spent most of his life writing, playing and teaching music with technology. At some point during a PhD in experimental composition, Ed began designing and programming socio-economic models to generate narrative, and consequently forgot that he was supposed to be making music at all. This led to a slight ‘career modification’ by way of a rather intense bootcamp experience. Ed found an affinity with the progressive culture of the tech community and now feels very at home working with the diverse and eclectic members of the Neontribe team.',
    skills: ['Teaching', 'Communicating', 'Learning'],
  },
  {
    name: 'Rose Bonner',
    image: './tribe-rose.jpg',
    description:
      'Rose started Neontribe in July 2018 after completing her mathematics degree at the Open University. Prior to working at Neontribe she worked for nearly 4 years in the charity sector. Whilst working in the sector she discovered a passion for user-centred design and the opportunities that technology can offer for nonprofits to make a difference. Rose now works on the social good projects and loves working to design something that will make a positive impact.',
    skills: ['User Research', 'Paper Prototyping', 'UX'],
  },
  {
    name: 'Holly Stringer',
    image: './tribe-holly.jpg',
    description:
      'In her final year of university whilst studying Design for Publishing, Holly explored user-centered design through her final major project which involved creating a website showcasing information on all the hospitals across the UK. Discovering how much putting the user at the forefront of all design choices changed the way she worked, inspired her to look for a different career path. She enjoys working on social good projects and using design to make a positive impact.',
    skills: ['Typography', 'Layout Design', 'Illustration'],
  },
  {
    name: 'Amanda Rasolofotsara',
    image: './tribe-amanda.jpg',
    description:
      'BLANK',
    skills: ['something', 'something', 'something'],
  },
  {
    name: 'Steve Burtenshaw',
    image: './tribe-steve.jpg',
    description:
      'BLANK',
    skills: ['something', 'something', 'something'],
  },
  {
    name: 'Kat Quatermass',
    image: './tribe-kat.jpg',
    description:
      'Kat often describes herself as the least technical member of Neontribe. After a 15 year career in the arts and local government, Kat realised that user-led service and strategy design drew nicely on a skill set built up through the eclectic activities that make up her career path so far - connecting people and their stories with the things they need to make life better. She’s passionate about tech for good, about projects that can be allowed to fail and about only measuring things that you’re actually going to learn from',
    skills: ['Workshop Design', 'User Research', 'Stakeholder Management'],
  },
  {
    name: 'Nick Wade',
    image: './tribe-nick.jpg',
    description:
      'After experimenting with online coding courses, Nick committed to becoming a developer by undertaking a Computing & Game Development degree as a mature student at Plymouth University. After graduating, he started his own one-person game development company, and met Neontribe by chance while exhibiting a game at a local conference. He&#39s been working for Neontribe ever since, mostly on the front end of social good projects.',
    skills: ['HTML/CSS', 'Image Editing', '3D and VR development'],
  },
  {
    name: 'Andy Barnes',
    image: './tribe-andy.jpg',
    description:
      'Andy came to Neontribe at the beginning of 2012 with over 10 years of UNIX administration experience and 18 years in the industry.',
    skills: ['UNIX System Administration', 'Shell Scripting', 'Administration'],
  },
]

//  Todo: add arrow color and border color on focus/hover
var profilesEl = document.getElementById('profiles')
if (profilesEl) {
  profilesEl.innerHTML = profiles
    .map(
      (profile, index) => `

    <div class="fl pa2">
        <button type="button" class="flip-button" onclick="flip(this)">
            <span class="flip-container">
                <span class="flipper">
                    <span class="front relative flex flex-column items-center">
                        <img class="tribe-image" src="${
                          profile.image
                        }" alt="" />
                        <span class="absolute bottom-1 flex justify-center right-0 top-0 w-100">
                            <span class="text-name absolute bottom--1 right-0 fw7" data-syncProps="borderTopColor">
                            ${profile.name}
                            <span class="arrowblack">&rarr;</span>
                            <br><span>
                            ${profile.skills
                              .map(
                                skill => `
                                   <span class="text-skills ">
                                        ${skill}
                                    </span>
                                `
                              )
                              .join('|')}
                        </span>
                        </span>
                    </span>
                </span>
                <span class="back">
                    <h4>${profile.name}</h4>
                    <div class="mb2">
                            ${profile.skills
                              .map(
                                skill => `
                                   <span class="text-skills b-ns">
                                        ${skill}
                                    </span>
                            `
                              )
                              .join('|')}
                        </div>
                    <div class="smallparagraph">${profile.description}</div>
                </span>
            </span>
        </button>
    </div>
`
    )
    .join('')
}

window.flip = el => {
  Array.from(document.getElementsByClassName('flip-button'))
    .filter(item => {
      return item !== el
    })
    .forEach(item => {
      item.classList.remove('active')
    })
  el.classList.toggle('active')
}

Array.from(document.getElementsByClassName('slides')).forEach(el => {
  el.style.width = `calc(100% * ${el.childElementCount})`
})

window.goTo = (carouselEl, index) => {
  const slidesEl = carouselEl.querySelector('.slides')
  const slideCount = slidesEl.childElementCount
  slidesEl.setAttribute('data-active-index', index)
  slidesEl.style.transform = `translateX(calc((100% / -${slideCount}) * ${index}))`
}

window.prev = carouselEl => {
  const slidesEl = carouselEl.querySelector('.slides')
  const slideCount = slidesEl.childElementCount
  const slideIndex = parseInt(slidesEl.getAttribute('data-active-index'), 10)
  var nextSlideIndex = slideIndex - 1
  if (nextSlideIndex < 0) {
    nextSlideIndex = slideCount - 1
  }

  window.goTo(carouselEl, nextSlideIndex)
}

window.next = carouselEl => {
  const slidesEl = carouselEl.querySelector('.slides')
  const slideCount = slidesEl.childElementCount
  const slideIndex = parseInt(slidesEl.getAttribute('data-active-index'), 10)
  var nextSlideIndex = slideIndex + 1
  if (nextSlideIndex >= slideCount) {
    nextSlideIndex = 0
  }

  window.goTo(carouselEl, nextSlideIndex)
}

var acc = document.getElementsByClassName('accordion')

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle('active')

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling
    if (panel.style.display === 'block') {
      panel.style.display = 'none'
    } else {
      panel.style.display = 'block'
    }
  })
}

// howwework -------------------------------------------------------------------------------------------------------------------

window.toggleWorkEntry = function(el) {
  const entryEl = el.closest('.work-entry')
  const article = entryEl.querySelector('article')

  document.querySelectorAll('.work-entry').forEach(entry => {
    if (entryEl !== entry) {
      entry.querySelector('article').setAttribute('aria-hidden', 'true')
    } else {
      entry.querySelector('article').toggleAttribute('aria-hidden')
    }
  })
}

function getEntryTemplate(entry) {
  return `
        <div class="work-entry mb3">
            <div class="work-entry-${entry.title
              .split(' ')
              .join('-')
              .toLowerCase()} work-entry-bg-image pa3" onclick="toggleWorkEntry(this)" style="background-image: url('${
    entry.bannerimage
  }')">
                <h3 class="text mb2">${entry.title}</h3>
                <p class="text">${entry.description}</p>
                <button type="button" class="visually-hidden" onclick="toggleWorkEntry(this)">View problem and solution for ${
                  entry.title
                }</button>
            </div>
            <article class="pa3" aria-hidden>
                <div class="mb2 text">
                <img src="${entry.image}" class="fl mr3 mb2" alt="${
    entry.imagedescription
  }" />
                <h3 class="mb1">${entry.title}</h3>
                <a href="${
                  entry.destination
                }" class="pl3 pr3 text link-small">${
    entry.destination.split('://')[1]
  } <span class="arrowpink">&rarr;</span></a>
                    <p>Problem: ${entry.problem} </p>
                    <p>Solution: ${entry.solution}</p>
                </div>
            </article>
        </div>
    `
}

if (document.getElementById('our-work') && window.entries) {
  document.getElementById('our-work').innerHTML = window.entries
    .filter(entry => entry.type !== 'talk')
    .map(getEntryTemplate)
    .join('')
}
if (document.getElementById('our-talks') && window.entries) {
  document.getElementById('our-talks').innerHTML = window.entries
    .filter(entry => entry.type === 'talk')
    .map(getEntryTemplate)
    .join('')
}
