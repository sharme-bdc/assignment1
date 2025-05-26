import { list } from "postcss"

function App() {
  return (
    <>
      <header>
        <div className="top-bar">
          <div className="text-center"> 
            We're Leading Educational Consultancy in Bangladesh.
          </div>
          <div className="flex gap-3">
            <div className="font-thin">Office Hours: 10:00AM–07:00PM</div>
            <div className="social-icon">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <div class="info-bar">
          <img src="https://dreamstudyinternational.com/wp-content/uploads/2023/10/dsi-logo-large-1.1-300x86.png" alt="Logo" class="w-60" />

          <div class="info-box">
            <i class="fas fa-phone info-icon"></i>
            <div>
              <p class="font-bold">Call Us:</p>
              <p>+880 14066 99551-4</p>
            </div>
          </div>

          <div class="info-box">
            <i class="fas fa-envelope info-icon"></i>
            <div>
              <p class="font-bold">Email Us:</p>
              <p>dreamstudyinternational@gmail.com</p>
            </div>
          </div>

          <div class="info-box">
            <i class="fas fa-location-arrow info-icon"></i>
            <div>
              <p class="font-bold">Location:</p>
              <p>Gulshan 02</p>
            </div>
          </div>
        </div>

        <nav class="nav-bar">
          <div class="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <div class="relative group font-bold">
              <button className="focus:outline-none">Countries ▾</button>
            </div>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div><button class="apply-button">Apply Now</button></div>
        </nav>
      </header>

      {/* Dream Study section */}
      <div class="first-section">
        <div className="flex justify-center bg-[#F1F4F9] py-20">
          <img src="https://dreamstudyinternational.com/wp-content/uploads/2023/10/dsi-logo-large-1.1-300x86.png" alt="Logo" className="w-80" />
        </div>
        <div className="dream-study">  
          <div className="md:w-7/12 w-full md:items-center md:justify-center py-6">
              <img src="https://dreamstudyinternational.com/wp-content/uploads/2025/04/In-House-Edu-Expo-May25-Dream-Study-International.jpg" alt="Logo" className="w-auto h-auto" />
          </div>
          <div className="md:w-5/12 w-full bg-white border-gray-400 rounded-md">
            <div className="text-2xl font-bold px-8 py-8 bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-t-md">Apply Now!</div>
              <div className="px-8 py-8">
                <form class="w-full p-6" method="POST" action="#">
                  <div class="flex items-center border border-gray-300 rounded-md px-3 py-2 mb-4 bg-[#f8fbff]">
                    <input type="text" name="name" placeholder="Name" required class="w-full bg-transparent outline-none text-gray-700" />
                  </div>
                  <div class="flex items-center border border-gray-300 rounded-md px-3 py-2 mb-4 bg-[#f8fbff]">
                    <input type="tel" name="phone" placeholder="Phone Number" required class="w-full bg-transparent outline-none text-gray-700" />
                  </div>
                  <div class="flex items-center border border-gray-300 rounded-md px-3 py-2 mb-4 bg-[#f8fbff] justify-between">
                    <div class="flex items-center w-full">
                      <select name="education" required class="w-full bg-transparent outline-none text-gray-700 appearance-none">
                        <option disabled selected>Last Education:</option>
                        <option>HSC</option>
                        <option>Bachelor's</option>
                      </select>
                    </div>
                  </div>
                  <div class="flex items-center border border-gray-300 rounded-md px-3 py-2 mb-6 bg-[#f8fbff]">
                    <input type="text" name="country" placeholder="Preferred Country" required class="w-full bg-transparent outline-none text-gray-700" />
                  </div>
                  <button type="submit" class="px-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-md font-semibold shadow-md hover:opacity-90 transition">
                    Register
                  </button>
                </form>
              </div>
          </div>
        </div>
      </div>

      {/* We Offer One Stop Solution */}
      <div className="bg-[#F1F4F9] py-20">
        <div className="flex justify-center pb-8">
          <img src="https://dreamstudyinternational.com/wp-content/uploads/2023/11/one-stop-768x100.png" alt="We Offer One Stop Solutions" className="w-auto h-auto" />
        </div>
        <div className="card-group gap-4">
          <div className="card dark:card-dark">
            <i className="fas fa-file text-[45px] text-blue-500 pb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Eligibility Assessment</h3>
          </div>

          <div className="card dark:card-dark">
            <i className="fas fa-file text-[45px] text-blue-500 pb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Eligibility Assessment</h3>
          </div>

          <div className="card dark:card-dark">
            <i className="fas fa-file text-[45px] text-blue-500 pb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Eligibility Assessment</h3>
          </div>

          <div className="card dark:card-dark">
            <i className="fas fa-file text-[45px] text-blue-500 pb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Eligibility Assessment</h3>
          </div>
        </div>

        <div className="card-group gap-4">
          <div className="card dark:card-dark">
            <i className="fas fa-file text-[45px] text-blue-500 pb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Eligibility Assessment</h3>
          </div>

          <div className="card dark:card-dark">
            <i className="fas fa-file text-[45px] text-blue-500 pb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Eligibility Assessment</h3>
          </div>

          <div className="card dark:card-dark">
            <i className="fas fa-file text-[45px] text-blue-500 pb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Eligibility Assessment</h3>
          </div>

          <div className="card dark:card-dark">
            <i className="fas fa-file text-[45px] text-blue-500 pb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Eligibility Assessment</h3>
          </div>
        </div>
      </div>

      <footer>
        <div className="bg-[#F6F9FE] text-gray-600 text-[18px] max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-4 py-20 items-center justify-center">
          <div>
            <img src="https://dreamstudyinternational.com/wp-content/uploads/2023/10/dsi-logo-large-1.1-300x86.png" alt="" className="mb-4 w-60 h-auto" />
            <p>
              We are renowned education consultancy for prospective students who would like to study in
              <strong>CANADA, UK, USA, Australia, Sweden, Netherlands, Denmark</strong> & other European Countries.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#"><i className="footer-icon fab fa-facebook"></i></a>
              <a href="#"><i class="footer-icon fab fa-instagram"></i></a>
              <a href="#"><i class="footer-icon fab fa-linkedin"></i></a>
              <a href="#"><i class="footer-icon fab fa-youtube"></i></a>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-4">Sitemap</h3>
            <ul class="space-y-2 text-[16px]">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Countries</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-4">Countries</h3>
            <ul class="space-y-2 text-[16px]">
              <li><a href="#" className="hover:underline">Australia</a></li>
              <li><a href="#" className="hover:underline">Canada</a></li>
              <li><a href="#" className="hover:underline">New Zealand</a></li>
              <li><a href="#" className="hover:underline">USA</a></li>
              <li><a href="#" className="hover:underline">UK</a></li>
            </ul>
          </div>

          <div className="footer-card">
            <div className="mb-3 flex items-center space-x-2">
              <i className="fas fa-file text-[45px] text-blue-500 pb-4"></i>
            </div>
          
            <div class="flex items-center text-sm space-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8c0-1.104-.896-2-2-2H6c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2V8z" />
              </svg>
              <p className="text-[16px] text-gray-600"><strong>Gulshan-02:</strong> House-12B, Lift-04, Flat-4A, Kamal Attaturk Avenue, Gulshan-02, Dhaka-1212.</p>
            </div>
            <div class="flex items-center text-sm space-x-2">
              <svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 32 32">
                <path d="M16.001 3C9.373 3 4 8.373 4 15c0 6.628 5.373 12 12.001 12C22.628 27 28 21.628 28 15c0-6.627-5.372-12-11.999-12zM16 25c-5.514 0-10-4.486-10-10S10.486 5 16 5s10 4.486 10 10-4.486 10-10 10z"/><path d="M21.293 12.707a1 1 0 00-1.414-1.414L15 16.172l-2.293-2.293a1 1 0 10-1.414 1.414L15 19l6.293-6.293z"/>
              </svg>
              <p className="text-[16px] text-gray-600"><strong>WhatsApp:</strong> +880 14066 99551-4</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-center">
          <div> &copy; 2025 Dream Study International. All rights reserved.</div>
          <div>
            <ul className="text-white flex gap-3">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </footer>

    </>
  )
}

export default App
