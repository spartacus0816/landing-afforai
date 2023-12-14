import { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material';


type UserType = {
  content: string,
  avatar: string,
  name: string
}

const users0: UserType[] = [
  {
    content: `I've signed up and starting testing Afforai Ask for my next project's business model, and I
    have had a great experience so far. It has been exactly what I needed with its fast response
    times. For now, I am considering purchasing the Afforai - Lite Plan.`,
    avatar: "0-0.png",
    name: "Bayu Wilanda, Web &amp; App Developer"
  },
  {
    content: `The platform is free to use with a pay-as-you-go option, and there are no subscriptions
    required. The platform's Comprehension Model is highly recommended for tasks like document
    comprehension, reasoning, report writing, and research.`,
    avatar: "0-1.png",
    name: "Ghulam Abbas, Solopreneur"
  },
  {
    content: `I love it! Build totally changed the way I use my unstructured text data at school and in my
    internship this summer. Something special is brewing over at Afforai!`,
    avatar: "0-2.png",
    name: "Henry Sipchen, Marketing Coordinator"
  },
  {
    content: `Great tool for text analysis and emphasizing the main idea of a document. Especially when
    you need a quick answer without tones of epithets that beautifully describe something that
    can be actually described in a few words:`,
    avatar: "0-3.png",
    name: "Anatolii, Founder of Savvy Planning Systems"
  },
  {
    content: `This looks good to ease out the data analysis task for the users. But in the Affroi build
    guide, I couldn't see how efficiently the data analysis is done. Guess I have to take a
    subscription for it. The product looks great and has a User-friendly interface. Congrats on
    the launch.`,
    avatar: "0-4.png",
    name: "Amulya Pressard, Growth @ Neverinstall"
  },
  {
    content: `Great UI! Excited to dive deeper in the software and it's benefits. Already had it write me
    a couple of emails to clients, as well as give great suggestions on a new ad campaign coming
    up! overall great product`,
    avatar: "0-5.png",
    name: "View on Product Hunt"
  },
  {
    content: `AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to
    craft emails because I spend wayyy too much time writing.`,
    avatar: "0-6.png",
    name: "Thuy Nguyen, CEO Assistance"
  }]

const users1: UserType[] = [
  {
    content: `Afforai has so many different applications and yet doesn't feel overwhelming. It's
    streamlined and feels fun to use, and the developers clearly put time into making it simple
    to use. Definitely worth my investment!`,
    avatar: "1-0.png",
    name: "Daniel Crook, Content"
  },
  {
    content: `Well done on the launch 🚀 . I am convinced you will have many signs up today because your
    tool is beneficial. I love the UI. The framework between Afforai Build and Afforai Ask is
    compelling. I am in a hurry now to train my new assistant 😁`,
    avatar: "1-1.png",
    name: "Axel Borry, Growth Hacker"
  },
  {
    content: `This is amazing. We were thinking a solution like this would work wonders in the
    FAQ/Customer service section for our website. A tool like this that can comprehensively go
    through information for the most accurate answers is a gem!`,
    avatar: "1-2.png",
    name: "Balamurali, Web 3 Growth Marketer"
  },
  {
    content: ` This looks very useful, especially if you need to derive insight from unstructured or poorly
    labeled data.`,
    avatar: "1-3.png",
    name: "Siovash Zarrasvand, Engineer"
  },
  {
    content: `Amazing product! Works better than ChatGPT. Being able to choose style and tone of voice
    makes the writing much better and you can’t even notice it’s AI. Congratulations on the
    great work :)`,
    avatar: "1-4.png",
    name: "Anna DeMarco, Communication Manager"
  },
  {
    content: `This is an awesome platform for business AI. I'll 100% be using this. Love the fact that
    it's free to use and it's not a subscription pricing model, but pay per query. I'm going to
    have my team bookmark it now!`,
    avatar: "1-5.png",
    name: "TJ Franco, Founder and CEO"
  },
  {
    content: `Congratulations on the Launch! I like the user-friendly interface and could get started
    straight away without the need to watch a video tutorial. I used it to generate a summary
    for a marketing blog, and I found the content to be smoother than Chat GPT.`,
    avatar: "1-6.png",
    name: "Stephanie, Digital Marketer"
  }
]

/**
 * render the user's feedback card
 * @param user { content, name, avatar }
 * @returns 
 */
const _renderCard = (user: UserType) => (
  <div className='feedback-wrapper' key={user.name}>
    <div className="body">
      <div className="feedback-content">{user.content}</div>
      <div className='feeback-user-wrapper'>
        <div className='align-center flex'>
          <img src={`imgs/${user.avatar}`} width={32} height={32} />&nbsp;
          <span style={{ color: 'rgb(82, 82, 82)', fontSize: '14px' }}>{user.name}</span>
        </div>
        <a href="" className="contact">
          <img src="/imgs/producthunt.svg" width={16} height={16} />
          View on Product Hunt
        </a>
      </div>
    </div>
  </div>
)


/**
 * users' feedback component...
 * @returns 
 */
const Feedback = () => {

  const [visibleAnswer, setVisibleAnswer] = useState(false);
  const [isDown, setIsDown] = useState<boolean>(false);


  /**
   * swipe the element loop and drag...
   * @param selector 
   * @param dir 
   */
  const _swipe = (selector: string, dir: number = 1) => {
    const slider: HTMLElement = document.querySelector(selector)!;
    let isDown: boolean = false;
    let startX: number;
    let scrollLeft: number;

    slider.scrollLeft = 3000;

    slider.addEventListener('mousedown', (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
    });
    slider.addEventListener('mousemove', (e: MouseEvent) => {
      if (!isDown) return;

      const x: number = e.pageX - slider.offsetLeft;
      const walk: number = (x - startX);

      slider.scrollLeft = scrollLeft - walk;
      if (slider.scrollLeft === 0) {
        slider.scrollLeft = 4340;
      } else if (slider.scrollLeft >= 7200) {
        slider.scrollLeft = 2900
      }

    });

    setInterval(() => {
      if (!isDown) {
        slider.scrollLeft += dir;
        console.log(slider.scrollLeft)
        if (slider.scrollLeft >= 7200) {
          slider.scrollLeft = 2900
        }
      }
    }, 40);
  }

  useEffect(() => {
    _swipe('.swipe1', -1)
    _swipe('.swipe2', 1)
  }, [])

  return (
    <Grid container>
      <Grid container justifyContent='center' mt={45} flexDirection='column' gap={1} mb={4}>
        <Grid item container justifyContent='center'>
          <a style={{ width: 170, borderTopLeftRadius: 10 }}>
            <picture>
              <source srcSet="imgs/ph-review.webp" type="image/webp" />
              <img width='100%' src="imgs/ph-reviews.png" alt="Afforai support multiple document formats" data-xblocker="passed" />
            </picture>
          </a>
        </Grid>
        <Grid item container justifyContent='center'>
          <Typography textAlign='center' color='color: rgb(34, 34, 34)' fontWeight={600} lineHeight='130%' fontSize={36}>See what our users say</Typography>
        </Grid>
        <Grid item container justifyContent='center'>
          <Typography textAlign='center' maxWidth={556} color='color: rgb(82, 82, 82)' fontWeight={400} lineHeight='130%' fontSize={16}>Loved by thousands, all around the World</Typography>
        </Grid>
      </Grid>

      {/* left flow Carousel */}
      <Grid container mb={1}>
        <div className="infinite-scroll-loop-outer swipe1" >
          <div className="infinite-scroll-loop-inner">
            <div style={{ display: 'inline-block' }}>
              <div style={{ display: 'inline' }}>
                {
                  users0.map(user => _renderCard(user))
                }
              </div>
            </div>
          </div>
          <div className="infinite-scroll-loop-inner">
            <div style={{ display: 'inline-block' }}>
              <div style={{ display: 'inline' }}>
                {
                  users0.map(user => _renderCard(user))
                }
              </div>
            </div>
          </div>
        </div>
      </Grid>

      {/* right flow Carousel */}
      <Grid container mb={1}>
        <div className="infinite-scroll-loop-outer swipe2" >
          <div className="infinite-scroll-loop-inner">
            <div style={{ display: 'inline-block' }}>
              <div style={{ display: 'inline' }}>
                {
                  users1.map(user => _renderCard(user))
                }
              </div>
            </div>
          </div>
          <div className="infinite-scroll-loop-inner">
            <div style={{ display: 'inline-block' }}>
              <div style={{ display: 'inline' }}>
                {
                  users1.map(user => _renderCard(user))
                }
              </div>
            </div>
          </div>
        </div>
      </Grid>

    </Grid>
  )
}

export default Feedback