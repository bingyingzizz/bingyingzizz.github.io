# Grothendieck 拓扑　`def.grothendieck-topology`
Grothendieck 拓扑与 site（Grothendieck Topology, Site）
layer 14 · 定义 · 层与拓扑 · 范畴论

范畴 $\mathcal{C}$ 上的 **Grothendieck 拓扑**是对每个 $X$ 指定一族**覆盖筛** $J(X)$，满足：

1. $h_{X} \in J(X)$；
2. **拉回稳定**：$R \in J(X)$、$f : Y \to X$ $\implies$ $f^{*}(R) := R \times_{h_{X}} h_{Y} \in J(Y)$；
3. **传递**：$R, R' \subseteq h_{X}$，若 $R' \in J(X)$ 且对每个 $f \in R'(Y)$ 有 $f^{*}(R) \in J(Y)$，则 $R \in J(X)$。
> 陈述续见 `nodes/def.grothendieck-topology.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.sieve` 筛：用到了定义 筛　proofs/def-dep.sieve-topology.md
- `def.presheaf` 预层：用到了定义 预层　proofs/def-dep.presheaf-topology.md
- `def.pretopology` 预拓扑：用到了定义 预拓扑　proofs/def-dep.pretopology-topology.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.covering-sieve-epi` 覆盖筛即余积满射
- 被 `def.sheaf` 层 用
- 被 `def.canonical-topology` 标准拓扑 用

> 说明见 `notes/def.grothendieck-topology.md`

- …另有出边，续页见 `nodes/def.grothendieck-topology.3.md`
