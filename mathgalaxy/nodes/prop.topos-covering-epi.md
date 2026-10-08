# 拓扑斯中覆盖即余积满射　`prop.topos-covering-epi`
拓扑斯中的覆盖
layer 17 · 命题 · 拓扑斯 · 范畴论

拓扑斯 $\mathcal{T}$（配标准拓扑）中，族 $(X_{i} \to X)_{i \in I}$ 是覆盖 $\iff \coprod_{i \in I} X_{i} \to X$ 是满态射。

## 为什么成立（入边，证明在 proofs/）
- `def.topos` 拓扑斯：用到了定义 拓扑斯　proofs/def-dep.topos-covering-epi.md
- `def.grothendieck-topology` Grothendieck 拓扑：用到了定义 Grothendieck 拓扑　proofs/def-dep.topology-covering-epi.md

## 说明
这条在一般 site 里也对，但在拓扑斯里更顺手：拓扑斯的余积是「好」的（不交、万有），所以「覆盖」这个词在这里完全可以用余积与满射这两个纯范畴概念替换掉，一点几何残余都不剩。
