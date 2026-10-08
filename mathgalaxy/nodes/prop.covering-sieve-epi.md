# 覆盖筛即余积满射　`prop.covering-sieve-epi`
覆盖族生成覆盖筛 $\iff$ 余积满射
layer 15 · 命题 · 层与拓扑 · 范畴论

族 $(X_{i} \to X)_{i \in I}$ 生成一个**覆盖筛** $\iff$ 余积 $\coprod_{i \in I} X_{i} \to X$ 是**满态射**（在 $\mathcal{C}$ 中）。

## 为什么成立（入边，证明在 proofs/）
- `def.sieve` 筛 + `def.grothendieck-topology` Grothendieck 拓扑 + `def.mono` 单态射 / 满态射：覆盖族生成覆盖筛 $\iff$ 余积满　proofs/imp.covering-sieve-epi.md
- `def.sieve` 筛：用到了定义 筛　proofs/def-dep.sieve-covering-epi.md

## 说明
这把一件看起来属于「拓扑」的事（什么算覆盖）翻译成一句纯范畴的话（余积是不是满射）。从此「$\{X_{i} \to X\}$ 覆盖 $X$」与「$\coprod_{i} X_{i} \to X$ 满」可以随意换着用。
