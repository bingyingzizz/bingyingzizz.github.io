# Cond 有足够多投射对象　`prop.cond-projectives`　·　说明
根 `../`

**证明。** 分两步。
- **自由紧 Hausdorff 空间是投射对象。** 记 $F = \beta I$ 自由。任给满态射 $X \twoheadrightarrow Y$ 与 $y \in Y(F)$。由**满态射的判据**（在自由对象上逐点满），$y$ 在某个覆盖上局部有原像：存在有限不交并分解 $F = \coprod_{k=1}^{n} F_{k}$ 与 $x_{k} \in X(F_{k})$ 使 $p(x_{k}) = y|_{F_{k}}$。把 $(x_{k})_{k}$ 拼起来，用「保有限积」的层条件得 $x \in X(F) = \prod_{k} X(F_{k})$，且 $p(x) = y$ —— 这就是提升。
- **足够多投射对象。** 任给凝聚态集 $X$：由「$\mathbf{FCHaus}$ 张成 $\mathbf{CHaus}$」（每个紧 Hausdorff 空间都是自由空间的满像），可取含 $X$ 的满态射 $\coprod_{i} h_{F_{i}} \twoheadrightarrow X$（$h_{F_{i}}$ 表示自由空间），而自由对象的**余积**仍是投射对象（「投射对象的余积还是投射的」）。于是每个 $X$ 都是某个投射对象的商。∎

> 续见 notes/prop.cond-projectives.2.md
