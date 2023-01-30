import {VoteComponent} from "./vote.component";

describe('vote component', () => {
  let component: VoteComponent;
  beforeEach(()=> {
    component = new VoteComponent();
  })
  it('should increment votes by 1', function () {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement votes by 2', function () {
    component.downVote();
    component.downVote();
    expect(component.totalVotes).toBe(-2);
    expect(component.totalVotes).not.toBeFalsy()
  });

})
