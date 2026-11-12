# 覆叠空间的道路提升与同伦提升
`imp.lifting-proof` · 推出 · strong 边 · 根 `../`

`def.covering-space` 覆叠空间 + `def.path-homotopy` 道路同伦 + `def.lebesgue-number` 勒贝格数 → `thm.lifting` 提升定理

道路提升：取 $b_0$ 的开覆盖 $\mathcal U$，使每个 $U\in\mathcal U$ 均匀覆叠、$p^{-1}(U)$ 是互不相交的开片且每片同胚到 $U$。由紧性取 Lebesgue 数 $\delta>0$：$[0,1]$ 中长度 $<\delta$ 的子区间落在某个 $\alpha^{-1}(U)$ 中。取分割 $0=t_0<\ldots<t_N=1$ 使每段长度 $<\delta$。

归纳构造 $\tilde\alpha$：$\tilde\alpha(0)=e_0$；若已定义到 $t_k$，取 $U_k\ni\alpha(t_k)$ 均匀覆叠，$\alpha([t_k,t_{k+1}])\subseteq U_k$，令 $\tilde\alpha$ 在 $[t_k,t_{k+1}]$ 上为 $\alpha$ 在含 $\tilde\alpha(t_k)$ 的那片上的逆同胚下的像。唯一性：相邻两步的片由起点与连续性唯一确定。

> 续见 proofs/imp.lifting-proof.2.md
