import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"
import c5 from "../assets/images/c5.avif"
import c6 from "../assets/images/c6.avif"
import c7 from "../assets/images/c7.avif"
import c8 from "../assets/images/c8.avif"

function Popular()
{
  return(
    <div class="popular">
    <h1 class="popular__title">Most Popular</h1>
    <p class="popular__subtitle">Pick the best fit</p>
    <div class="popular__container">

        <div class="course-card">
            <img src={c1}></img>
            <h3>2024 Python Data Visualisation Masterclass</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>

        <div class="course-card">
            <img src={c2}></img>
            <h3>Complete Web Development Tutorial 2024</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>

        <div class="course-card">
            <img src={c3}></img>
            <h3>Basic to Advance Javascript</h3>
            <p>Col Steele</p>
            <p>3.9 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>


        <div class="course-card">
            <img src={c4}></img>
            <h3>Basic to Advance Java Programming</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>

        <div class="course-card">
            <img src={c5}></img>
            <h3>Master the Art of Programming</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>


        <div class="course-card">
            <img src={c6}></img>
            <h3>Back-end Master Class Basic to Advance</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>


        <div class="course-card">
            <img src={c7}></img>
            <h3>Basic to Advance React JS Bootcamp</h3>
            <p>Col Steele</p>
            <p>3.9 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>

        <div class="course-card">
            <img src={c8}></img>
            <h3>Basic to Advance C# Programming</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>






    </div>

</div>


  )
}

export default Popular