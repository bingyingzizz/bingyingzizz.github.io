# Stonean 上 Ext 的截面公式　`lem.ext-stonean-section`
$\operatorname{Ext}^{n}(M, N)(S) \cong \operatorname{Ext}^{n}(M \cdot S,\ N)$
layer 17 · 引理 · 凝聚态上同调 · 凝聚态数学+同调代数

设 $M, N$ 是凝聚态阿贝尔群，$S$ 是 **Stonean 空间**。记 $M \cdot S := M \otimes_{\mathbb{Z}} \mathbb{Z}[S]$。则对一切 $n \ge 0$

$$\operatorname{Ext}^{n}_{\mathbb{Z}}(M, N)(S) \cong \operatorname{Ext}^{n}_{\mathbb{Z}}(M \cdot S,\ N).$$

## 为什么成立（入边，证明在 proofs/）
- `def.stone-space` 全不连通与 Stone 空间：用到了定义 全不连通与 Stone 空间　proofs/def-dep.extsec-stone.md
- `def.ext` 扩展群 Ext：用到了定义 扩展群 Ext　proofs/def-dep.extsec-ext.md

refs: Le Stum, Lemma 8.3.1

> 说明见 `notes/lem.ext-stonean-section.md`
