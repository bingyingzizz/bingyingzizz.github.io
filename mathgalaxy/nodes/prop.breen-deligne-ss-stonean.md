# Stonean 上 Breen–Deligne 的谱序列　`prop.breen-deligne-ss-stonean`
$E^{p,q}_{1} = \bigoplus_{i} H^{q}(M^{s_{p,i}} \times S,\ N)$
layer 17 · 命题 · 凝聚态上同调 · 凝聚态数学+同调代数

设 $M, N$ 是凝聚态阿贝尔群，$S$ 是 **Stonean 空间**。则有自然谱序列

$$E^{p,q}_{1} = \bigoplus_{i=1}^{r_{p}} H^{q}\bigl(M^{s_{p,i}} \times S,\ N\bigr) \implies \operatorname{Ext}^{p+q}_{\mathbb{Z}}(M, N)(S).$$

## 为什么成立（入边，证明在 proofs/）
- `def.spectral-sequence` 谱序列：用到了定义 谱序列　proofs/def-dep.bdss-spectral.md
- `def.stone-space` 全不连通与 Stone 空间：用到了定义 全不连通与 Stone 空间　proofs/def-dep.bdss-stone.md

refs: Le Stum, Proposition 8.3.4

> 说明见 `notes/prop.breen-deligne-ss-stonean.md`
