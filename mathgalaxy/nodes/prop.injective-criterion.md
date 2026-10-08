# 内射对象的判据　`prop.injective-criterion`
内射对象的四条等价说法
layer 14 · 命题 · 同调代数 · 范畴论

设 $\mathcal{A}$ 是阿贝尔范畴，$I \in \mathcal{A}$。下列等价：

1. $I$ 是**内射对象**；
2. 每个单态射 $I \rightarrowtail M$ 都有**收缩** $M \to I$；
3. 函子 $\operatorname{Hom}_{\mathcal{A}}(-, I)$ **正合**；
4. 每个短正合列 $0 \to I \to M \to M'' \to 0$ 都**分裂**。

进一步：若 $0 \to M' \to M \to M'' \to 0$ 正合且 $M'$ 内射，则

$$M \text{ 内射} \iff M'' \text{ 内射}$$

## 为什么成立（入边，证明在 proofs/）
- `def.mono` 单态射 / 满态射：用到了定义 单态射 / 满态射　proofs/def-dep.mono-injective-criterion.md
- `def.adjoint` 伴随函子：用到了定义 伴随函子　proofs/def-dep.adjoint-injective-criterion.md

> 说明见 `notes/prop.injective-criterion.md`
