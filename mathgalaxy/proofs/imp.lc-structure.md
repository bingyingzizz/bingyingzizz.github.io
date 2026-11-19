# imp.lc-structure
`imp.lc-structure` · 推出 · strong 边 · 根 `../`

`def.locally-compact-space` 局部紧空间 + `def.hausdorff` Hausdorff 空间 + `def.compact` 紧 → `thm.lc-structure` 局部紧阿贝尔群结构定理

**证明（标准路线）。**
1. **连通部分**：$M^{0}$（单位元的连通分支）是闭子群。$M^0$ 是**连通局部紧阿贝尔群**，而这一类群恰好形如 $\mathbb{R}^{n}\times K$（$K$ 紧连通阿贝尔群）—— 这一步是经典理论（用「无小子群」/Lie 理论把 $M^{0}$ 的紧子群部分与向量群部分分开）。
2. **全不连通商**：$M/M^{0}$ 是**全不连通**的局部紧 Hausdorff 群；这类群必有**开紧子群**（取单位元的紧邻域并取它生成的子群的闭包）。
3. **拼起来**：取 $M_{1}$ 为某个开紧子群的原像，则 $M_{1}$ 开、$M_{1}/M^{0}$ 紧。于是 $M_{1}$ 是紧群 $K$ 被 $\mathbb{R}^{n}$ 扩张：$0 \to K \to M_{1} \to \mathbb{R}^{n} \to 0$。
4. **扩张分裂**：$\mathbb{R}^{n}$ 是**向量群**，而「紧群被向量群扩张必分裂」（对紧方向取

> 续见 proofs/imp.lc-structure.2.md
