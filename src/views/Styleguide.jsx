export default function Styleguide() {
  return (
    <div className="view styleguide">
      <div className='view__header'>
        <h1>Styleguide</h1>   
      </div>
      
      <div className='view__content'>
        <div className="styleguide__group">
          <h3 className="underline">Typography</h3>
          <h1>H1</h1>
          <h2>H2</h2>
          <h3>H3</h3>
          <h4>H4</h4>
          <h5>H5</h5>
          <h6>H6</h6>
          <br/>
          <p>Paragraph Text</p>
          <span>Span Text</span>
          <div>Div Text</div>
        </div>
        <div className="styleguide__group">
          <h3 className="underline">Elements</h3>
          <button>Button</button><br></br>
          <a>Anchor Link</a>
        </div>
      </div>
    </div>
  );
}