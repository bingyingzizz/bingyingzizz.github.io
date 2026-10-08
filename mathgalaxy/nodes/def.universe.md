# Grothendieck 宇宙　`def.universe`
Grothendieck 宇宙（Grothendieck Universe）
layer 4 · 定义 · 范畴与图 · 范畴论

一个集合 $U$ 叫**宇宙**，如果它对集合论的基本构造封闭：

1. （传递）$x \in u \in U \implies x \in U$；
2. $x, y \in U \implies \{ x, y \} \in U$；
3. $x \in U \implies \mathcal{P}(x) \in U$；
4. 对任意 $p \in U$ 与任意 $f : p \to U$，有 $\bigcup_{t \in p} f(t) \in U$。

若 $U$ 含有无穷集，则 $\mathbb{N} \in U$。

## 为什么成立（入边，证明在 proofs/）
- `def.power-set` 幂集 𝒫(X)：用到了定义 幂集 𝒫(X)　proofs/def-dep.power-universe.md
- `def.union-inter` 并集与交集：用到了定义 并集与交集　proofs/def-dep.union-universe.md

refs: SGA 4, I.0

> 说明见 `notes/def.universe.md`
