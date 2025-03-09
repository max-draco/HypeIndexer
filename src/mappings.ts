import { Token, Swap } from "../generated/schema";
import { TokenCreated, Swap as SwapEvent } from "../generated/Launchpad/Launchpad";
import { BigInt } from "@graphprotocol/graph-ts";

export function handleTokenCreated(event: TokenCreated): void {
  let token = new Token(event.params.tokenAddress.toHex());
  token.name = event.params.name;
  token.symbol = event.params.symbol;
  token.decimals = event.params.decimals;
  token.totalSupply = event.params.totalSupply;
  token.save();
}

export function handleSwap(event: SwapEvent): void {
  let swap = new Swap(event.transaction.hash.toHex());
  swap.sender = event.params.sender;
  swap.amount0In = event.params.amount0In;
  swap.amount1In = event.params.amount1In;
  swap.amount0Out = event.params.amount0Out;
  swap.amount1Out = event.params.amount1Out;
  swap.timestamp = event.block.timestamp;
  swap.save();
}

