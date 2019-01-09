import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { rhythm, scale } from '../utils/typography'
import styled from 'styled-components'

/* Components */
import Layout from '../components/Layout'
import SponsorGrid from '../components/SpnosorGrid'
import SponsorsGridImage from '../assets/grid.jpeg'
import Keynote from '../components/KeynoteSpeaker'

const GradientBG = styled.div`
  margin: 0;
  padding: 0;
  background: rgba(10, 141, 255, 1);
  background: -moz-linear-gradient(
    top,
    rgba(10, 141, 255, 1) 0%,
    rgba(20, 142, 248, 1) 4%,
    rgba(255, 175, 75, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(10, 141, 255, 1)),
    color-stop(4%, rgba(20, 142, 248, 1)),
    color-stop(100%, rgba(255, 175, 75, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(10, 141, 255, 1) 0%,
    rgba(20, 142, 248, 1) 4%,
    rgba(255, 175, 75, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(10, 141, 255, 1) 0%,
    rgba(20, 142, 248, 1) 4%,
    rgba(255, 175, 75, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(10, 141, 255, 1) 0%,
    rgba(20, 142, 248, 1) 4%,
    rgba(255, 175, 75, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(10, 141, 255, 1) 0%,
    rgba(20, 142, 248, 1) 4%,
    rgba(255, 175, 75, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0a8dff', endColorstr='#ffaf4b', GradientType=0 );
  color: white;
  width: 100vw;
`

const YoutubeEmbed = styled.div`
  margin-left: calc(50% - 320px);
  max-width: 600px;
  min-height: 320px;

  & > iframe {
    width: 100%;
    min-height: 320px;
    height: 100%;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`

const SectionTitle = styled.h2`
  text-align: center;
  margin: 60px 0 60px 0;
  margin-bottom: 60px;
  font-size: 32px;
`

const SponsorsImage = styled.div`
  @media screen and (max-width: 900px) {
    & > img {
      margin-left: -13.25vw;
      max-width: 120vw;
    }
  }
`

const MessageContainer = styled.div`
  margin: auto;
  text-align: center;
  width: 400px;

  & > p {
    font-size: 18px;
  }

  & > ul {
    list-style-type: none;
  }

  @media screen and (max-width: 900px) {
    width: 80%;
  }
`
const Date = styled.h1`
  color: white;
  text-align: center;
`

const AgendaItem = styled.div`
  flex: 1;
  display: flex;

  @media screen and (max-width: 600px) {
    padding: 12px;
    width: 100vw;
  }
`

const AgendaDetailHiddenMobile = styled.div`
  text-align: center;
  flex: 1;
  font-size: 18px;
  padding: 12px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`

const AgendaDetail = styled.div`
  text-align: center;
  flex: 1;
  font-size: 18px;
  padding: 12px;

  @media screen and (max-width: 900px) {
    padding: 12px;
  }
`

const RegistrationBoxes = styled.div`
  display: flex;
  margin-left: -50%;
  margin-top: 60px;
  width: 200%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`

