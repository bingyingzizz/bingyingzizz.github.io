# K-有界正合　`def.k-bounded-exact`
$K$-有界正合与 $K$-有界零调
layer 11 · 定义 · 凝聚态上同调 · 凝聚态数学+同调代数

设 $M^{\bullet}$ 是**半范数阿贝尔群**的复形，$K \in \mathbb{R}$。称 $M^{\bullet}$ 在 $M^{n}$ 处 **$K$-有界正合**，如果

$$\forall s \in M^{n},\ \forall \varepsilon > 0,\ \exists s' \in M^{n+1} :\quad \|s - d^{n+1}s'\| \le K\,\|d^{n}s\| + \varepsilon.$$

若 $M^{\bullet}$ 在每个 $M^{n}$ 处都 $K$-有界正合，则称它 **$K$-有界零调**。

## 为什么成立（入边，证明在 proofs/）
- `def.semi-normed-ab-group` 半范数阿贝尔群：用到了定义 半范数阿贝尔群　proofs/def-dep.kbexact-seminorm.md
- `def.cochain-complex` 上链复形：用到了定义 上链复形　proofs/def-dep.kbexact-complex.md

## 它能推出什么 / 谁在用它
- 被 `lem.k-bounded-completion` K-有界正合在完备化下不变 用
- 被 `prop.k-bounded-implies-exact` 相邻两条 K-有界 推出 正合 用

- …另有出边，续页见 `nodes/def.k-bounded-exact.2.md`

refs: Le Stum, Definition 8.2.1

> 说明见 `notes/def.k-bounded-exact.md`
