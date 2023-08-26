import './about.style.scss';

function About() {
  return (
    <section id="about">
      <main data-aos="fade-right">
        <span>Let you know</span>
        <h1>About Me</h1>

        <p>
          as a graduate of a <span>mechanical engineering high school</span>, of
          course I learned programming on my own and I also had time to learn a
          little about
          <span> ui/ux designer</span> , currently I am
          <span>
            {' '}
            focusing on frontend skills and I really enjoy slicing from design
            to website
          </span>
          . but i also keep learning backend,
          <span> i know how to design database and build restfull api </span>. I
          am currently working in a non-programming field and I want to switch
          careers to become a programmer even without basic education and a
          college diploma
          <br />
          <br />
          Apart from coding, I like to watching YouTube, playing games and
          sometimes reading books. I am also good enough to play the guitar and
          also like sports such as football and badminton.
        </p>
      </main>
    </section>
  );
}

export default About;
