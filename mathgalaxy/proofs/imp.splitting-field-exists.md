# imp.splitting-field-exists
`imp.splitting-field-exists` · 推出 · strong 边 · 根 `../`

`def.splitting-field` 分裂域 + `def.irreducible-poly` 不可约多项式 + `def.quotient-ring` 商环 + `def.polynomial-ring` 多项式环 + `def.field-extension` 域扩张 → `thm.splitting-field-exists` 分裂域存在

证明：对 $n=\deg f$ 归纳。$n=0$ 时 $f\in F^{\times}$，取 $K=F$。设 $n\ge1$。若 $f$ 在 $F[x]$ 中已分解为一次因子，取 $K=F$。否则取 $f$ 的次数 $d\ge2$ 的不可约因子 $g$，令 $F_1=F[x]/(g)$，$\alpha=x\bmod g$，则 $\alpha$ 是 $g$ 的根且 $[F_1:F]=d\le n$。在 $F_1[x]$ 中写 $f=(x-\alpha)h$，$\deg h=n-1$。由归纳假设，$h$ 在 $F_1$ 上有分裂域 $K$，且 $[K:F_1]\le(n-1)!$。则 $K$ 含 $f$ 的全部根，且 $K=F_1(h\text{ 的根})=F(\alpha,h\text{ 的根})$，故 $K$ 是 $f$ 的分裂域；次数 $[K:F]=[K:F_1][F_1:F]\le(n-1)!\cdot n=n!$。∎

> 对 $\deg f$ 归纳：模掉一个不可约因子添一个根，再对余因子递归。
