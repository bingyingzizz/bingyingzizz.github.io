# Giraud 定理的证明
`imp.giraud` · 推出 · strong 边 · 根 `../`

`def.topos` 拓扑斯 + `def.canonical-topology` 标准拓扑 + `def.generator` 生成元集 + `lem.representable-quotient` 可表示性的下降 → `thm.giraud` Giraud 定理

**(1) $\implies$ (2)。** 给 $\mathcal{T}$ 配标准拓扑。要证每个层都可表示。任取层 $F$。

设 $S$ 是 $\mathcal{T}$ 的小生成元集。由 $S$ 生成，可以造出满态射

$$\coprod_{i \in I} X_{i} \longrightarrow F, \qquad X_{i} \in \mathcal{T}$$

（把每个 $X \in S$ 到 $F$ 的态射全体拼起来，生成性保证这族箭头合起来是满的。）每个 $X_{i}$ 作为可表示层是可表示的；再由 $F$ 是层，$X_{i} \times_{F} X_{j}$ 也在 $\mathcal{T}$ 里因而是可表示的。

> 续见 proofs/imp.giraud.4.md
