# imp.cond-projectives
`imp.cond-projectives` · 推出 · strong 边 · 根 `../`

`def.free-compact-hausdorff` 自由紧 Hausdorff 空间 + `def.condensed-set` 凝聚态集 + `def.projective-object` 投射 / 内射对象 + `prop.sheaf-epi-criterion` 满态射的局部判据 → `prop.cond-projectives` Cond 有足够多投射对象

**证明。** 分两步。
- **自由紧 Hausdorff 空间是投射对象。** 记 $F = \beta I$ 自由。

任给满态射 $X \twoheadrightarrow Y$ 与 $y \in Y(F)$。

由**满态射的判据**（在自由对象上逐点满），$y$ 在某个覆盖上局部有原像：存在有限不交并分解 $F = \coprod_{k=1}^{n} F_{k}$ 与 $x_{k} \in X(F_{k})$ 使 $p(x_{k}) = y|_{F_{k}}$。

> 续见 proofs/imp.cond-projectives.2.md
