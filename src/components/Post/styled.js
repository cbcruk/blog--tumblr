import styled from 'styled-components'

export default styled.div`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  font-size: 14px;
  color: #444;

  & + & {
    margin-top: 20px;
  }
`
