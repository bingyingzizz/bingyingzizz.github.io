# 凝聚态集满态射的判据　`prop.cond-epi`
凝聚态集的满态射
layer 16 · 命题 · 凝聚态集 · 范畴论+拓扑学

凝聚态集的态射 $X \to Y$ 是满态射 $\iff$ 对每个**自由**紧 Hausdorff 空间 $F$，$X(F) \to Y(F)$ 是满射。

## 为什么成立（入边，证明在 proofs/）
- `def.sheaf` 层 + `prop.cond-projectives` Cond 有足够多投射对象 + `def.free-presentation` 自由表示：满态射在自由空间上逐点检验　proofs/imp.cond-epi.md
- `def.sheaf` 层：用到了定义 层　proofs/def-dep.sheaf-cond-epi.md
- `def.free-compact-hausdorff` 自由紧 Hausdorff 空间：用到了定义 自由紧 Hausdorff 空间　proofs/def-dep.free-cond-epi.md
