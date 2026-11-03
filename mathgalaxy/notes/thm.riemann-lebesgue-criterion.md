# 可积 ⟺ 不连续点零测　`thm.riemann-lebesgue-criterion`　·　说明
根 `../`

**两个方向用到的工具完全不同**（这是这条判据最值得记住的地方）：

- **「可积 $\implies$ 零测」**：只用 Riemann 和。取分割把振幅大的小区间挑出来，它们的长度和 $\to 0$（可积性给出振幅控制），于是 $D$ 被一列总长任意小的开区间覆盖 $\implies$ $m(D) = 0$。**这一步在 Riemann 积分内部就完成，不需要测度论。**
- **「零测 $\implies$ 可积」**：**这一步用到 Lebesgue 测度的性质** —— 需要“零测集可用总长 $< \varepsilon$ 的开集覆盖”，再在这些区间外把 $f$ 当成“几乎连续”来控制振幅。用到的关键事实是：**紧集上连续 $\implies$ 一致连续**（`def.lebesgue-number` 的注里那条路），把 $D$ 挖掉之后剩下的部分可以一致地压振幅。

> 续见 notes/thm.riemann-lebesgue-criterion.2.md
