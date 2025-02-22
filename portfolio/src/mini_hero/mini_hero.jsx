import "./mini_hero.css"
export default function Mini_hero() {
  return (
    <div className="container">
      <div className="img">
        <p>
          image Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Sapiente excepturi, fugit explicabo deserunt facilis recusandae
          pariatur nam similique ut, qui nostrum cupiditate a! Non a debitis ex
          consequatur sit odit!
        </p>
      </div>
      <div className="discription">
        <h2>
          <b>Pursuing Excellence in Software Engineering</b>
        </h2>
        <div className="dis-container">
          <div className="studies">
            <h3>
              Current Studies
            </h3>
            <p>
              Focused on mastering software development and competitive
              programming skills.
            </p>
          </div>
          <div className="universty-detail">
            <h3>University Details</h3>
            <p>
              Enrolled in a comprehensive Software Engineering program at Adama
              Science and Technology University.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
