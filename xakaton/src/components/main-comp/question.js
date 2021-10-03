/** @format */

import { Variant } from "./style";

function Question({ askTitle, category, variants, order, onNextQuestion}) {
  let s=1;
  return (
    <div className='place'>
      <div className='scrol'>
        <div></div>
      </div>
      <div className='question'>
        <p>
          question <span>{order}</span>/3
        </p>
        <h5>{askTitle}</h5>
      </div>
      <hr />
      <div className='variants'>
        <div>
          {variants.map((variant) => (
            <Variant key={variant._id} onClick={() => onNextQuestion()}>
              <div className='order'>{s++}</div>
              <span>{variant.title}</span>
            </Variant>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Question;