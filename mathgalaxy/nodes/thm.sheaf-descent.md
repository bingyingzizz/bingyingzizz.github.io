# 层的下降条件　`thm.sheaf-descent`
用覆盖族检验层
layer 16 · 定理 · 层与拓扑 · 范畴论

设 $\mathcal{C}$ 带预拓扑。预层 $F$ 是层 $\iff$ 对每个 $X$ 与每个覆盖族 $(X_{i} \to X)_{i \in I}$，序列

$$F(X) \longrightarrow \prod_{i \in I} F(X_{i}) \overset{\alpha}{\underset{\beta}{\rightrightarrows}} \prod_{i, j \in I} F(X_{i} \times_{X} X_{j})$$

正合，即 $F(X) \cong \ker(\alpha - \beta)$，其中
> 陈述续见 `nodes/thm.sheaf-descent.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.sheaf` 层 + `def.pretopology` 预拓扑 + `def.sieve` 筛：预拓扑下的层 $\iff$ 正合列　proofs/imp.sheaf-descent.md
- `def.sheaf` 层：用到了定义 层　proofs/def-dep.sheaf-descent.md
- `def.fibered-product` 纤维积 / 纤维余积：用到了定义 纤维积 / 纤维余积　proofs/def-dep.fibered-descent.md

> 说明见 `notes/thm.sheaf-descent.md`
