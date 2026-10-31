# Montel 定理　`thm.montel`　·　说明
根 `../`

**证明**：取紧集穷竭 $K_{1} \subset K_{2} \subset \cdots$、$\bigcup K_{j} = \Omega$。在 $K_{j}$ 上由 **Cauchy 不等式**（`thm.cauchy-inequality`）：若 $|f| \le M_{j}$ 在 $K_{j}$ 的某个 $r$-邻域上，则 $|f'| \le M_{j}/r$ 在 $K_{j}$ 上 —— 界与 $f$ 无关，所以 $\mathcal{F}$ 在 $K_{j}$ 上**等度连续**。一致有界是假设给的，于是 `thm.arzela-ascoli` 给出在 $K_{j}$ 上的收敛子列；对 $j = 1, 2, \ldots$ 逐层取对角线，得到在**每个** $K_{j}$ 上一致收敛的子列，即内闭一致收敛。

**极限全纯**：由 `thm.weierstrass-convergence`。∎

⭐ **它与紧性的关系**：Montel 说的是「$\mathcal{F}$ 相对紧」，所以任何**连续**泛函（比如 $f \mapsto |f'(z_{0})|$）在有界闭的族上取到最大值。Riemann 映射定理的全部力量就来自这一句：在「单叶 + $f(z_{0}) = 0$ + $f'(z_{0}) > 0$」的族里取使 $f'(z_{0})$ 最大的那个，再证明它必须映满圆盘。

> 续见 notes/thm.montel.2.md
