import { AccountIcon, AccountName, Container, ExpContainer, Rank } from "./styles";

export function ProfileCard() {
  return (
    <Container>
      <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
        <AccountIcon className="material-symbols-outlined">
          account_circle
        </AccountIcon>
        <AccountName>
          Cê do Vaz
          <span style={{marginLeft: 10, cursor: 'pointer'}} className="material-symbols-outlined">
            edit
          </span>
        </AccountName>
      </div>
      <Rank>Rank xxxxxxx</Rank>
      <hr />
      <ExpContainer>
        <p>EXP</p>
        <progress value={600} max={1000} />
        <p>600 / 1000</p>
      </ExpContainer>
    </Container>
  )
}