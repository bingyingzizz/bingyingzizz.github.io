# imp.cg-equivalent-conditions
`imp.cg-equivalent-conditions` · 推出 · strong 边 · 根 `../`

`def.compactly-generated` 紧生成空间 + `def.quotient-topology` 商拓扑 → `prop.cg-equivalent-conditions` 紧生成空间的等价刻画

- (6) $\implies$ (2)：取 $Y = \coprod_{S \to X} S$（沿所有连续映射 $S \to X$，$S$ 紧 Hausdorff）。全体映射拼出 $Y \to X$，它显然满 —— **满的连续映射就是商映射**。
- (2) $\implies$ (3)：紧 Hausdorff 空间本身局部紧。
- (3) $\implies$ (1)：商映射 $Z \twoheadrightarrow X$（$Z$ 局部紧 Hausdorff）把 $Z$ 的紧生成性传下去 —— 商是余极限，而余极限的余极限还是余极限。
- (4) $\iff$ (1)：这是「由映射决定拓扑」的逐字翻译：用 $S$ 是紧空间这一条，把 $f^{-1}(Y)$ 的开性从 $f(S)$ 拉回到 $S$ 上。
- (5) $\iff$ (4)：把「$X \to Y$ 连续」按定义展

> 续见 proofs/imp.cg-equivalent-conditions.3.md
