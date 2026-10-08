# 函子　`def.functor`
函子（Functor）
layer 8 · 定义 · 函子与自然变换 · 范畴论

从范畴 $\mathcal{C}$ 到范畴 $\mathcal{D}$ 的**函子** $F : \mathcal{C} \to \mathcal{D}$ 由两部分组成：

- 对象上的映射 $X \mapsto F(X)$；
- 态射上的映射 $f \mapsto F(f)$，把 $f : X \to Y$ 送到 $F(f) : F(X) \to F(Y)$。

要求它**保持单位**与**保持复合**：

$$F(1_X) = 1_{F(X)}, \qquad F(g \circ f) = F(g) \circ F(f)$$

（只要 $g \circ f$ 有定义）。反方向的函子 $F : \mathcal{C}^{\mathrm{op}} \to \mathcal{D}$ 叫**反变函子**。

## 为什么成立（入边，证明在 proofs/）
- `def.category` 范畴：用到了定义 范畴　proofs/def-dep.category-functor.md
- `def.function` 函数：用到了定义 函数　proofs/def-dep.function-functor.md

## 它能推出什么 / 谁在用它
- 被 `lem.yoneda` 米田引理 用
- 被 `def.natural-transformation` 自然变换 用
- 被 `def.ff-faithful` 忠实 / 满 / 全忠实 用
- 被 `def.essentially-surjective` 本质满 用

> 说明见 `notes/def.functor.md`

- …另有出边，续页见 `nodes/def.functor.2.md`
