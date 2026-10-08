# 凝聚态集的刻画　`prop.condensed-criterion`
预层是凝聚态集的两条判据
layer 17 · 命题 · 凝聚态集 · 范畴论+拓扑学

$\mathbf{CHaus}$ 上的集合预层 $X$ 是凝聚态集 $\iff$

1. 对有限族 $(S_{i})_{i \in I}$：

$$X\Bigl(\coprod_{i \in I} S_{i}\Bigr) \;\cong\; \prod_{i \in I} X(S_{i})$$

2. 对任何**闭等价关系** $R \rightrightarrows S$：

$$X\bigl(\operatorname{coker}(R \rightrightarrows S)\bigr) \;\cong\; \ker\bigl(X(S) \rightrightarrows X(R)\bigr)$$

特别地 $X(\emptyset) \cong \{\ast\}$；等价地，若 $S' \to S$ 是满射，则
> 陈述续见 `nodes/prop.condensed-criterion.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.pretopos` 预拓扑斯：用到了定义 预拓扑斯　proofs/def-dep.pretopos-condensed-criterion.md
- `def.condensed-set` 凝聚态集：用到了定义 凝聚态集　proofs/def-dep.condensed-criterion.md

> 说明见 `notes/prop.condensed-criterion.md`
