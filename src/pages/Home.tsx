import "./home.css";
import { Grid, Typography, Button, Box } from "@mui/material"
import FAQ from "../components/faq"
import Feedback from "../components/Feedback";

const faqs = [
  {
    question: 'Is Afforai free?',
    answer: 'Yes, Afforai is free for all new users. Upon signing up, users are given 50 permanent credits'
  },
  {
    question: 'What are subscription credits versus permanent credits?',
    answer: 'Subscription credits come from monthly payments, while permanent credits come from top ups. Subscription credits will be used before permanent credits, and subscription credits expire every month while permanent credits stay.'
  },
  {
    question: 'Does Afforai support documents storing on the cloud like Google Drive, One Drive, or Drop Box?',
    answer: 'Currently Afforai only support uploading local documents and websites, in the near future we will integrate these cloud solutions. Sign up with us to get updated.'
  },
  {
    question: 'Does Afforai support uploading images and video?',
    answer: 'Yes, Afforai is free for all new users. Upon signing up, users are given 50 permanent credits'
  },
  {
    question: 'Does Afforai support collaboration between accounts?',
    answer: 'Yes, Afforai is free for all new users. Upon signing up, users are given 50 permanent credits'
  },
  {
    question: 'Is my data secured?',
    answer: 'Yes, Afforai is free for all new users. Upon signing up, users are given 50 permanent credits'
  },
]


