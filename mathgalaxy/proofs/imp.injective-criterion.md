# imp.injective-criterion
`imp.injective-criterion` · 推出 · strong 边 · 根 `../`

`def.abelian-category` 阿贝尔范畴 + `def.projective-object` 投射 / 内射对象 + `def.mono` 单态射 / 满态射 / 同构 + `def.adjoint` 伴随函子 + `thm.snake-lemma` 蛇引理 + `def.fibered-product` 纤维积 / 纤维余积 → `prop.injective-criterion` 内射对象的判据

证明用一张 $3 \times 3$ 的 $\operatorname{Hom}$ 图表：把短正合列 $0 \to A \to B \to C \to 0$ 用 $\operatorname{Hom}(-, M)$ 家族拉成三行，用两次蛇引理读出中间一行 $0 \to \ker f \to \ker g \to \ker h \to \operatorname{coker} f \to \operatorname{coker} g \to 0$，再看出第一行与第三行都是正合的，于是 $\ker g = \operatorname{coker} g = 0$。

**四条是一个循环，但每一跳的代价不同**（这也是为什么内射性有这么多“等价说法”，却总是用同一条来验证）：

> 续见 proofs/imp.injective-criterion.2.md
