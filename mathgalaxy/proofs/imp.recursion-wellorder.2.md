# 良序性 $\implies$ 递归定理
`imp.recursion-wellorder` · 推出 · strong 边 · 根 `../`

`def.wellorder` 良序集 → `thm.recursion-wellorder` 超限递归

$$R = \{ (w, y) : \text{存在函数} f \text{ 定义在} W_{< w} \text{ 上、满足递归式，且} y = G(f) \}$$

它是集合：候选的 $f$ 都是 $W_{< w} \times V$ 的子集，先由幂集公理拿到 $\mathcal{P}(W \times V)$，再用分离公理模式从里面筛出满足条件的那些（$V$ 取一个足够大的集合即可，例如 $G$ 的值域之并的幂集的幂集）。由 ①，对每个 $w$ 至多一个 $y$，所以 $R$ **是单值的**，即 $R$ 是一个函数。

> 续见 proofs/imp.recursion-wellorder.3.md
