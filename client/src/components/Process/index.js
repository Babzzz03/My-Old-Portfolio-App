import React from 'react';

import "./Process.css";
import image1 from "../../images/Goals.png";

import target from "../../images/process1.png";
import process from "../../images/process4.png";
import visual from "../../images/process5.png";
import content from "../../images/process6.png";
import visualapp from "../../images/process7.png";
import mobileTesting from "../../images/process8.png";
import launch from "../../images/process9.png";




const Process = () => {
  return (
    <div className="process__container" id="/process">
      <div className="header">
        <h1>Process</h1>
     
      </div>

      <div className="process__wrapper">
        <div className="process__section">
          <div className="process__image">
            <img className="process__image__1" src={target} alt="" srcset="" />
          </div>
          <div className="process__info">
            <h3>Goal identification</h3>
            <p>
              Where I work with the client to determine what goals the new
              website needs to fulfill. I.e., what its purpose is.
            </p>
          </div>
        </div>

        <div className="process__section">
          <div className="process__image">
            <img className="process__image__1" src={process} alt="" srcset="" />
          </div>
          <div className="process__info">
            <h3>Scope definition</h3>
            <p>
              Once we know the site's goals, we can define the scope of the
              project. I.e., what web pages and features the site requires to
              fulfill the goal, and the timeline for building those out.
            </p>
          </div>
        </div>

        <div className="process__section">
          <div className="process__image">
            <img className="process__image__1" src={visual} alt="" srcset="" />
          </div>
          <div className="process__info">
            <h3>Sitemap and wireframe creation</h3>
            <p>
              With the scope well-defined, we can start digging into the
              sitemap, defining how the content and features we defined in scope
              definition will interrelate.
            </p>
          </div>
        </div>

        <div className="process__section">
          <div className="process__image">
            <img className="process__image__1" src={content} alt="" />
          </div>
          <div className="process__info">
            <h3>Content creation</h3>
            <p>
              Now that we have a bigger picture of the site in mind, we can
              start creating content for the individual pages, always keeping
              search engine optimization (SEO) in mind to help keep pages
              focused on a single topic. It's vital that you have real content
              to work with for our next stage
            </p>
          </div>
        </div>

        <div className="process__section">
          <div className="process__image">
            <img
              className="process__image__1"
              src={visualapp}
              alt=""
              srcset=""
            />
          </div>
          <div className="process__info">
            <h3>Visual elements</h3>
            <p>
              With the site architecture and some content in place, we can start
              working on the visual brand. Depending on the client, this may
              already be well-defined, but you might also be defining the visual
              style from the ground up. Tools like style tiles, moodboards, and
              element collages can help with this process.
            </p>
          </div>
        </div>

        <div className="process__section">
          <div className="process__image">
            <img className="process__image__1" src={mobileTesting} alt="" />
          </div>
          <div className="process__info">
            <h3>Testing</h3>
            <p>
              By now, you've got all your pages and defined how they display to
              the site visitor, so it's time to make sure it all works. Combine
              manual browsing of the site on a variety of devices with automated
              site crawlers to identify everything from user experience issues
              to simple broken links.
            </p>
          </div>
        </div>

        <div className="process__section">
          <div className="process__image">
            <img className="process__image__1" src={launch} alt="" />
          </div>
          <div className="process__info">
            <h3>Launch</h3>
            <p>
              Once everything's working beautifully, it's time to plan and
              execute your site launch! This should include planning both launch
              timing and communication strategies — i.e., when will you launch
              and how will you let the world know? After that, it's time to
              break out the bubbly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;

