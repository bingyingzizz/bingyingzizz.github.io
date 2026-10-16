# 伴随 $\implies$ 右伴随存在的判据
`imp.adjoint-criterion` · 推出 · strong 边 · 根 `../`

`def.adjoint` 伴随函子 + `def.representable` 表示函子 → `thm.right-adjoint-criterion` 右伴随存在的判据

**$G$ 是函子。** 把 $G$ 的定义在 $g = 1_{Y}$ 处取出来：由于 $\alpha_{Y}^{-1}(1_{Y})$ 就是恒等截面，对应的态射是 $G(1_{Y}) = 1_{G(Y)}$。再取 $g \circ h$，三段拼接与先拼后作用给出同一个自然变换，用米田引理的双射唯一性得 $G(g \circ h) = G(g) \circ G(h)$。

**$\alpha$ 是自然的。** $G$ 的定义本身就让下面的方块交换（左边取 $g \circ -$，右边取 $- \circ G(g)$）：

> 续见 proofs/imp.adjoint-criterion.4.md
