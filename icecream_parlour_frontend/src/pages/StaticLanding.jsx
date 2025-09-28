import React, { useEffect } from 'react';
import '../assets/common.css';
import '../assets/macbook-pro-16-inch-right-view-mockup-label-60-194.css';

/**
 * PUBLIC_INTERFACE
 * StaticLanding
 * A React component that renders the static "MacBook Pro 16 inch Right View Mockup label (60:194)" screen
 * generated from provided HTML/CSS assets. This preserves the original layout and styles by importing
 * common.css and the screen-specific CSS. Assets under ./assets/figmaimages are referenced with the
 * correct relative paths via CRA's public folder handling.
 *
 * Notes:
 * - This screen uses absolute positioning and a fixed artboard size to exactly match the design.
 * - The original static JS provided smooth scrolling for [data-scroll] anchors; we add a tiny effect here to mimic it.
 */
function StaticLanding() {
  useEffect(() => {
    // Smooth scroll for elements with data-scroll like the original assets/app.js
    const handler = (e) => {
      const t = e.target.closest('[data-scroll]');
      if (!t) return;
      e.preventDefault();
      const sel = t.getAttribute('data-scroll');
      const el = document.querySelector(sel);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handler, false);
    return () => document.removeEventListener('click', handler, false);
  }, []);

  return (
    <div className="artboard" id="screen-root" role="main" aria-label="Ice Cream Parlour Landing">
      <div id="frame-60-195" className="style-65">
        {/* Group 46 */}
        <div id="n-60-197" className="abs style-2"></div>
        <div id="n-60-198" className="abs style-2"></div>
        <div id="n-60-199" className="abs style-2"></div>
        <img id="n-60-200" className="abs style-54" src="/assets/figmaimages/figma_image_60_200.png" alt="Rose Gold Feminine Calligraphy Monogram 40" />

        {/* Vectors */}
        <img id="n-60-201" className="abs style-30" src="/assets/figmaimages/figma_image_60_201.png" alt="Vector 8" />
        <div id="n-60-202" className="abs style-31"></div>
        <img id="n-60-203" className="abs style-31" src="/assets/figmaimages/figma_image_60_203.png" alt="Vector 12" />
        <img id="n-60-204" className="abs style-32" src="/assets/figmaimages/figma_image_60_204.png" alt="Vector 9" />
        <div id="n-60-205" className="abs style-33"></div>
        <img id="n-60-206" className="abs style-33" src="/assets/figmaimages/figma_image_60_206.png" alt="Vector 13" />

        {/* Group 40 */}
        <div id="n-60-208" className="abs style-2"></div>
        <div id="n-60-209" className="abs style-2"></div>
        <div id="n-60-210" className="abs style-2"></div>
        <img id="n-60-211" className="abs" src="/assets/figmaimages/figma_image_60_211.png" alt="Rose Gold Feminine 42 3" />
        <div id="n-60-212" className="abs typo-53 multiline">50% Off
On Sweet Corn</div>
        <div id="n-60-214" className="abs typo-30">01/04</div>
        <img id="n-60-215" className="abs" src="/assets/figmaimages/figma_image_60_215.png" alt="right arrow" />
        <div id="n-60-216" className="abs style-2"></div>

        {/* Group 39 */}
        <div id="n-60-218" className="abs style-2"></div>
        <div id="n-60-219" className="abs style-2"></div>
        <div id="n-60-220" className="abs style-2"></div>
        <div id="n-60-221" className="abs typo-53 multiline">50% Off
On Sweet Corn</div>
        <div id="n-60-223" className="abs typo-30">01/04</div>
        <div id="n-60-224" className="abs style-2"></div>
        <div id="n-60-225" className="abs style-2"></div>
        <img id="n-60-226" className="abs" src="/assets/figmaimages/figma_image_60_226.png" alt="Rose Gold Feminine 42 2" />

        {/* Group 38 */}
        <div id="n-60-228" className="abs style-2"></div>
        <div id="n-60-229" className="abs style-2"></div>
        <div id="n-60-230" className="abs style-2"></div>
        <div id="n-60-231" className="abs typo-53 multiline">50% Off
On Sweet Corn</div>
        <div id="n-60-233" className="abs typo-30">01/04</div>
        <div id="n-60-234" className="abs style-2"></div>
        <div id="n-60-235" className="abs style-2"></div>
        <img id="n-60-236" className="abs" src="/assets/figmaimages/figma_image_60_236.png" alt="Rose Gold Feminine 42 1" />

        {/* Top bar */}
        <img id="n-60-238" className="abs" src="/assets/figmaimages/figma_image_60_238.png" alt="ice-cream-cup" />
        <div id="n-60-240" className="abs typo-27">Home</div>
        <div id="n-60-241" className="abs typo-27">Contact</div>
        <div id="n-60-243" className="abs typo-27">Menu</div>
        <div id="n-60-244" className="abs style-2"></div>
        <div id="n-60-246" className="abs style-2"></div>
        <div id="n-60-247" className="abs typo-27">Order Type</div>
        <img id="n-60-248" className="abs" src="/assets/figmaimages/figma_image_60_248.png" alt="search" />
        <div id="n-60-250" className="abs style-1"></div>
        <div id="n-60-251" className="abs style-1"></div>

        {/* Hero */}
        <div id="n-60-252" className="abs typo-35">Frosty Delights</div>
        <div id="n-60-253" className="abs typo-32">CORN</div>
        <div id="n-60-254" className="abs typo-31">ice Cream</div>

        <div id="n-60-255" className="abs style-66"></div>
        <div id="n-60-256" className="abs style-34"></div>
        <div id="n-60-257" className="abs style-34"></div>
        <div id="n-60-258" className="abs typo-33">Order Now</div>

        <img id="n-60-259" className="abs style-67" src="/assets/figmaimages/figma_image_60_259.png" alt="" />
        <img id="n-60-260" className="abs style-35" src="/assets/figmaimages/figma_image_60_260.png" alt="" />
        <img id="n-60-261" className="abs style-35" src="/assets/figmaimages/figma_image_60_261.png" alt="" />
        <img id="n-60-262" className="abs style-36" src="/assets/figmaimages/figma_image_60_262.png" alt="play" />

        {/* Dots */}
        <div id="n-60-263" className="abs style-37"></div>
        <div id="n-60-264" className="abs style-38"></div>
        <div id="n-60-265" className="abs style-38"></div>
        <div id="n-60-266" className="abs style-37"></div>
        <div id="n-60-267" className="abs style-38"></div>
        <div id="n-60-268" className="abs style-38"></div>

        {/* Decorative ellipses */}
        <div id="n-60-269" className="abs style-38" aria-hidden="true"></div>
        <div id="n-60-270" className="abs style-38" aria-hidden="true"></div>
        <div id="n-60-271" className="abs style-38" aria-hidden="true"></div>
        <img id="n-60-272" className="abs style-57" src="/assets/figmaimages/figma_image_60_272.png" alt="Product Image Tall" />

        {/* Mid text block */}
        <div id="n-60-274" className="abs typo-39">new cup ice cream</div>
        <div id="n-60-275" className="abs style-17"></div>
        <div id="n-60-276" className="abs style-17"></div>
        <div id="n-60-277" className="abs typo-36 multiline">enjoy your 
every bite</div>
        <div id="n-60-278" className="abs typo-38">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

        {/* Explore group */}
        <img id="n-60-281" className="abs style-68" src="/assets/figmaimages/figma_image_60_281.png" alt="" />
        <img id="n-60-282" className="abs style-38" src="/assets/figmaimages/figma_image_60_282.png" alt="" />
        <img id="n-60-283" className="abs style-39" src="/assets/figmaimages/figma_image_60_283.png" alt="" />
        <div id="n-60-285" className="abs style-69"></div>
        <div id="n-60-286" className="abs style-41"></div>
        <div id="n-60-287" className="abs style-41"></div>
        <div id="n-60-288" className="abs typo-37">explore more</div>

        {/* Our top selling */}
        <div id="n-60-290" className="abs typo-37">Our top selling</div>
        <div id="n-60-291" className="abs style-17"></div>
        <div id="n-60-292" className="abs style-17"></div>
        <div id="n-60-293" className="abs typo-36 multiline">popular
ice cream</div>
        <div id="n-60-294" className="abs typo-38">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

        <div id="n-60-296" className="abs style-70"></div>
        <div id="n-60-297" className="abs style-42"></div>
        <div id="n-60-298" className="abs style-42"></div>
        <div id="n-60-299" className="abs typo-37">explore more</div>

        <div id="n-60-301" className="abs style-71"></div>
        <div id="n-60-302" className="abs style-43"></div>
        <div id="n-60-303" className="abs style-43"></div>
        <div id="n-60-304" className="abs typo-47">explore more</div>

        {/* Product cards */}
        <div id="n-60-306" className="abs style-44"></div>
        <div id="n-60-307" className="abs style-44"></div>
        <div id="n-60-308" className="abs style-44"></div>
        <img id="n-60-309" className="abs style-61" src="/assets/figmaimages/figma_image_60_309.png" alt="Product 1" />

        <div id="n-60-311" className="abs style-44"></div>
        <div id="n-60-312" className="abs style-44"></div>
        <div id="n-60-313" className="abs style-44"></div>
        <img id="n-60-314" className="abs style-61" src="/assets/figmaimages/figma_image_60_314.png" alt="Product 2" />

        <div id="n-60-315" className="abs typo-40 multiline">soft cream with banana 
flyover</div>
        <div id="n-60-316" className="abs typo-40 multiline">soft cream with banana 
flyover</div>
        <div id="n-60-317" className="abs typo-40">Rs. 350/-</div>
        <div id="n-60-318" className="abs typo-40">Rs. 350/-</div>
        <div id="n-60-319" className="abs typo-38">ice cream</div>
        <div id="n-60-320" className="abs typo-38">ice cream</div>
        <img id="n-60-321" className="abs style-45" src="/assets/figmaimages/figma_image_60_321.png" alt="" />
        <div id="n-60-322" className="abs style-45"></div>
        <img id="n-60-323" className="abs" src="/assets/figmaimages/figma_image_60_323.png" alt="bag" />
        <div id="n-60-324" className="abs"></div>
        <img id="n-60-325" className="abs style-46" src="/assets/figmaimages/figma_image_60_325.png" alt="arrow" />
        <div id="n-60-326" className="abs"></div>

        <img id="n-60-327" className="abs" src="/assets/figmaimages/figma_image_60_327.png" alt="delicious-ice-cream banner" />

        <div id="n-60-329" className="abs typo-43">On Sunday Special</div>
        <div id="n-60-330" className="abs style-17"></div>
        <div id="n-60-331" className="abs style-17"></div>
        <div id="n-60-332" className="abs typo-42 multiline">Buy 2 get1
free</div>
        <div id="n-60-334" className="abs typo-44">Get now</div>
        <img id="n-60-335" className="abs style-2" src="/assets/figmaimages/figma_image_60_335.png" alt="triangle" />

        {/* Stats */}
        <div id="n-60-336" className="abs style-2"></div>
        <div id="n-60-337" className="abs style-47"></div>
        <div id="n-60-338" className="abs typo-54 multiline">10k
daily sells</div>

        <div id="n-60-339" className="abs style-2"></div>
        <div id="n-60-340" className="abs style-47"></div>
        <div id="n-60-341" className="abs typo-54 multiline">2k
outlets</div>

        <div id="n-60-342" className="abs style-48"></div>
        <div id="n-60-343" className="abs style-48"></div>
        <img id="n-60-344" className="abs" src="/assets/figmaimages/figma_image_60_344.png" alt="" />
        <div id="n-60-345" className="abs"></div>

        <div id="n-60-346" className="abs typo-37">why choose us</div>
        <div id="n-60-347" className="abs style-17"></div>
        <div id="n-60-348" className="abs style-17"></div>
        <div id="n-60-349" className="abs typo-37 multiline">Fast and best 
quality ice cream</div>
        <div id="n-60-350" className="abs style-17"></div>

        <div id="n-60-353" className="abs typo-44">4.5</div>
        <img id="n-60-354" className="abs" src="/assets/figmaimages/figma_image_60_354.png" alt="star" />
        <div id="n-60-355" className="abs typo-55">100k Reviews</div>

        {/* Footer */}
        <div id="n-60-356" className="abs style-49"></div>
        <img id="n-60-357" className="abs" src="/assets/figmaimages/figma_image_60_357.png" alt="" />
        <div id="n-60-358" className="abs typo-35">Frosty Delights</div>
        <div id="n-60-359" className="abs typo-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

        <div id="n-60-360" className="abs typo-51">Quick Link’s</div>
        <div id="n-60-361" className="abs typo-51">Social Media</div>

        <div id="n-60-362" className="abs typo-50">Home</div>
        <div id="n-60-363" className="abs typo-50">Facebook</div>
        <div id="n-60-364" className="abs typo-50">Buy ice Cream</div>
        <div id="n-60-365" className="abs typo-50">Instagram</div>
        <div id="n-60-366" className="abs typo-50">Contact</div>
        <div id="n-60-367" className="abs typo-50">Tweeter</div>
        <div id="n-60-368" className="abs typo-50">Support</div>
        <div id="n-60-369" className="abs typo-50">LinkedIn</div>
        <div id="n-60-370" className="abs typo-50">Privacy</div>

        <div id="n-60-371" className="abs typo-51">Join Us</div>
        <div id="n-60-372" className="abs typo-52">enter email</div>
        <div id="n-60-373" className="abs style-50"></div>
        <div id="n-60-374" className="abs style-50"></div>

        <div id="n-60-375" className="abs style-51"></div>
        <img id="n-60-376" className="abs style-51" src="/assets/figmaimages/figma_image_60_376.png" alt="" />
        <div id="n-60-377" className="abs typo-56">subscribe</div>

        <div id="n-60-378" className="abs style-29"></div>
        <div id="n-60-379" className="abs typo-49">Frosty Delights.com©all right reserved </div>
      </div>
    </div>
  );
}

export default StaticLanding;
