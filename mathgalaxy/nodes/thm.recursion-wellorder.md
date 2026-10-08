# 超限递归　`thm.recursion-wellorder`
良序集上的递归定理（含超限归纳）
layer 7 · 定理 · 序数与超限 · 集合论

设 $(W, \preceq )$ 是**良序集**，$G$ 是任给的函数（可以取在一整个真类上）。记 $W_{< w} = \{ v \in W : v \prec w \}$。则存在**唯一**的函数 $F$ 定义在 $W$ 上，使

$$F(w) = G\big( F \upharpoonright W_{< w} \big), \qquad \forall w \in W$$

也就是说：**每一步只依赖前面已经取到的值**。
> 陈述续见 `nodes/thm.recursion-wellorder.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.wellorder` 良序集：良序性 $\implies$ 递归定理　proofs/imp.recursion-wellorder.md
- `def.wellorder` 良序集：用到了定义 良序集　proofs/def-link.wellorder-recursion.md

## 它能推出什么 / 谁在用它
- 被 `thm.wellordering` 良序定理 用
- ⇒ `thm.wellorder-ordinal` 良序集的序型

refs: Kunen, Set Theory, I.9；Jech, Set Theory, 2.3

> 说明见 `notes/thm.recursion-wellorder.md`
