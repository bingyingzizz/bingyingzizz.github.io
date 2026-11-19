# imp.quintic-unsolvable
`imp.quintic-unsolvable` · 推出 · strong 边 · 根 `../`

`thm.radical-solvable` 根式可解 与 伽罗瓦群可解 + `prop.sn-solvable` 对称群的可解性 + `def.galois-group` 伽罗瓦群 + `def.irreducible-poly` 不可约多项式 → `thm.quintic-unsolvable` 五次方程没有根式解

**第二步：$G = \operatorname{Gal}(f)$ 传递且含 5-循环**。不可约多项式的伽罗瓦群在根集上传递：任取两根 $\alpha, \beta$，$\mathbb{Q}(\alpha) \cong \mathbb{Q}[x]/(f) \cong \mathbb{Q}(\beta)$ 给出一个把 $\alpha$ 送到 $\beta$ 的 $\mathbb{Q}$-嵌入，再延拓到分裂域。传递群的轨道大小 $5$ 整除 $|G|$，故 $5 \mid |G|$；由 Cauchy 定理，$G$ 含 5 阶元，而 $S_{5}$ 中的 5 阶元恰是 5-循环。记其中一个为 $\sigma$。

> 续见 proofs/imp.quintic-unsolvable.4.md
