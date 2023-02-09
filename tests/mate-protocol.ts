import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { MateProtocol } from "../target/types/mate_protocol";

describe("mate-protocol", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.MateProtocol as Program<MateProtocol>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
