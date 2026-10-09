# 覆盖筛的四条等价　`prop.sieve-covering-equivalent`
覆盖筛的等价刻画（$\widetilde{R} \simeq \underline{X}$）
layer 19 · 命题 · 层与拓扑 · 范畴论

设 $\mathcal{C}$ 是 site，$X \in \mathcal{C}$，$R$ 是 $X$ 上的一个**筛**。则下列四条等价：

1. $R \in J(X)$（即 $R$ 是 $X$ 上的**覆盖筛**）；
2. $\widetilde{R} \simeq \underline{X}$；
3. $\underline{X} \simeq \varinjlim_{Y \in \mathcal{C}/R} \underline{Y}$；
4. $\coprod_{Y \in \mathcal{C}/R} \underline{Y} \longrightarrow \underline{X}$ 是**满态射**。

## 为什么成立（入边，证明在 proofs/）
- `def.sieve` 筛：用到了定义 筛　proofs/def-dep.sieveequiv-sieve.md
- `def.grothendieck-topology` Grothendieck 拓扑：用到了定义 Grothendieck 拓扑　proofs/def-dep.sieveequiv-topology.md
- `def.sheaf` 层：用到了定义 层　proofs/def-dep.sieveequiv-sheaf.md
- `thm.sheafification` 层化：用到了定义 层化　proofs/def-dep.sieveequiv-sheafification.md

> 说明见 `notes/prop.sieve-covering-equivalent.md`
