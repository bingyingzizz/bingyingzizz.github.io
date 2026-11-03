# σ-代数　`def.sigma-algebra`　·　续页（第 3 页）
[在星图里打开](../#n=def.sigma-algebra)　·　第 1 页 [nodes/def.sigma-algebra.md](./def.sigma-algebra.md)　·　上一页 [nodes/def.sigma-algebra.2.md](./def.sigma-algebra.2.md)

## 陈述（续）
两条都推不出来。
- **「可数并」不能弱化成「有限并」**：只有有限并 + 对补 得到的是**代数**（Boolean algebra），不是 $\sigma$-代数。差别是实质的：有理数集在 $2^{\mathbb{R}}$ 的有限并代数里可以被包含，但 $\{q\}$ 的可数并（$= \mathbb{Q}$）就不一定 —— 而测度论的全部内容都要数可数并。
- **「可数」不能加强成「任意」**：$\sigma$-
代数**不**对任意并封闭。反例：$\mathbb{R}$ 上的 Borel $\sigma$-代数对所有开集取并（开集全体是任意并封闭的）是对的，但对**任意**子集取并会跑出去（每个单点是 Borel，但其任意并可以是不可测集，前提是 $2^{\aleph_{0}}$ 个并——这需要选择公理构造 Vitali 集）。

> 续见 [nodes/def.sigma-algebra.4.md](./def.sigma-algebra.4.md)
