# Sylow 定理　`thm.sylow`　·　说明
根 `../`

⭐ Sylow 是 **Lagrange 的部分逆命题**：Lagrange 说「$|H|$ 必整除 $|G|$」，「$d \mid |G|$ $\implies$ 有 $d$ 阶子群」是假的；Sylow 说「**$p$-部分的最大那一档一定能取到，而且只差一个共轭**」。

⚠ Galois 理论**不需要** Sylow（Galois 对应只用到正规性，不用计数）。它在计划里标的是「可选」；收进来的理由是：它是群作用这套工具最干净的一个出口，也是「有限群分类」这门学问的第一块砖。

⭐ 标准用法（判断群不同构/不单）：$|G| = 15$。$n_3 \mid 5$ 且 $n_3 \equiv 1 \pmod 3$ $\implies$ $n_3 = 1$；$n_5 \mid 3$ 且 $n_5 \equiv 1 \pmod 5$ $\implies$ $n_5 = 1$。于是 $P_3 \trianglelefteq G$、$P_5 \trianglelefteq G$，且 $P_3 \cap P_5 = \{e\}$（阶互素），故 $G \cong P_3 \times P_5 \cong \mathbb{Z}/15$ —— **15 阶群必循环**。

⚠ 计数条件只是必要条件：$n_p \equiv 1 \pmod p$ 与 $n_p \mid m$ 同时不满足才排除，满足了也不能反推存在多少个。
