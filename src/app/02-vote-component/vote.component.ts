

export class VoteComponent {
  totalVotes: number = 0;

  public upVote(){
    this.totalVotes++;
  }

  public downVote(){
    this.totalVotes--;
  }
}