const Box = styled.a`
  box-shadow: none;
  color: white;
  flex: 1;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;

  @media screen and (max-width: 900px) {
    margin-top: 22px;
  }
`

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const fridaySchedule = get(this, 'props.data.fridaySchedule.edges')
    const saturdaySchedule = get(this, 'props.data.saturdaySchedule.edges')
    const sundaySchedule = get(this, 'props.data.sundaySchedule.edges')
    const faqs = get(this, 'props.data.faq.edges')
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          meta={[
            {
              name: 'viewport',
              content:
                'width=device-width, initial-scale=1.0,  minimum-scale=1.0',
            },
          ]}
          title={siteTitle}
        />
        <GradientBG style={{ padding: '60px' }}>
          <h1
            style={{
              ...scale(1.5),
              marginTop: rhythm(1.5),
              textAlign: 'center',
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'white',
              }}
              to={'/'}
            >
              Hack Arizona
            </Link>
          </h1>
          <h3
            style={{
              marginTop: rhythm(-0.5),
              marginBottom: rhythm(1.5),
              textAlign: 'center',
              color: 'white',
            }}
          >
            Powered by <a href="https://jacobs.com">Jacobs</a>
          </h3>
          <YoutubeEmbed>
            <iframe
              src="https://www.youtube.com/embed/e6b5szAeDqA?start=72"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </YoutubeEmbed>
          <MessageContainer>
            <h2 style={{ color: 'white' }}>
              January 18-20th, at the University of Arizona
            </h2>
            <h1 style={{ color: 'white' }}>Register now!</h1>
            <RegistrationBoxes>
              <Box href="https://airtable.com/shrXWfagMcHHGnhVI">Attendees</Box>
              <Box href="https://airtable.com/shrCsRlDHcqPJgkBG">Mentors</Box>
              <Box href="https://airtable.com/shrGWkt7LWq5CRH9g">Volunteers</Box>
            </RegistrationBoxes>
          </MessageContainer>
        </GradientBG>
        <div style={{ marginTop: '0', padding: '60px 0 60px 0' }}>
          <SectionTitle id="prizes">Our Sponsors!</SectionTitle>
          <MessageContainer>
            <p>
              Hack Arizona is supported by some of the best and most exciting
              companies in the world. These companies engage with attendees throughout the weekend, 
              provide challenges to implement their technology, and help foster our world-class 
              community of innovation and entrepreneurship.
            </p>
          </MessageContainer>
        </div>
        <div id="sponsors" style={{ backgroundColor: 'black' }}>
          <SponsorsImage>
            <img src={SponsorsGridImage} />
          </SponsorsImage>
        </div>
        <GradientBG style={{ paddingBottom: '60px' }}>
          <SectionTitle
            style={{ marginTop: '0', paddingTop: '60px', color: 'white' }}
            id="agenda"
          >
            Agenda Overview
          </SectionTitle>
          <h2 style={{ color: 'white', textAlign: 'center' }}>
            {' '}
            <a
              style={{ color: 'white' }}
              href="https://first-byte.org/hack-arizona-2019"
              target="_blank"
            >
              View our 20+ firstByte education sessions here!
            </a>
          </h2>
          <Date>Friday (1/18)</Date>
          <AgendaItem style={{ borderBottom: '2px solid white' }}>
            <AgendaDetail>Start</AgendaDetail>
            <AgendaDetailHiddenMobile>End</AgendaDetailHiddenMobile>
            <AgendaDetail>Title</AgendaDetail>
            <AgendaDetail>Location</AgendaDetail>
          </AgendaItem>
          {fridaySchedule.map(({ node }) => {
            return (
              <AgendaItem key={node.frontmatter.name}>
                <AgendaDetail>{node.frontmatter.startTime}</AgendaDetail>
                <AgendaDetailHiddenMobile>
                  {node.frontmatter.endTime}
                </AgendaDetailHiddenMobile>
                <AgendaDetail>{node.frontmatter.name}</AgendaDetail>
                <AgendaDetail>{node.frontmatter.location}</AgendaDetail>
              </AgendaItem>
            )
          })}
          <Date>Saturday (1/19)</Date>
          <AgendaItem style={{ borderBottom: '2px solid white' }}>
            <AgendaDetail>Start</AgendaDetail>
            <AgendaDetailHiddenMobile>End</AgendaDetailHiddenMobile>
            <AgendaDetail>Title</AgendaDetail>
            <AgendaDetail>Location</AgendaDetail>
          </AgendaItem>
          {saturdaySchedule.map(({ node }) => {
            return (
              <AgendaItem key={node.frontmatter.name}>
                <AgendaDetail>{node.frontmatter.startTime}</AgendaDetail>
                <AgendaDetailHiddenMobile>
                  {node.frontmatter.endTime}
                </AgendaDetailHiddenMobile>
                <AgendaDetail>{node.frontmatter.name}</AgendaDetail>
                <AgendaDetail>{node.frontmatter.location}</AgendaDetail>
              </AgendaItem>
            )
          })}
          <Date>Sunday (1/20)</Date>
          <AgendaItem style={{ borderBottom: '2px solid white' }}>
            <AgendaDetail>Start</AgendaDetail>
            <AgendaDetailHiddenMobile>End</AgendaDetailHiddenMobile>
            <AgendaDetail>Title</AgendaDetail>
            <AgendaDetail>Location</AgendaDetail>
          </AgendaItem>
          {sundaySchedule.map(({ node }) => {
            return (
              <AgendaItem key={node.frontmatter.name}>
                <AgendaDetail>{node.frontmatter.startTime}</AgendaDetail>
                <AgendaDetailHiddenMobile>
                  {node.frontmatter.endTime}
                </AgendaDetailHiddenMobile>
                <AgendaDetail>{node.frontmatter.name}</AgendaDetail>
                <AgendaDetail>{node.frontmatter.location}</AgendaDetail>
              </AgendaItem>
            )
          })}
          <p style={{textAlign: 'center', paddingTop: '44px'}}>Please note that events and times are subject to change :)</p>
          <h2 style={{ textAlign: 'center' }}>
            {' '}
            <a
              style={{ color: 'white' }}
              href="https://first-byte.org/hack-arizona-2019"
              target="_blank"
            >
              View all of our educational sessions
            </a>
          </h2>
        </GradientBG>
        <div style={{ marginTop: '0', padding: '60px 0 60px 0' }}>
          <SectionTitle id="prizes">2019 Prize Categories</SectionTitle>
          <MessageContainer>
            <p>
              Our offical Hack Arizona prizes, and the prizes that will be given
              away by our sponsors will be announced the week of the hackathon.
            </p>
          </MessageContainer>
        </div>
        <GradientBG style={{ padding: '60px' }}>
          <SectionTitle
            id="keynote-speaker"
            style={{ color: 'white', fontSize: '36px' }}
          >
            Keynote Speaker
          </SectionTitle>
          <Keynote />
          <SectionTitle id="faq" style={{ color: 'white', marginTop: '60px' }}>
            Frequently Asked Questions
          </SectionTitle>
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '0',
              maxWidth: rhythm(24),
              padding: rhythm(1 / 2),
            }}
          >
            {faqs.map(({ node }) => {
              return (
                <div key={node.frontmatter.question}>
                  <h3
                    style={{
                      color: 'white',
                      textDecoration: 'underline',
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    {node.frontmatter.question}
                  </h3>
                  <p>{node.frontmatter.answer}</p>
                </div>
              )
            })}
          </div>
        </GradientBG>
      </Layout>
    )
  }
}

export default Index

{
  /* Currently using aliases to query specific folders in our data */
}
{
  /* Specific sections of data can be accessed via props.data.__category__.fields */
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    faq : allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/faq/.*\\.md$/"}}
    ) {
      edges {
        node {
          frontmatter {
            question
            answer
          }
        }
      }
    }
    fridaySchedule : allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC },
      filter: {fileAbsolutePath: {regex: "/fridaySchedule/.*\\.md$/"}}
    ) {
      edges {
        node {
          frontmatter {
            name
            startTime
            endTime
            location
          }
        }
      }
    }
    saturdaySchedule : allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC },
      filter: {fileAbsolutePath: {regex: "/saturdaySchedule/.*\\.md$/"}}
    ) {
      edges {
        node {
          frontmatter {
            name
            startTime
            endTime
            location
          }
        }
      }
    }
    sundaySchedule : allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC },
      filter: {fileAbsolutePath: {regex: "/sundaySchedule/.*\\.md$/"}}
    ) {
      edges {
        node {
          frontmatter {
            name
            startTime
            endTime
            location
          }
        }
      }
    }
  }
`
