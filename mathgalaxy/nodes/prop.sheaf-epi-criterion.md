# 满态射的局部判据　`prop.sheaf-epi-criterion`
层中满态射的局部刻画
layer 16 · 命题 · 层与拓扑 · 范畴论

设 $\mathcal{C}$ 带预拓扑。层的态射 $u : F \to G$ 是满态射 $\iff$ 对每个 $X \in \mathcal{C}$ 与每个 $s \in G(X)$，存在覆盖 $(X_{i} \to X)_{i \in I}$ 使
> 陈述续见 `nodes/prop.sheaf-epi-criterion.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.sheaf` 层：用到了定义 层　proofs/def-dep.sheaf-epi-criterion.md

## 说明
一句话：**层的满态射是「局部满」**。整体上 $s$ 可能没有原像，但总能把 $X$ 切成一层覆盖，每块上都有原像 —— 这是「层上只有局部信息」最典型的体现。
