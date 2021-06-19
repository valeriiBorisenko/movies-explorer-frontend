function SocialLink({ href, title, sectionClass }) {
  return (
    <li className={`${sectionClass}`}>
      <a className="social-link link-opacity" href={href} target="_blank" rel="noreferrer">{title}</a>
    </li>
  )
}

export default SocialLink;
