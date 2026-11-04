# 同构　`def.isomorphism`
同构（可逆态射）—— 各分支的通名
layer 8 · 定义 · 范畴与图 · 范畴论+抽象代数
[在星图里打开](../#n=def.isomorphism)　·　[节点索引](../index.md)

设 $\mathcal{C}$ 是范畴，$f : X \to Y$ 是其中的态射。称 $f$ 是**同构**，如果存在态射 $g : Y \to X$ 使

$$g \circ f = \mathrm{id}_{X}, \qquad f \circ g = \mathrm{id}_{Y}.$$

这样的 $g$ 唯一（若 $g, g'$ 都行，则 $g = g' f g = g'$），记 $g = f^{-1}$；此时称 $X$ 与 $Y$ **同构**，记 $X \cong Y$。

## 为什么成立（入边，证明在 proofs/）
- [`def.category`](../nodes/def.category.md) 范畴：用到了定义 范畴　[proofs/dep.category-isomorphism.md](../proofs/dep.category-isomorphism.md)

refs: Mac Lane, Categories for the Working Mathematician, Ch. I §5；Lang, Algebra, Ch. I

> 说明见 `notes/def.isomorphism.md`

引用：`def.isomorphism`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
