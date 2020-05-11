/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
[@bs.module "gatsby"]
external useStaticQuery: string => 'a = "useStaticQuery";
%bs.raw
{| import  {graphql}  from "gatsby" |};

module Image = Gatsby.Image;

[@bs.module "../utils/typography.js"]
external rhythm: float => string = "rhythm";

[@react.component]
let make = () => {
  let data =
    useStaticQuery(
      [%bs.raw
        {|
          graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `|}
      ],
    );
  let author = data##site##siteMetadata##author;
  <div
    style={
      ReactDOMRe.Style.make(~display="flex", ~marginBottom=rhythm(0.5), ())
    }>
    <Image
      fixed=data##avatar##childImageSharp##fixed
      alt=author
      style={
        ReactDOMRe.Style.make(
          ~marginRight=rhythm(0.5),
          ~marginBottom="0",
          ~width="100",
          ~borderRadius="100%",
          (),
        )
      }
      imgStyle={ReactDOMRe.Style.make(~borderRadius="100%", ())}
    />
    <div     
      style={
        ReactDOMRe.Style.make(~display="flex", ~flexDirection="column",())
    }>
      <p style={
        ReactDOMRe.Style.make(~marginBottom=rhythm(0.1), ())
      }>
        {React.string("Personal blog by ")}
        <a href="http://kretawiweka.site"> <strong> author </strong> </a>
      </p>
      <p style={
        ReactDOMRe.Style.make(~marginBottom=rhythm(0.1), ())
      }>
        {React.string("Coffee Drinker")}
      </p>    
    </div>
  </div>;
};

React.setDisplayName(make, "Bio");

let default = make;