const Home = () => {
  return (
    <Grid container flexDirection='column' alignItems='center'>
      <Grid item className="app-sumo" container alignItems='center' justifyContent='center' gap={2} sx={{ width: { xs: '100%', sm: '310px' } }}>
        <img src="imgs/appsumo.png" width={26} height={20}></img>
        <Typography fontSize={13} fontWeight={500}>Now on AppSum</Typography>
        <a className="go-to">
          Get Lifetime Deal
          <div style={{ lineHeight: 0, transform: 'rotate(-90deg)', display: 'inline-block' }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="angle-down"><path id="angle-up-small_2" d="M5.3338 5.99981C5.50446 5.99981 5.67515 6.06512 5.80515 6.19512L8.00046 8.39044L10.1958 6.19512C10.4564 5.93446 10.8778 5.93446 11.1385 6.19512C11.3992 6.45579 11.3992 6.87717 11.1385 7.13783L8.47182 9.8045C8.21115 10.0652 7.78978 10.0652 7.52911 9.8045L4.86244 7.13783C4.60178 6.87717 4.60178 6.45579 4.86244 6.19512C4.99244 6.06512 5.16313 5.99981 5.3338 5.99981Z" fill="#333"></path></g></svg></div>
        </a>
      </Grid>
      <Typography color='rgb(34, 34, 34)' fontSize={48} fontFamily='sans-serif' fontWeight={500} textAlign='center' mt={3}>
        Your second brain for<br /> maximizing productivity
      </Typography>

      <Typography textAlign='center' maxWidth={671} my={5} fontFamily='sans-serif'>
        Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to produce trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements and extract the key findings you need.
      </Typography>

      <Grid
        item
        container
        justifyContent='center'
        sx={{
          display: { xs: 'none', md: 'flex' },
        }}
      >
        <div className="mini-item"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="check"><path id="check_2" d="M7.49999 14.7915C7.49916 14.7915 7.49832 14.7915 7.49749 14.7915C7.33082 14.7906 7.17166 14.724 7.05416 14.6048L3.72083 11.2198C3.47833 10.974 3.48166 10.5782 3.72749 10.3357C3.97333 10.094 4.36999 10.0965 4.61166 10.3423L7.5025 13.279L15.3908 5.39064C15.635 5.14648 16.0308 5.14648 16.275 5.39064C16.5192 5.63481 16.5192 6.03067 16.275 6.27484L7.94166 14.6082C7.82499 14.7257 7.66583 14.7915 7.49999 14.7915Z" fill="#525252"></path></g></svg>Summarize Key Findings</div>
        <div className="mini-item"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="check"><path id="check_2" d="M7.49999 14.7915C7.49916 14.7915 7.49832 14.7915 7.49749 14.7915C7.33082 14.7906 7.17166 14.724 7.05416 14.6048L3.72083 11.2198C3.47833 10.974 3.48166 10.5782 3.72749 10.3357C3.97333 10.094 4.36999 10.0965 4.61166 10.3423L7.5025 13.279L15.3908 5.39064C15.635 5.14648 16.0308 5.14648 16.275 5.39064C16.5192 5.63481 16.5192 6.03067 16.275 6.27484L7.94166 14.6082C7.82499 14.7257 7.66583 14.7915 7.49999 14.7915Z" fill="#525252"></path></g></svg>Compare Between Documents</div>
        <div className="mini-item"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="check"><path id="check_2" d="M7.49999 14.7915C7.49916 14.7915 7.49832 14.7915 7.49749 14.7915C7.33082 14.7906 7.17166 14.724 7.05416 14.6048L3.72083 11.2198C3.47833 10.974 3.48166 10.5782 3.72749 10.3357C3.97333 10.094 4.36999 10.0965 4.61166 10.3423L7.5025 13.279L15.3908 5.39064C15.635 5.14648 16.0308 5.14648 16.275 5.39064C16.5192 5.63481 16.5192 6.03067 16.275 6.27484L7.94166 14.6082C7.82499 14.7257 7.66583 14.7915 7.49999 14.7915Z" fill="#525252"></path></g></svg>Search For Answers</div>
        <div className="mini-item"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="check"><path id="check_2" d="M7.49999 14.7915C7.49916 14.7915 7.49832 14.7915 7.49749 14.7915C7.33082 14.7906 7.17166 14.724 7.05416 14.6048L3.72083 11.2198C3.47833 10.974 3.48166 10.5782 3.72749 10.3357C3.97333 10.094 4.36999 10.0965 4.61166 10.3423L7.5025 13.279L15.3908 5.39064C15.635 5.14648 16.0308 5.14648 16.275 5.39064C16.5192 5.63481 16.5192 6.03067 16.275 6.27484L7.94166 14.6082C7.82499 14.7257 7.66583 14.7915 7.49999 14.7915Z" fill="#525252"></path></g></svg>Ask in Any Language</div>
      </Grid>

      <div className="logos" style={{ width: 'calc(90vw - 100px)' }}>

        <div className="logos-slide">
          <div className="mini-item"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="check"><path id="check_2" d="M7.49999 14.7915C7.49916 14.7915 7.49832 14.7915 7.49749 14.7915C7.33082 14.7906 7.17166 14.724 7.05416 14.6048L3.72083 11.2198C3.47833 10.974 3.48166 10.5782 3.72749 10.3357C3.97333 10.094 4.36999 10.0965 4.61166 10.3423L7.5025 13.279L15.3908 5.39064C15.635 5.14648 16.0308 5.14648 16.275 5.39064C16.5192 5.63481 16.5192 6.03067 16.275 6.27484L7.94166 14.6082C7.82499 14.7257 7.66583 14.7915 7.49999 14.7915Z" fill="#525252"></path></g></svg>Summarize Key Findings</div>
          <div className="mini-item"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="check"><path id="check_2" d="M7.49999 14.7915C7.49916 14.7915 7.49832 14.7915 7.49749 14.7915C7.33082 14.7906 7.17166 14.724 7.05416 14.6048L3.72083 11.2198C3.47833 10.974 3.48166 10.5782 3.72749 10.3357C3.97333 10.094 4.36999 10.0965 4.61166 10.3423L7.5025 13.279L15.3908 5.39064C15.635 5.14648 16.0308 5.14648 16.275 5.39064C16.5192 5.63481 16.5192 6.03067 16.275 6.27484L7.94166 14.6082C7.82499 14.7257 7.66583 14.7915 7.49999 14.7915Z" fill="#525252"></path></g></svg>Compare Between Documents</div>
          <div className="mini-item"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="check"><path id="check_2" d="M7.49999 14.7915C7.49916 14.7915 7.49832 14.7915 7.49749 14.7915C7.33082 14.7906 7.17166 14.724 7.05416 14.6048L3.72083 11.2198C3.47833 10.974 3.48166 10.5782 3.72749 10.3357C3.97333 10.094 4.36999 10.0965 4.61166 10.3423L7.5025 13.279L15.3908 5.39064C15.635 5.14648 16.0308 5.14648 16.275 5.39064C16.5192 5.63481 16.5192 6.03067 16.275 6.27484L7.94166 14.6082C7.82499 14.7257 7.66583 14.7915 7.49999 14.7915Z" fill="#525252"></path></g></svg>Search For Answers</div>
          <div className="mini-item"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="check"><path id="check_2" d="M7.49999 14.7915C7.49916 14.7915 7.49832 14.7915 7.49749 14.7915C7.33082 14.7906 7.17166 14.724 7.05416 14.6048L3.72083 11.2198C3.47833 10.974 3.48166 10.5782 3.72749 10.3357C3.97333 10.094 4.36999 10.0965 4.61166 10.3423L7.5025 13.279L15.3908 5.39064C15.635 5.14648 16.0308 5.14648 16.275 5.39064C16.5192 5.63481 16.5192 6.03067 16.275 6.27484L7.94166 14.6082C7.82499 14.7257 7.66583 14.7915 7.49999 14.7915Z" fill="#525252"></path></g></svg>Ask in Any Language</div>
        </div>

        <div className="logos-slide">
          <div className="mini-item"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="check"><path id="check_2" d="M7.49999 14.7915C7.49916 14.7915 7.49832 14.7915 7.49749 14.7915C7.33082 14.7906 7.17166 14.724 7.05416 14.6048L3.72083 11.2198C3.47833 10.974 3.48166 10.5782 3.72749 10.3357C3.97333 10.094 4.36999 10.0965 4.61166 10.3423L7.5025 13.279L15.3908 5.39064C15.635 5.14648 16.0308 5.14648 16.275 5.39064C16.5192 5.63481 16.5192 6.03067 16.275 6.27484L7.94166 14.6082C7.82499 14.7257 7.66583 14.7915 7.49999 14.7915Z" fill="#525252"></path></g></svg>Summarize Key Findings</div>
          <div className="mini-item"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="check"><path id="check_2" d="M7.49999 14.7915C7.49916 14.7915 7.49832 14.7915 7.49749 14.7915C7.33082 14.7906 7.17166 14.724 7.05416 14.6048L3.72083 11.2198C3.47833 10.974 3.48166 10.5782 3.72749 10.3357C3.97333 10.094 4.36999 10.0965 4.61166 10.3423L7.5025 13.279L15.3908 5.39064C15.635 5.14648 16.0308 5.14648 16.275 5.39064C16.5192 5.63481 16.5192 6.03067 16.275 6.27484L7.94166 14.6082C7.82499 14.7257 7.66583 14.7915 7.49999 14.7915Z" fill="#525252"></path></g></svg>Compare Between Documents</div>
          <div className="mini-item"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="check"><path id="check_2" d="M7.49999 14.7915C7.49916 14.7915 7.49832 14.7915 7.49749 14.7915C7.33082 14.7906 7.17166 14.724 7.05416 14.6048L3.72083 11.2198C3.47833 10.974 3.48166 10.5782 3.72749 10.3357C3.97333 10.094 4.36999 10.0965 4.61166 10.3423L7.5025 13.279L15.3908 5.39064C15.635 5.14648 16.0308 5.14648 16.275 5.39064C16.5192 5.63481 16.5192 6.03067 16.275 6.27484L7.94166 14.6082C7.82499 14.7257 7.66583 14.7915 7.49999 14.7915Z" fill="#525252"></path></g></svg>Search For Answers</div>
          <div className="mini-item"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="check"><path id="check_2" d="M7.49999 14.7915C7.49916 14.7915 7.49832 14.7915 7.49749 14.7915C7.33082 14.7906 7.17166 14.724 7.05416 14.6048L3.72083 11.2198C3.47833 10.974 3.48166 10.5782 3.72749 10.3357C3.97333 10.094 4.36999 10.0965 4.61166 10.3423L7.5025 13.279L15.3908 5.39064C15.635 5.14648 16.0308 5.14648 16.275 5.39064C16.5192 5.63481 16.5192 6.03067 16.275 6.27484L7.94166 14.6082C7.82499 14.7257 7.66583 14.7915 7.49999 14.7915Z" fill="#525252"></path></g></svg>Ask in Any Language</div>
        </div>
      </div>

      <Grid container justifyContent='center' gap={3} my={5}>
        <Button sx={{ textTransform: 'none', width: { xs: '100%', md: 148 }, borderRadius: 2, background: 'linear-gradient(135deg,#6004ff,#7f35ff 23.95%,#370097 60.11%,#8d4aff)' }} variant="contained" size="medium">Try for free</Button>
        <Button sx={{ textTransform: 'none', width: { xs: '100%', md: 148 }, borderRadius: 2, backgroundColor: 'white', color: 'black' }} variant="contained" size="medium">View pricing</Button>
      </Grid>

      <div className="laptop-landing-1">
        <img src="/imgs/laptop-landing-1.png"></img>
      </div>

      <div className="laptop-landing-3">
        <img src="/imgs/laptop-landing-3.png"></img>
      </div>

      <Typography mt={15}>Loved by <span style={{ color: 'rgb(128, 54, 255)' }}>20,000+</span> users around the world</Typography>

      <Grid mt={2} sx={{ width: { xs: '95%', sm: 336 } }}>
        <img src="/imgs/laptop-landing-2.png" width='100%' />
      </Grid>

      <Grid item container justifyContent='center' mt={30}>
        <Grid item md={5} sm={10} xs={12}>
          <Typography fontSize={36} fontWeight={600} sx={{ textAlign: { xs: 'center', md: 'left' } }} lineHeight='130%' color={'rgb(34, 34, 34)'}>Say goodbye to long, tiresome documents</Typography>
          <Typography fontWeight={400} color={'rgb(82, 82, 82)'} fontSize={16} sx={{ paddingRight: { md: 15, xs: 0 }, textAlign: { md: 'left', xs: 'center' } }} py={2}>
            Afforai seamlessly translates documents, files, spreadsheets & websites, filtering out what you don’t need & answering your specific questions within seconds.
          </Typography>
          <Grid item container gap={1} laptop-landing-1>
            <img src="/imgs/check-circle.svg" width={24} />
            <Typography fontWeight={500} color={'rgb(3, 204, 59)'}>A whip smart research assistant</Typography>
          </Grid>
          <Grid item container gap={1} laptop-landing-1 pt={2}>
            <img src="/imgs/check-circle.svg" width={24} />
            <Typography fontWeight={500} color={'rgb(3, 204, 59)'}>We speak every language</Typography>
          </Grid>
          <Grid item container gap={1} laptop-landing-1 pt={2}>
            <img src="/imgs/check-circle.svg" width={24} />
            <Typography fontWeight={500} color={'rgb(3, 204, 59)'}>Reliable data citation for answers</Typography>
          </Grid>
          <Grid item container gap={1} laptop-landing-1 pt={2}>
            <img src="/imgs/check-circle.svg" width={24} />
            <Typography fontWeight={500} color={'rgb(3, 204, 59)'}>Fort-Knox level data security</Typography>
          </Grid>
        </Grid>
        <Grid md={5} xs={12}>
          <img src="/imgs/laptop-landing-4.png" width={'100%'} />
        </Grid>
      </Grid>

      <Grid container justifyContent='center' mt={45} flexDirection={'column'} gap={4}>
        <Grid item container justifyContent='center'>
          <div className="your-productivity">10x your productivity</div>
        </Grid>
        <Grid item container justifyContent={'center'}>
          <Typography textAlign='center' maxWidth={556} color={'color: rgb(34, 34, 34)'} fontWeight={600} lineHeight={'130%'} fontSize={36}>Save yourself from stress & streamline your workflow</Typography>
        </Grid>
        <Grid item container justifyContent={'center'}>
          <Typography textAlign='center' maxWidth={556} color={'color: rgb(82, 82, 82)'} fontWeight={400} lineHeight={'130%'} fontSize={16}>The average worker spends 9 hours per week looking through & gathering information from thick stacks of documents. With Afforai, you can save yourself 8 hours per week (plus a lot of headaches).</Typography>
        </Grid>
        <Grid item container justifyContent={'center'}>
          <img src="/imgs/laptop-landing-5.png" width={'80%'} />
        </Grid>
      </Grid>

      <Grid container justifyContent='center' mt={45} flexDirection={'column'} gap={2}>
        <Grid item container justifyContent='center'>
          <div className="your-productivity">Why choose us?</div>
        </Grid>
        <Grid item container justifyContent={'center'}>
          <Typography textAlign='center' maxWidth={556} color={'color: rgb(34, 34, 34)'} fontWeight={600} lineHeight={'130%'} fontSize={36}>Built for the user</Typography>
        </Grid>
        <Grid item container justifyContent={'center'} mb={5}>
          <Typography textAlign='center' maxWidth={556} color={'color: rgb(82, 82, 82)'} fontWeight={400} lineHeight={'130%'} fontSize={16}>Afforai is where exceptional customer focus meets exceptional technology.</Typography>
        </Grid>

        <Grid item container justifyContent={'center'} gap={2}>
          <Grid item xs={12} sm={10} md={4} sx={{ border: '1px solid rgb(230, 230, 230)', borderRadius: 3 }}>
            <div style={{ background: 'rgb(245, 245, 245)', borderBottom: '1px solid rgb(230, 230, 230)', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
              <picture>
                <source srcSet="/imgs/laptop-landing-6.png" type="image/webp" />
                <img width={'100%'} src="/imgs/laptop-landing-6.png" alt="Afforai support multiple document formats" data-xblocker="passed" />
              </picture>
            </div>
            <div style={{ padding: 15 }}>
              <Typography fontSize={16} color={'rgb(34, 34, 34)'} paddingBottom={1} fontWeight={500}>Cross Language Querying <span className="badge">NEW</span></Typography>
              <Typography fontSize={12} color={'rgb(82, 82, 82)'}>
                Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from, you can be assured we can help.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={10} md={6} sx={{ border: '1px solid rgb(230, 230, 230)', borderRadius: 3 }}>
            <div style={{ background: 'rgb(245, 245, 245)', borderBottom: '1px solid rgb(230, 230, 230)', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
              <picture>
                <source srcSet="/imgs/laptop-landing-7.png" type="image/webp" />
                <img width={'100%'} src="/imgs/laptop-landing-7.png" alt="Afforai support multiple document formats" data-xblocker="passed" />
              </picture>
            </div>
            <div style={{ padding: 15 }}>
              <Typography fontSize={16} color={'rgb(34, 34, 34)'} paddingBottom={1} fontWeight={500}>Multiple file types supported</Typography>
              <Typography fontSize={12} color={'rgb(82, 82, 82)'}>Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX & XLSX, as well as your own text & links from Websites. The possibilities are limitless!</Typography>
            </div>
          </Grid>
        </Grid>

        <Grid item container justifyContent={'center'} gap={2}>
          <Grid item container xs={12} sm={10} md={6} gap={2}>
            <Grid item xs={12} sx={{ border: '1px solid rgb(230, 230, 230)', borderRadius: 3 }}>
              <div style={{ background: 'rgb(245, 245, 245)', borderBottom: '1px solid rgb(230, 230, 230)', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <picture>
                  <source srcSet="/imgs/laptop-landing-8.png" type="image/webp" />
                  <img width={'100%'} src="/imgs/laptop-landing-8.png" alt="Afforai support multiple document formats" data-xblocker="passed" />
                </picture>
              </div>
              <div style={{ padding: 15 }}>
                <Typography fontSize={16} color={'rgb(34, 34, 34)'} paddingBottom={1} fontWeight={500}>Valuable Data Citation<span className="badge">NEW</span></Typography>
                <Typography fontSize={12} color={'rgb(82, 82, 82)'}>Afforai is able to show exactly where your data has been extracted from & highlight it for you, so you never loose your time validating information again.</Typography>
              </div>
            </Grid>

            <Grid item xs={12} sx={{ border: '1px solid rgb(230, 230, 230)', borderRadius: 3 }}>
              <div style={{ background: 'rgb(245, 245, 245)', borderBottom: '1px solid rgb(230, 230, 230)', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <picture>
                  <source srcSet="/imgs/laptop-landing-10.png" type="image/webp" />
                  <img width={'100%'} src="/imgs/laptop-landing-10.png" alt="Afforai support multiple document formats" data-xblocker="passed" />
                </picture>
              </div>
              <div style={{ padding: 15 }}>
                <Typography fontSize={16} color={'rgb(34, 34, 34)'} paddingBottom={1} fontWeight={500}>Built in Document Viewer</Typography>
                <Typography fontSize={12} color={'rgb(82, 82, 82)'}>Never Switch tabs again. Afforai’s document viewer means that you can have your uploaded files right next to your chatbot, giving you the ability to search the file, and refer to it for data citations.</Typography>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={10} md={4} sx={{ border: '1px solid rgb(230, 230, 230)', borderRadius: 3 }}>
            <div style={{ background: 'rgb(245, 245, 245)', borderBottom: '1px solid rgb(230, 230, 230)', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
              <picture>
                <source srcSet="/imgs/laptop-landing-9.png" type="image/webp" />
                <img width={'100%'} src="/imgs/laptop-landing-9.png" alt="Afforai support multiple document formats" data-xblocker="passed" />
              </picture>
            </div>
            <div style={{ padding: 15 }}>
              <Typography fontSize={16} color={'rgb(34, 34, 34)'} paddingBottom={1} fontWeight={500}>Unbreakable Security</Typography>
              <Typography fontSize={12} color={'rgb(82, 82, 82)'}>
                Afforai uses Azure Server & Azure OpenAI API. In other words, your data is more than safe with us. &nbsp;<a style={{ color: 'blue' }}>Learn more.</a>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container justifyContent='center' mt={30} alignItems={'center'} gap={2}>
        <Grid item md={5} sm={10} xs={12}>
          <Grid item mb={3}>
            <Button sx={{ textTransform: 'none', width: { xs: '100%', md: 148 }, borderRadius: 2, border: '2px solid rgb(128, 54, 255)' }} variant="outlined" size="medium">
              Most versatile
            </Button>
          </Grid>
          <Typography fontSize={36} fontWeight={600} sx={{ textAlign: { xs: 'center', md: 'left' } }} lineHeight='130%' color={'rgb(34, 34, 34)'}>
            Create multiple chatbots for different purposes
          </Typography>
          <Typography fontWeight={400} color={'rgb(82, 82, 82)'} fontSize={16} sx={{ paddingRight: { md: 15, xs: 0 }, textAlign: { md: 'left', xs: 'center' } }} py={2}>
            Legal documents? Summarising a book? Extracting data from a website? We allow you to create multiple chatbots at one time, so you can use Afforai for a whole range of purposes.
          </Typography>
          <Grid item container gap={2}>
            <Button sx={{ textTransform: 'none', width: { xs: '100%', md: 148 }, borderRadius: 2, background: 'linear-gradient(135deg,#6004ff,#7f35ff 23.95%,#370097 60.11%,#8d4aff)' }} variant="contained" size="medium">
              Get started
            </Button>
            <Button sx={{ textTransform: 'none', width: { xs: '100%', md: 148 }, borderRadius: 2, backgroundColor: 'white', color: 'black' }} variant="contained" size="medium">
              View pricing
            </Button>
          </Grid>
        </Grid>
        <Grid md={5} xs={12}>
          <img src="/imgs/laptop-landing-11.png" width={'100%'} />
        </Grid>
      </Grid>

      <Grid item container justifyContent='space-around' mt={30} alignItems={'center'} gap={2}>
        <Grid md={4} xs={12}>
          <img src="/imgs/laptop-landing-12.png" width={'100%'} />
        </Grid>
        <Grid item md={6} sm={10} xs={12}>
          <Grid item mb={3}>
            <Button sx={{ textTransform: 'none', width: { xs: '100%', md: 220 }, borderRadius: 2, border: '2px solid rgb(128, 54, 255)' }} variant="outlined" size="medium">
              Different Modes Available
            </Button>
          </Grid>
          <Typography fontSize={36} fontWeight={600} sx={{ textAlign: { xs: 'center', md: 'left' } }} lineHeight='130%' color={'rgb(34, 34, 34)'}>
            Customize your assistant with a range of different modes
          </Typography>
          <Typography fontWeight={400} color={'rgb(82, 82, 82)'} fontSize={16} sx={{ paddingRight: { md: 15, xs: 0 }, textAlign: { md: 'left', xs: 'center' } }} py={2}>
            Further power your questions with additional modes. Afforai allows you to switch between three different modes, each which have unique ways of utilising our AI tools to answer your question(s).
          </Typography>
          <Grid item container gap={3} alignItems={'top'} sx={{ flexWrap: "nowrap" }}>
            <img src="/imgs/fast-forward.svg" height={24}></img>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>

              <Typography fontSize={16} color='rgb(58, 2, 153)' fontWeight={500}>
                Fast Mode (default) &nbsp;&nbsp;&nbsp;&nbsp;<span className="badge1">1 credit</span>
              </Typography>
              <Typography fontSize={14} color='rgb(38, 2, 102)'>
                Quickly ask a question and receive an answer from the AI. This mode is most suited for applications that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search).
              </Typography>
            </div>
          </Grid>
          <Grid item container gap={3} alignItems={'top'} sx={{ flexWrap: "nowrap" }} mt={3}>
            <img src="/imgs/power-off.svg" height={24}></img>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Typography fontSize={16} color='rgb(58, 2, 153)' fontWeight={500}>
                Powerful Mode &nbsp;&nbsp;&nbsp;&nbsp;<span className="badge1">4 credits</span>
              </Typography>
              <Typography fontSize={14} color='rgb(38, 2, 102)'>
                Get answers of extra high quality from the AI. This mode is most suited for applications that require inferences as well as the full documents to be scanned (ex. Textual Data Analysis, Search with Inference, Report Generation).
              </Typography>
            </div>
          </Grid>
          <Grid item container gap={3} alignItems={'top'} sx={{ flexWrap: "nowrap" }} mt={3}>
            <img src="/imgs/search-plus.svg" height={24}></img>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Typography fontSize={16} color='rgb(58, 2, 153)' fontWeight={500}>
                Google Mode &nbsp;&nbsp;&nbsp;&nbsp;<span className="badge1">5 credits</span>
              </Typography>
              <Typography fontSize={14} color='rgb(38, 2, 102)'>
                Supplement your answers with the top 3 results from Google Search. This adds extra reliability to back up our already incredibly accurate answers.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container justifyContent='space-around' mt={30} alignItems={'center'} gap={2}>
        <Grid item md={5} sm={10} xs={12}>
          <Grid item mb={3}>
            <Button sx={{ textTransform: 'none', width: { xs: '100%', md: 250 }, borderRadius: 2, border: '2px solid rgb(128, 54, 255)' }} variant="outlined" size="medium">
              Multiple Language Supported
            </Button>
          </Grid>
          <Typography fontSize={36} fontWeight={600} sx={{ textAlign: { xs: 'center', md: 'left' } }} lineHeight='130%' color={'rgb(34, 34, 34)'}>
            Regardless of where you are from, Afforai is for you
          </Typography>
          <Typography fontWeight={400} color={'rgb(82, 82, 82)'} fontSize={16} sx={{ paddingRight: { md: 15, xs: 0 }, textAlign: { md: 'left', xs: 'center' } }} py={2}>
            We support more than 100 Languages, meaning you can seamlessly use our services regardless of where you are from. Our Cross Language Querying feature also allows flawless translation of documents.
          </Typography>
        </Grid>
        <Grid md={5} xs={12}>
          <img src="/imgs/laptop-landing-13.png" width={'100%'} />
        </Grid>
      </Grid>

      <Grid item container justifyContent='space-around' mt={30} alignItems={'center'} gap={2}>
        <Grid md={5} xs={12}>
          <img src="/imgs/laptop-landing-14.png" width={'100%'} />
        </Grid>
        <Grid item md={5} sm={10} xs={12}>
          <Grid item mb={3}>
            <Button sx={{ textTransform: 'none', width: { xs: '100%', md: 250 }, borderRadius: 2, border: '2px solid rgb(128, 54, 255)' }} variant="outlined" size="medium">
              Get more out of your files
            </Button>
          </Grid>
          <Typography fontSize={36} fontWeight={600} sx={{ textAlign: { xs: 'center', md: 'left' } }} lineHeight='130%' color={'rgb(34, 34, 34)'}>
            File Wizard - a game changing new feature
          </Typography>
          <Typography fontWeight={400} color={'rgb(82, 82, 82)'} fontSize={16} sx={{ paddingRight: { md: 15, xs: 0 }, textAlign: { md: 'left', xs: 'center' } }} py={2}>
            Convert your files with less effort than ever. Afforai’s File Wizard feature allows you to transform your files, in limitless different ways. We can translate, summarize, or explain your upload in no time.
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent='center' mt={45} flexDirection={'column'} gap={4}>
        <Grid item container justifyContent='center'>
          <div className="your-productivity">Seamless Integrations - Coming Soon</div>
        </Grid>
        <Grid item container justifyContent={'center'}>
          <Typography textAlign='center' maxWidth={556} color={'color: rgb(34, 34, 34)'} fontWeight={600} lineHeight={'130%'} fontSize={36}>Upload Files directly from Google Drive, One Drive & Dropbox</Typography>
        </Grid>
        <Grid item container justifyContent={'center'}>
          <Typography textAlign='center' maxWidth={556} color={'color: rgb(82, 82, 82)'} fontWeight={400} lineHeight={'130%'} fontSize={16}>Afforai allows you to upload files directly from Google Drive, One Drive & Dropbox, meaning your experience will be smooth sailing regardless of your preferred</Typography>
        </Grid>
        <Grid item container justifyContent={'center'}>
          <Grid item md={6} xs={12}>
            <img src="/imgs/laptop-landing-15.png" width={'100%'} />
          </Grid>
        </Grid>
      </Grid>

      <Grid container justifyContent='center' mt={45} flexDirection={'column'} gap={4}>
        <Grid item container justifyContent={'center'}>
          <Typography textAlign='center' color={'color: rgb(34, 34, 34)'} fontWeight={600} lineHeight={'130%'} fontSize={36}>Unquestionable accuracy & reliability</Typography>
        </Grid>
        <Grid item container justifyContent={'center'}>
          <Typography textAlign='center' maxWidth={556} color={'color: rgb(82, 82, 82)'} fontWeight={400} lineHeight={'130%'} fontSize={16}>We pride ourselves on the quality of our chatbot’s responses, and go the extra mile to ensure the accuracy & reliability of our answers.</Typography>
        </Grid>
        <Grid item container justifyContent={'center'} sx={{ gap: { xs: 2, md: 0 } }}>
          <Grid item xs={12} sm={10} md={4} px={1}>
            <Grid sx={{ border: '1px solid rgb(230, 230, 230)', borderRadius: 3 }}>
              <div style={{ background: 'rgb(245, 245, 245)', borderBottom: '1px solid rgb(230, 230, 230)', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <picture>
                  <source srcSet="/imgs/laptop-landing-17.png" type="image/webp" />
                  <img width={'100%'} src="/imgs/laptop-landing-17.png" alt="Afforai support multiple document formats" data-xblocker="passed" />
                </picture>
              </div>
              <div style={{ padding: 15 }}>
                <Typography fontSize={16} color={'rgb(34, 34, 34)'} paddingBottom={1} fontWeight={500}>
                  Trusted by users all over the World
                </Typography>
                <Typography fontSize={12} color={'rgb(82, 82, 82)'}>
                  Afforai is used all around the World, saving thousands of people time and money with our speed & accuracy.
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={10} md={4} px={1}>
            <Grid sx={{ border: '1px solid rgb(230, 230, 230)', borderRadius: 3 }}>
              <div style={{ background: 'rgb(245, 245, 245)', borderBottom: '1px solid rgb(230, 230, 230)', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <picture>
                  <source srcSet="/imgs/laptop-landing-18.png" type="image/webp" />
                  <img width={'100%'} src="/imgs/laptop-landing-18.png" alt="Afforai support multiple document formats" data-xblocker="passed" />
                </picture>
              </div>
              <div style={{ padding: 15 }}>
                <Typography fontSize={16} color={'rgb(34, 34, 34)'} paddingBottom={1} fontWeight={500}>
                  Information filtering
                </Typography>
                <Typography fontSize={12} color={'rgb(82, 82, 82)'}>
                  Afforai gives you the highest quality answers, and filters out any irrelevant information.
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={10} md={4} px={1}>
            <Grid sx={{ border: '1px solid rgb(230, 230, 230)', borderRadius: 3 }}>
              <div style={{ background: 'rgb(245, 245, 245)', borderBottom: '1px solid rgb(230, 230, 230)', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <picture>
                  <source srcSet="/imgs/laptop-landing-19.png" type="image/webp" />
                  <img width={'100%'} src="/imgs/laptop-landing-19.png" alt="Afforai support multiple document formats" data-xblocker="passed" />
                </picture>
              </div>
              <div style={{ padding: 15 }}>
                <Typography fontSize={16} color={'rgb(34, 34, 34)'} paddingBottom={1} fontWeight={500}>
                  Built in Comprehension Model
                </Typography>
                <Typography fontSize={12} color={'rgb(82, 82, 82)'}>
                  Our powerful comprehension model increases the power of our data retrieval.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Feedback />

      <Grid item container justifyContent='space-around' mt={30} alignItems={'center'} gap={2}>
        <Grid item md={6} sm={10} xs={12}>
          <Grid item mb={3}>
            <Button sx={{ textTransform: 'none', width: { xs: '100%', md: 250 }, borderRadius: 2, border: '2px solid rgb(128, 54, 255)' }} variant="outlined" size="medium">
              My promise to you
            </Button>
          </Grid>
          <Typography fontSize={36} fontWeight={600} sx={{ textAlign: { xs: 'center', md: 'left' } }} lineHeight='130%' color={'rgb(34, 34, 34)'}>
            100% money back guaranteed if you are not satisfied
          </Typography>
          <Typography fontWeight={400} color={'rgb(82, 82, 82)'} fontSize={16} sx={{ paddingRight: { md: 15, xs: 0 }, textAlign: { md: 'left', xs: 'center' } }} py={2}>
            We crafted Afforai with total belief in our ability to make a chatbot that is not only powerful and reliable, but able to maximise your satisfaction as a user. This is why we have implemented a money back guarantee if you find yourself not satisfied with the capabilities of Afforai.
          </Typography>
        </Grid>
        <Grid md={4} xs={12}>
          <img src="/imgs/laptop-landing-20.png" width={'100%'} />
        </Grid>
      </Grid>

      <Grid container justifyContent='center' mt={45} flexDirection={'column'} gap={2}>
        <Grid item container justifyContent={'center'}>
          <Typography textAlign='center' maxWidth={556} color={'color: rgb(34, 34, 34)'} fontWeight={600} lineHeight={'130%'} fontSize={36}>Start saving time today!</Typography>
        </Grid>
        <Grid item container justifyContent={'center'}>
          <Typography textAlign='center' maxWidth={556} color={'color: rgb(82, 82, 82)'} fontWeight={400} lineHeight={'130%'} fontSize={16}>Join an ever-growing community, and get with Afforai started free of charge!</Typography>
        </Grid>
        <Grid item container justifyContent={'center'}>
          <Button sx={{ textTransform: 'none', width: { xs: '100%', md: 180 }, borderRadius: 2, background: 'linear-gradient(135deg,#6004ff,#7f35ff 23.95%,#370097 60.11%,#8d4aff)' }} variant="contained" size="medium">Get start for free</Button>
        </Grid>
      </Grid>

      <div className="laptop-landing-3-feedback">
        <img src="/imgs/laptop-landing-3.png"></img>
      </div>

      <Grid container justifyContent='center' mt={40} flexDirection={'column'} gap={2} alignItems={'center'}>
        <Grid item container justifyContent={'center'}>
          <Typography fontSize={36} fontWeight={600}>FAQs</Typography>
        </Grid>
        <Grid item container justifyContent={'center'}>
          <Typography fontSize={16}>For more information, check out our <span style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}>Help Center.</span></Typography>
        </Grid>
        {
          faqs.map(item => <FAQ {...item} />)
        }
      </Grid>

      <Grid
        container
        mt={30}
        sx={{
          border: 'padding: 24px 24px 12px; border: 1px solid rgb(230, 230, 230)',
          borderRadius: 4
        }}
        px={4}
        py={5}
        justifyContent={'space-between'}
      >
        <Grid item container xs={12} md={3} flexDirection='row' gap={2}>
          <Grid item container gap={1} xs={12} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <img src='/imgs/logo.webp' height={24} width={24}></img>
            <Typography fontSize={18} fontWeight={500}>Afforai</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ textAlign: { xs: 'center', md: 'left' } }} color={'rgb(82, 82, 82)'} fontSize={13}>Afforai is your research tool in to damn near anything. Helping you summarise, translate, and withdraw data from documents.</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ textAlign: { xs: 'center', md: 'left' } }} color={'rgb(82, 82, 82)'} fontSize={13}>Copyright © 2023 Afforai Inc. All rights reserved.</Typography>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <img src="imgs/top-post-badge.svg" width={195} height={42} />
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ textAlign: { xs: 'center', md: 'left' } }} color={'rgb(17, 17, 17)'} fontSize={16}>Backed by</Typography>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <img src="/imgs/sputnikatx.png" width={137} height={46} />
          </Grid>
        </Grid>

        <Grid item container xs={12} md={2} flexDirection='row' justifyContent={'flex-start'} alignItems={'flex-start'} gap={2} sx={{ mt: { xs: 8, md: 0 } }}>
          <Grid item container xs={12} gap={3}>
            <Grid item xs={12}><Typography color={'rgb(18, 18, 18)'} fontSize={16} sx={{ textAlign: { xs: 'center', md: 'left' } }}>Company</Typography></Grid>
            <Grid item xs={12}><Typography color={'rgb(82, 82, 82)'} fontSize={12} sx={{ textAlign: { xs: 'center', md: 'left' } }}>Affiliate</Typography></Grid>
            <Grid item xs={12}><Typography color={'rgb(82, 82, 82)'} fontSize={12} sx={{ textAlign: { xs: 'center', md: 'left' } }}>Security</Typography></Grid>
            <Grid item xs={12}><Typography color={'rgb(82, 82, 82)'} fontSize={12} sx={{ textAlign: { xs: 'center', md: 'left' } }}>Roadmap</Typography></Grid>
            <Grid item xs={12}><Typography color={'rgb(82, 82, 82)'} fontSize={12} sx={{ textAlign: { xs: 'center', md: 'left' } }}>Contact Us</Typography></Grid>
          </Grid>
        </Grid>

        <Grid item container xs={12} md={2} flexDirection='row' justifyContent={'flex-start'} alignItems={'flex-start'} gap={2} sx={{ mt: { xs: 8, md: 0 } }}>
          <Grid item container xs={12} gap={3}>
            <Grid item xs={12}><Typography color={'rgb(18, 18, 18)'} fontSize={16} sx={{ textAlign: { xs: 'center', md: 'left' } }}>Resources</Typography></Grid>
            <Grid item xs={12}><Typography color={'rgb(82, 82, 82)'} fontSize={12} sx={{ textAlign: { xs: 'center', md: 'left' } }}>Help Center</Typography></Grid>
            <Grid item xs={12}><Typography color={'rgb(82, 82, 82)'} fontSize={12} sx={{ textAlign: { xs: 'center', md: 'left' } }}>API Docs</Typography></Grid>
            <Grid item xs={12}><Typography color={'rgb(82, 82, 82)'} fontSize={12} sx={{ textAlign: { xs: 'center', md: 'left' } }}>Terms of Use</Typography></Grid>
            <Grid item xs={12}><Typography color={'rgb(82, 82, 82)'} fontSize={12} sx={{ textAlign: { xs: 'center', md: 'left' } }}>Privacy Policy</Typography></Grid>
          </Grid>
        </Grid>

        <Grid item container xs={12} md={2} flexDirection='row' justifyContent={'flex-start'} alignItems={'flex-start'} gap={2} sx={{ mt: { xs: 8, md: 0 } }}>
          <Grid item container xs={12} gap={3}>
            <Grid item xs={12}><Typography color={'rgb(18, 18, 18)'} fontSize={16} sx={{ textAlign: { xs: 'center', md: 'left' } }}>Follow Us</Typography></Grid>
            <Grid item xs={12}><Typography color={'rgb(82, 82, 82)'} fontSize={12} sx={{ textAlign: { xs: 'center', md: 'left' } }}>Facebook Group</Typography></Grid>
            <Grid item xs={12}><Typography color={'rgb(82, 82, 82)'} fontSize={12} sx={{ textAlign: { xs: 'center', md: 'left' } }}>LinkedIn</Typography></Grid>
            <Grid item xs={12}><Typography color={'rgb(82, 82, 82)'} fontSize={12} sx={{ textAlign: { xs: 'center', md: 'left' } }}>Twitter</Typography></Grid>
            <Grid item xs={12}><Typography color={'rgb(82, 82, 82)'} fontSize={12} sx={{ textAlign: { xs: 'center', md: 'left' } }}>Medium Blog</Typography></Grid>
          </Grid>
        </Grid>

        <Grid item container xs={12} md={2} flexDirection='row' justifyContent={'flex-start'} alignItems={'flex-start'} gap={2} sx={{ mt: { xs: 8, md: 0 } }}>
          <Grid item container xs={12} gap={3}>
            <Grid item xs={12}><Typography fontSize={16} sx={{ textAlign: { xs: 'center', md: 'left' } }}>Language</Typography></Grid>
            <Grid item xs={12}><Typography color={'rgb(82, 82, 82)'} fontSize={12} sx={{ textAlign: { xs: 'center', md: 'left' } }}>English</Typography></Grid>
            <Grid item xs={12}><Typography color={'rgb(82, 82, 82)'} fontSize={12} sx={{ textAlign: { xs: 'center', md: 'left' } }}>Vietnamese</Typography></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}


export default Home;