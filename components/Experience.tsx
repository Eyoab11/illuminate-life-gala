const timeline = [
  { time: '6:00 PM', name: 'Arrival & Champagne Reception', desc: 'Welcome cocktails, curated art installations, and live ambient music in the Grand Foyer.' },
  { time: '7:00 PM', name: 'Doors Open · Grand Ballroom', desc: 'Guests are seated for the gourmet dinner experience designed by a Michelin-recognized culinary team.' },
  { time: '7:30 PM', name: 'Opening Remarks & Mission Showcase', desc: 'Immersive storytelling and impact presentations from community leaders and program beneficiaries.' },
  { time: '8:00 PM', name: 'Gourmet Dinner Service', desc: 'Multi-course fine dining paired with premium wine selections, celebrating the evening\'s vision.' },
  { time: '9:00 PM', name: 'Live Auction & Fund-a-Dream', desc: 'Exclusive auction items, live paddle raise, and direct giving with real-time impact tracking.' },
  { time: '9:45 PM', name: 'Awards & Recognition', desc: 'Honoring community champions and philanthropic leaders who have illuminated lives through action.' },
  { time: '10:15 PM', name: 'World-Class Entertainment', desc: 'A breathtaking live performance celebrating the evening\'s spirit, followed by dancing.' },
  { time: '11:30 PM', name: 'Farewell & Legacy Gift', desc: 'Guests depart with an exclusive keepsake and the knowledge that tonight changed lives.' }
];

export default function Experience() {
  return (
    <div id="experience" className="experience-wrap">
      <div className="experience-inner">
        <div className="exp-header">
          <p className="sec-label reveal">The Evening</p>
          <h2 className="sec-title reveal">An <em>unforgettable</em> night<br />crafted in every detail</h2>
        </div>
        <div className="timeline" id="timeline">
          {timeline.map((item) => (
            <div key={item.time} className="tl-item">
              <span className="tl-time">{item.time}</span>
              <div className="tl-dot-col">
                <div className="tl-dot" />
              </div>
              <div className="tl-body">
                <p className="tl-name">{item.name}</p>
                <p className="tl-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
