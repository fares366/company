import React from "react";
import FormCard from "./FormCard";
import UploadBox from "./UploadBox";

export default function CompanyForm() {
  return (
    <form>
      <FormCard
        title="Company Information"
        icon={<svg width="41" height="43">{<svg width="41" height="43" viewBox="0 0 41 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_235_34)">
<path d="M23.3945 35.428H9.86963V14.9022C9.8705 14.7825 9.90335 14.6651 9.96477 14.5624C10.0262 14.4596 10.114 14.3751 10.219 14.3176L22.4001 7.65937C22.5026 7.60331 22.6178 7.57492 22.7346 7.57701C22.8514 7.5791 22.9656 7.61159 23.066 7.67128C23.1664 7.73097 23.2495 7.81579 23.3071 7.91738C23.3647 8.01897 23.3948 8.13383 23.3945 8.25062V35.428Z" stroke="#F59E0B" stroke-width="1.21875" stroke-linecap="round"/>
<path d="M32.8346 35.428H23.4619V14.5059L32.5188 19.686C32.6156 19.7465 32.6954 19.8307 32.7507 19.9306C32.8059 20.0306 32.8348 20.1429 32.8346 20.2571V35.428Z" stroke="#F59E0B" stroke-width="1.21875" stroke-linecap="round"/>
<path d="M18.8799 16.7029H14.1499" stroke="#F59E0B" stroke-width="1.21875" stroke-linecap="round"/>
<path d="M29.3342 21.7754H26.9692" stroke="#F59E0B" stroke-width="1.21875" stroke-linecap="round"/>
<path d="M29.3342 24.7922H26.9692" stroke="#F59E0B" stroke-width="1.21875" stroke-linecap="round"/>
<path d="M29.3342 28.0239H26.9692" stroke="#F59E0B" stroke-width="1.21875" stroke-linecap="round"/>
<path d="M29.3342 31.0339H26.9692" stroke="#F59E0B" stroke-width="1.21875" stroke-linecap="round"/>
<path d="M18.8799 20.4519H14.1499" stroke="#F59E0B" stroke-width="1.21875" stroke-linecap="round"/>
<path d="M18.8799 24.1472H14.1499" stroke="#F59E0B" stroke-width="1.21875" stroke-linecap="round"/>
<path d="M18.8799 27.8425H14.1499" stroke="#F59E0B" stroke-width="1.21875" stroke-linecap="round"/>
<path d="M18.8799 31.5378H14.1499" stroke="#F59E0B" stroke-width="1.21875" stroke-linecap="round"/>
<path d="M6.35596 35.428H36.6441" stroke="#F59E0B" stroke-width="1.21875" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="clip0_235_34">
<rect width="41" height="43" fill="white"/>
</clipPath>
</defs>
</svg>
}</svg>}
      >
        <UploadBox />
        <div className="grid-inputs">
          <div className="field">
            <label>Company Name *</label>
            <input type="text" placeholder="Enter company name" />
          </div>
          <div className="field">
            <label>Industry sector *</label>
            <input type="text" placeholder="e.g. Technology" />
          </div>
          <div className="field">
            <label>Company size *</label>
            <input type="text" placeholder="e.g. 11-50 employees" />
          </div>
          <div className="field">
            <label>Legal registration number *</label>
            <input type="text" placeholder="Enter registration number" />
          </div>
          <div className="field full-width">
            <label>Company headquarters address *</label>
            <input type="text" placeholder="Enter full address" />
          </div>
        </div>
      </FormCard>

      <FormCard
        title="Contact"
        icon={<svg width="26" height="26">{<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_235_68)">
<path d="M25.5938 16.3395C25.5938 13.9234 24.0064 11.8728 21.8205 11.171V8.72744C21.8205 4.43325 17.6913 0.666504 12.9837 0.666504C8.27612 0.666504 4.14696 4.43325 4.14696 8.72744V11.1829C1.97815 11.8947 0.40625 13.9356 0.40625 16.3395C0.40625 19.3328 2.84135 21.7681 5.83468 21.7681H7.32717C8.11269 21.7681 8.75144 21.1292 8.75144 20.3438V12.3366C8.75144 11.5742 8.14909 10.9547 7.39623 10.9178V8.83075C7.39623 6.38711 9.78571 3.65382 12.9837 3.65382C16.181 3.65382 18.5697 6.38707 18.5697 8.83075V10.9212C17.8331 10.9752 17.2486 11.5859 17.2486 12.3366V20.3438C17.2486 21.1292 17.8873 21.7681 18.6728 21.7681H19.7587L19.7567 23.6204H17.4595C17.3077 23.0399 16.7834 22.6082 16.156 22.6082H15.3038C14.5583 22.6082 13.9518 23.2148 13.9518 23.9602C13.9518 24.7057 14.5584 25.3123 15.3038 25.3123H16.156C16.7346 25.3123 17.2255 24.9451 17.4181 24.4329H20.1626C20.3868 24.4329 20.5684 24.2512 20.5688 24.0271L20.5712 21.7475C23.375 21.5386 25.5938 19.1958 25.5938 16.3395ZM16.156 24.4998H15.3038C15.0063 24.4998 14.7643 24.2578 14.7643 23.9602C14.7643 23.6627 15.0063 23.4207 15.3038 23.4207H16.156C16.4535 23.4207 16.6955 23.6627 16.6955 23.9602C16.6955 24.2578 16.4535 24.4998 16.156 24.4998ZM5.42843 20.938C3.07267 20.7315 1.21875 18.748 1.21875 16.3395C1.21875 13.9309 3.07267 11.9475 5.42843 11.741V20.938ZM7.93894 12.3367V20.3439C7.93894 20.6813 7.66439 20.9556 7.32717 20.9556H6.24093V11.7233H7.32717C7.66439 11.7233 7.93894 11.9985 7.93894 12.3367ZM12.9837 2.84136C9.63418 2.84136 6.58373 5.6962 6.58373 8.83079V10.9108H5.83468C5.53609 10.9108 5.24513 10.9414 4.9595 10.988V8.72744C4.9595 4.86607 8.70898 1.479 12.9837 1.479C17.2585 1.479 21.008 4.86607 21.008 8.72744V10.983C20.7326 10.9398 20.4526 10.9108 20.1654 10.9108H19.3822V8.83079C19.3822 5.69624 16.3325 2.84136 12.9837 2.84136ZM18.0611 20.3438V12.3366C18.0611 11.9984 18.3356 11.7233 18.6728 11.7233H19.7591V20.9556H18.6728C18.3356 20.9556 18.0611 20.6813 18.0611 20.3438ZM20.5716 20.938V11.741C22.9273 11.9475 24.7812 13.9309 24.7812 16.3395C24.7812 18.748 22.9273 20.7315 20.5716 20.938Z" fill="#F59E0B"/>
</g>
<defs>
<clipPath id="clip0_235_68">
<rect width="26" height="26" fill="white"/>
</clipPath>
</defs>
</svg>
}</svg>}
      >
        <div className="grid-inputs">
          <div className="field">
            <label>HR Manager name *</label>
            <input type="text" placeholder="Full name" />
          </div>
          <div className="field">
            <label>Professional email *</label>
            <input type="email" placeholder="name@company.com" />
          </div>
          <div className="field">
            <label>Phone Number *</label>
            <div className="phone-wrapper">
              <span className="flag">🇩🇿</span>
              <span className="code">+213</span>
              <input type="tel" />
            </div>
          </div>
        </div>
      </FormCard>

      <FormCard
        title="Company description"
        icon={<svg width="22" height="15">{<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.979 18.4165H16.5207C16.9694 18.4165 17.3332 18.7803 17.3332 19.229C17.3332 19.6403 17.0275 19.9803 16.6309 20.0341L16.5207 20.0415H2.979C2.53027 20.0415 2.1665 19.6777 2.1665 19.229C2.1665 18.8177 2.47217 18.4777 2.86875 18.4239L2.979 18.4165ZM2.979 14.0832H23.0207C23.4694 14.0832 23.8332 14.4469 23.8332 14.8957C23.8332 15.307 23.5275 15.647 23.1309 15.7008L23.0207 15.7082H2.979C2.53027 15.7082 2.1665 15.3444 2.1665 14.8957C2.1665 14.4843 2.47217 14.1444 2.86875 14.0906L2.979 14.0832ZM2.979 9.74984H23.0207C23.4694 9.74984 23.8332 10.1136 23.8332 10.5623C23.8332 10.9737 23.5275 11.3136 23.1309 11.3674L23.0207 11.3748H2.979C2.53027 11.3748 2.1665 11.0111 2.1665 10.5623C2.1665 10.151 2.47217 9.81106 2.86875 9.75725L2.979 9.74984ZM2.979 5.4165H23.0207C23.4694 5.4165 23.8332 5.78027 23.8332 6.229C23.8332 6.64034 23.5275 6.98029 23.1309 7.03409L23.0207 7.0415H2.979C2.53027 7.0415 2.1665 6.67774 2.1665 6.229C2.1665 5.81767 2.47217 5.47772 2.86875 5.42392L2.979 5.4165Z" fill="#F59E0B"/>
</svg>
}</svg>}
      >
        <div className="field">
          <label>Your description</label>
          <textarea placeholder="Write a brief overview..."></textarea>
        </div>
      </FormCard>

      <button type="submit" className="submit-btn">
        Submit my application <span>→</span>
      </button>

      <p className="footer-text">
        Already have an account?{" "}
        <a href="#" className="gold-link">
          log in here
        </a>
      </p>
    </form>
  );
}