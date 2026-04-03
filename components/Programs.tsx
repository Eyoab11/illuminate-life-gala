const programs = [
  {
    num: '01',
    ghost: 'I',
    name: 'Mental Health',
    desc: 'Expanding access to compassionate mental health services — counseling, community support, and crisis intervention for underserved populations who deserve care without barriers.'
  },
  {
    num: '02',
    ghost: 'II',
    name: 'Substance Recovery',
    desc: 'Funding evidence-based recovery programs that address the root causes of addiction with dignity, medical expertise, and the long-term community support that changes lives.'
  },
  {
    num: '03',
    ghost: 'III',
    name: 'Surgical Access',
    desc: 'Providing life-saving surgeries to individuals who cannot afford care — partnering with top surgical teams to eliminate every financial barrier to life-changing treatment.'
  }
];

export default function Programs() {
  return (
    <div id="programs" className="programs-wrap">
      <div className="programs-inner">
        <div className="prog-header">
          <p className="sec-label reveal">What We Fund</p>
          <h2 className="sec-title reveal">Three pillars of <em>transformative</em> care</h2>
        </div>
        <div className="prog-grid">
          {programs.map((prog, i) => (
            <div key={prog.num} className={`prog-card reveal ${i === 1 ? 'd1' : i === 2 ? 'd2' : ''}`}>
              <span className="prog-ghost">{prog.ghost}</span>
              <p className="prog-num">Program {prog.num}</p>
              <p className="prog-name">{prog.name}</p>
              <p className="prog-desc">{prog.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
